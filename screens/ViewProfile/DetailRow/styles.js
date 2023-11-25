import {StyleSheet} from 'react-native';

const lightGray = '#ababab';

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: lightGray,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 5,
    alignItems: 'space-between',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: lightGray,
  },
  detail: {
    fontWeight: 'bold',
    color: 'black',
    flexWrap: 'wrap',
    width: 320,
    marginVertical: 5,
  },
  button: {
    alignSelf: 'center',
    color: lightGray,
    fontSize: 20,
  },
});

export default styles;
