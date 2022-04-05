import { 
  View,
  Text, 
  SafeAreaView
 } from 'react-native';
import { styles } from '../styles/Styles';
import { historyCollectionRef } from '../plugins/firebase';
import { getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const History = () => {
  const [histories, setHistories] = useState([]);
  const isFocused = useIsFocused();
  
  useEffect(() => {
    const getHistories = async () => {
      const data = await getDocs(historyCollectionRef);
      setHistories(data?.docs?.map(doc => ({ ...doc.data() })));
    }
    if (isFocused) {
     getHistories();
    }
  }, [isFocused]);
  

  return (
    <SafeAreaView style={styles.container}>
      {histories?.map((history, index) => <View style={styles.history}><Text key={index} style={styles.h_text}>title: {history.title}</Text></View>)}
    </SafeAreaView>
  );
};

export default History;
