import { FunctionComponent, Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Loader } from './components';
import { Router } from './Router';
import { ResolutionPatient } from './components';
import theme from './theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <div className='App'>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Router />
              </Switch>
              <ResolutionPatient
                changeShowResolution={() => {}}
                showContent={false}
                namePesron='Aleks Murda'
                textAreaMessage='We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels. 
            In those with pre-diabetes (IFG/IGT), lifestyle modification should bestrongly recommended and progression of glycemic abnormalities followed by screening at least yearly.'
                statusForm={true}
              />
            </Suspense>
          </div>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
