import { StackNavigator } from 'react-navigation';
import LoginContainer from './login/logincontainer';
import SignupContainer from './signup/signupcontainer';
import Home from './drawer/drawer';

const App = StackNavigator({
  Login: { screen: LoginContainer },
  Signup: { screen: SignupContainer },
  Drawer: { screen: Home },
}, {
  headerMode: 'screen',
  navigationOptions: {
    header: null,
  },
});

export default App;
