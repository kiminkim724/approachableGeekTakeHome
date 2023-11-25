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
    fontSize: 26,
    marginBottom: 40,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  updateButton: {
    alignSelf: 'stretch',
    marginBottom: 40,
  },
});

export default styles;
