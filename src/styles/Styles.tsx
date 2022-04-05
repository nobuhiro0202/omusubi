import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  flame: {
    backgroundColor: 'white',
    height: 320,
    width: 320,
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
  },
  text: {
    color: 'white',
  },
  title: {
    backgroundColor: 'blue',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  history: {
    width: '100%',
    height: 60,
    paddingLeft: 30,
    paddingTop: 10,
    borderWidth: 1,
    borderBottomColor: 'gray',
  },
  h_text: {
    fontSize: 20
  }
});