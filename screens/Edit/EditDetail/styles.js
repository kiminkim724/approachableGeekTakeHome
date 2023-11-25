import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    marginHorizontal: 40,
    marginTop: 30,
    flex: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    height: 40,
    flex: 1,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
  },
  multiInputBox: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    height: 150,
    paddingLeft: 5,
  },
  updateButton: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  singleInputBox: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5,
    height: 75,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  inputLabel: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ababab',
    backgroundColor: 'transparent',
  },
});

export default styles;
