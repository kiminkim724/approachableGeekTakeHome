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
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  updateButton: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'column',
    paddingTop: 5,
    paddingLeft: 10,
    height: 80,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: '47%',
  },
  text: {
    marginLeft: 10,
  },
  inputLabel: {
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#b3b3b3',
  },
  inputText: {
    height: 45,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    padding: 0,
    margin: 0,
    flexWrap: 'wrap',
  },
});

export default styles;
