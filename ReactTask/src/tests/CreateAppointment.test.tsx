import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import * as useActionsWithRedux from '../hooks/useActionsWithRedux';
import { CreateAppointment } from '../components';
import theme from '../theme';

jest.mock('./../redux/patient/patientOperations', () => ({}));
describe('Create appointments', () => {
  test('to be truthy', async () => {
    const createPatient = jest.fn((values) => {});
    const getAvailableTime = jest.fn(() => {});
    const getAllSpecializations = jest.fn();

    jest.spyOn(React, 'useEffect').mockImplementation(() => {});
    jest
      .spyOn<any, string>(useActionsWithRedux, 'default')
      .mockImplementation(() => ({
        getAllSpecializations,
        createPatient,
        getAvailableTime,
      }));

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CreateAppointment />
        </BrowserRouter>
      </ThemeProvider>
    );

    fireEvent.change(screen.getByRole('occupation'), {
      target: { textContent: 'surgeon' },
    });
    fireEvent.change(screen.getByRole('doctorsName'), {
      target: { textContent: 'Oleg Dublyanin' },
    });
    fireEvent.change(screen.getByRole('userNote'), {
      target: { textContent: 'stomach-ache' },
    });
    userEvent.click(screen.getByRole('2021-12-22T22:00:00.000Z'));
    userEvent.click(screen.getByRole('btnCreateAppointment'));

    await waitFor(() =>
      expect(screen.getByRole('occupation').textContent).toMatch('surgeon')
    );

    await waitFor(() =>
      expect(screen.getByRole('doctorsName').textContent).toMatch(
        'Oleg Dublyanin'
      )
    );

    await waitFor(() =>
      expect(screen.getByRole('userNote').textContent).toMatch('stomach-ache')
    );

    await waitFor(() => {
      expect(createPatient).toHaveBeenCalledWith({
        date: '',
        reason: 'stomach-ache',
        note: 'stomach-ache',
        doctorID: '',
      });
    });
  });
});
