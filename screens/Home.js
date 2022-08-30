import react from "react";
import { StyleSheet,View,Text,TouchableOpacity,SafeAreaView } from "react-native";

const Home = props => {

    const [names, setNames] = React.useState([]);
    const [textInput, setTextInput] = React.useState('');
  
    React.useEffect(() => {
      getNamesFromUserDevice();
    }, []);
  
    React.useEffect(() => {
      saveNameToUserDevice(names);
    }, [names]);
  
    const addName = () => {
      if (textInput == '') {
        Alert.alert('Error', 'Please input name');
      } else {
        const newName = {
          id: Math.random(),
          task: textInput,
          completed: false,
        };
        setNames([...names, newName]);
        setTextInput('');
      }
    };
  
    const saveNameToUserDevice = async names => {
      try {
        const stringifyNames = JSON.stringify(names);
        await AsyncStorage.setItem('names', stringifyNames);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getNamesFromUserDevice = async () => {
      try {
        const names = await AsyncStorage.getItem('names');
        if (names != null) {
          setNames(JSON.parse(names));
        }
      } catch (error) {
        console.log(error);
      }
    };
  
  
  
    const deleteName = namesId => {
      const newNamesItem = names.filter(item => item.id != nameId);
      setNames(newNamesItem);
    };
  
    const clearAllNames = () => {
      Alert.alert('Confirm', 'Clear names?', [
        {
          text: 'Yes',
          onPress: () => setNames([]),
        },
        {
          text: 'No',
        },
      ]);
    };
  

};

const styles = StyleSheet.create({

    
      

});

export default Home;
