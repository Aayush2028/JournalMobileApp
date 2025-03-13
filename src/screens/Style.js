import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginPageInput: {
      fontSize: 20, 
      borderColor: 'black', 
      borderWidth: 1,
      width: '50%',
      marginBottom: 5
    },
    loginPageSubmitButton: {
      fontSize: 15, 
      borderRadius: 5,
      borderWidth: 2,
      borderColor: 'red',
      backgroundColor: 'skyblue'
    },
    journalScreenButton:{
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 5
    },
    primary: {
        backgroundColor: 'skyblue', 
        textAlign: 'center',
        fontWeight: 'bold'
    },
    danger: {
        backgroundColor: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    modalInput: {
      fontSize: 15, 
      borderColor: 'black', 
      borderWidth: 1,
      width: 200,
      marginBottom: 5
    },
    addEntryStyle: {
      flex: 1, 
      justifyContent: 'center', 
      width: '50%', 
      height: 30, 
      marginTop: 10, 
      backgroundColor: 'lightgreen', 
      borderRadius: 5, 
      borderWidth: 2, 
      borderColor: 'green'
    },
    journalEntrySentiment: { 
      borderBottomWidth: 2, 
      borderBottomColor: 'black', 
      backgroundColor: 'lightgray', 
      textAlign: 'center',
      fontWeight: 900,
      fontSize: 20
    }

});

export default styles;