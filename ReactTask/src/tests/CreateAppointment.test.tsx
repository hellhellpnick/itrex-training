import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
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
    const switchContent = jest.fn();
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
          <CreateAppointment switchContent={switchContent} />
        </BrowserRouter>
      </ThemeProvider>
    );

    userEvent.type(screen.getByRole('occupation'), 'surgeon');
    userEvent.type(screen.getByRole('doctorsName'), 'Oleg Dublyanin');
    userEvent.type(screen.getByRole('userNote'), 'stomach-ache');
    userEvent.click(screen.getByRole('2021-12-22T22:00:00.000Z'));
    userEvent.click(screen.getByRole('btnCreateAppointment'));

    await waitFor(() =>
      expect(screen.getByRole('doctorsName').nodeValue).toMatch(
        'Oleg Dublyanin'
      )
    );
    await waitFor(() =>
      expect(screen.getByRole('occupation').nodeValue).toMatch('surgeon')
    );
    await waitFor(() =>
      expect(screen.getByRole('userNote').nodeValue).toMatch('stomach-ache')
    );

    await waitFor(() => {
      expect(createPatient).toHaveBeenCalledWith({
        date: '2021-12-22T22:00:00.000Z',
        reason: '',
        note: 'stomach-ache',
        doctorID: '',
      });
    });
  });
});
