import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import * as useActionsWithRedux from '../hooks/useActionsWithRedux';
import { MainPatientsAppointment } from '../components';
import theme from '../theme';

const appointments = [
  {
    id: 'id',
    reason: 'string',
    note: 'string',
    patient_id: 'string',
    doctor_id: 'string',
    visit_date: 'string',
    status: 'string',
    doctor: {
      last_name: 'string',
      first_name: 'string',
      id: 'string',
      photo: 'string',
      specialization_name: 'string',
    },
  },
];

jest.mock('./../redux/patient/patientOperations', () => ({
  getPatients: () =>
    new Promise((resolve) =>
      resolve({
        data: {
          appointments,
        },
      })
    ),

  changeIsAddedState: () => {},
}));

describe('User patients', () => {
  const mock = new MockAdapter(axios);
  test('Patients list', async () => {
    jest
      .spyOn<any, string>(useActionsWithRedux, 'default')
      .mockImplementation(() => ({
        appointments: [],
      }));

    mock
      .onGet('/api/appointments/patient/me', {
        params: { offset: 0, limit: 5, token: '...' },
      })
      .reply(500, {
        appointments,
      });

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainPatientsAppointment />
        </BrowserRouter>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(getAllByTestId('id')).toHaveLength(appointments.length);
    });
  });
});
