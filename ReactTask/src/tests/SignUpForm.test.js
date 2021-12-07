import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import * as useActionsWithRedux from '../hooks/useActionsWithRedux';
import { FormSignUp } from '../components';
import theme from '../theme';

jest.mock('./../redux/patient/patientOperations', () => ({}));

describe('SignUpForm', () => {
  test('Submit form "Sign up"', async () => {
    const registerUser = jest.fn((values) => {});
    jest.spyOn(useActionsWithRedux, 'default').mockImplementation(() => ({
      registerUser,
    }));

    render(
      <ThemeProvider theme={theme}>
        <FormSignUp />
      </ThemeProvider>
    );

    userEvent.type(screen.getByRole('firstName'), 'Alex');
    userEvent.type(screen.getByRole('lastName'), 'Vodorez');
    userEvent.type(screen.getByRole('userName'), 'hellpAlex@gmail.com');
    userEvent.type(screen.getByRole('password'), 'Hell22');
    userEvent.type(screen.getByRole('checkPassword'), 'Hell22');
    userEvent.click(screen.getByRole('btnSignUp'));

    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith({
        userName: 'hellpAlex@gmail.com',
        password: 'Hell22',
        firstName: 'Alex',
        lastName: 'Vodorez',
      });
    });
  });
});
