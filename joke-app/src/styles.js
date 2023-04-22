import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#887880',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 80,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'mistyrose'
  },
  jokeText: {
    fontWeight: "bold",
    color: 'mistyrose',
    textAlign: 'center',
    width: '90%',
    fontSize: 48,
  },
  punchline: {
    fontWeight: "bold", 
    textAlign: 'center',
    color: '#D0A5C0',
    fontSize: 32,
  },
  bigButton: {
    backgroundColor: '#565554',
    padding: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  show: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 88,
    padding: 16,
  },
});