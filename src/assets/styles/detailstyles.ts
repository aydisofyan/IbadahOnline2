import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    padding: 50,
    backgroundColor: '#28184D',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#e0f7fa',
  },
  item: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  ayatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
   ayatNumber: {
     backgroundColor: '#28184D',
     color: 'white',
     fontWeight: 'bold',
     paddingHorizontal: 10,
     paddingVertical: 5,
     borderRadius: 15,
     overflow: 'hidden',
     marginRight: 10,
     fontSize: 14,
     textAlign: 'center',
   },
  arab: {
    fontSize: 22,
    color: '#28184D',
    flex: 1,
    textAlign: 'right',
  },
  translation: {
    fontSize: 16,
    color: '#28184D',
    marginTop: 8,
  },
});
