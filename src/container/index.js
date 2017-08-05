import { StackNavigator } from 'react-navigation';
import LoginContainer from './login/logincontainer';
import SignupContainer from './signup/signupcontainer';

const App = StackNavigator({
  Login: { screen: LoginContainer },
  Signup: { screen: SignupContainer },
}, {
  headerMode: 'screen',
  navigationOptions: {
    header: null,
  },
});

export default App;
