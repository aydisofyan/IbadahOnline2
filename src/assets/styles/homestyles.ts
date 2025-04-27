import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5D39B3',
    alignItems : 'center',
  },
  buttonBox: {
    borderWidth: 2,
    borderColor: '#C38A61', 
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 17,
    backgroundColor: '#C38A61', 
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
