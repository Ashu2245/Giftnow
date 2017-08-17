import { StyleSheet } from 'react-native';
import { HEXCOLOR } from '../../style/hexcolor';

const style = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: HEXCOLOR.CloudBurst,
  },
  innerContainer: {
    flex: 1,
  },
  viewHeight: {
    height: 140,
  },
  textinputLabel: {
    marginLeft: 5,
    justifyContent: 'center',
    color: HEXCOLOR.WhiteColor,
  },
  inputStyle: {
    marginLeft: 5,
    color: HEXCOLOR.WhiteColor,
  },
  buttonText: {
    alignSelf: 'center',
  },
  logo: {
    flex: 1,
    height: 150,
    width: 220,
    alignSelf: 'center',
    // marginTop: 5,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 70,
  },
  button: {
    alignSelf: 'center',
    width: 300,
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#f442b3',
  },
  googlebutton: {
    alignSelf: 'center',
    width: 300,
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#2980b9',
  },
  facebookbutton: {
    alignSelf: 'center',
    width: 300,
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#2980b9',
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    marginLeft: 5,
    justifyContent: 'center',
  },
});

export default style;
