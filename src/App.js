
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { store } from './components/store/Store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import TopNav from './components/TopNav';


function SecureRoute(props) {

  console.log(1111111111111)

  return (<Route path={props.path} render={(data) => {

    if (store.getState().is_logged_in) {
      return <props.component {...data} ></props.component>
    } else {

      return <Redirect to={{ pathname: '/login' }}></Redirect>
    }

  }}>

  </Route>)

}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // let isLoggedIn=store.
  // console.log()
  return (
    <Route {...rest} render={
      props => {
        if (store.getState().is_logged_in) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )

}
function App() {
  return (
    <div className="App">
      <Provider store={store}>


        <BrowserRouter>
          <Route path='/' component={TopNav}></Route>
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <SecureRoute exact path='/' component={Home}></SecureRoute>
            <SecureRoute exact path='/dashboard' component={Dashboard}></SecureRoute>
          </Switch>




        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
