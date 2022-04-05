import React, { useState } from 'react';
import { 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  Text,
  View
} from 'react-native';
import { styles } from '../styles/Styles';
import { Flame } from '../components/Flame';
import uuid from 'react-native-uuid';
import { historyCollectionRef } from '../plugins/firebase';
import { addDoc } from 'firebase/firestore';
import { GOOGLE } from '../apis/suggest_service';
const { parseString } = require('react-native-xml2js');


const Home = () => {
  const [ word, setWord ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ suggest, setSuggest ] = useState([]);
  
  const onSearch = async () => {
    if (word !== '') {
      const url = GOOGLE + word;
      fetch(url)
      .then(res => res.text())
      .then(d => {
        parseString(d, (err: any, result: any) => {
          const s = result['toplevel']['CompleteSuggestion'];
          const st = s.map(t => t['suggestion'][0]['$']['data'].replace(word, ''));
          setSuggest(st);
        });
        console.log(suggest);
      })
      .catch(err => console.error(err));
      await addDoc(historyCollectionRef, { 
        id: uuid.v4(), 
        title: word, 
        createdAt: new Date() });
      setTitle(word);
      setWord('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Flame value={ title } />
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          value={word}
          onChangeText={setWord}
          placeholder='key word ...'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onSearch}
        >
          <Text style={styles.text}>検索</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
