import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import * as useActionsWithRedux from '../hooks/useActionsWithRedux';
import { FormSignIn } from '../components';
import theme from '../theme';

jest.mock('./../redux/patient/patientOperations', () => ({}));
type Default = string;
describe('SignInForm', () => {
  test('Submit form "Sign in"', async () => {
    const loginUser = jest.fn((values) => {});
    jest.spyOn<any, Default>(useActionsWithRedux, 'default').mockImplementation(() => ({
      loginUser,
    }));

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <FormSignIn />
        </BrowserRouter>
      </ThemeProvider>
    );

    userEvent.type(screen.getByRole('userName'), 'hell@gmail.com');
    userEvent.type(screen.getByRole('password'), 'Hell22');
    userEvent.click(screen.getByRole('btnSignIn'));

    await waitFor(() =>
      expect(loginUser).toHaveBeenCalledWith({
        userName: 'hell@gmail.com',
        password: 'Hell22',
      })
    );
  });
});
