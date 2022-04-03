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

function decord10(str) {
    var tmpStr = "";
    let decArray = [];
 
    // 置換
    tmpStr = str.replace(/(<br>|<br \/>)/gi, ''); 
    tmpStr = tmpStr.replace(/(\(|（)/gi, '(');              // 左カッコを"("に置換
    tmpStr = tmpStr.replace(/(\)|）)/gi, ')');              // 右カッコを"("に置換
    tmpStr = tmpStr.replace(/\s+/gi, " ");                  // スペースを" "に置換
    tmpStr = tmpStr.replace(/&#/g, "");                         // "&#"を削除
    tmpStr = tmpStr.substr(0 , (tmpStr.length-1));              // 右端の";"を削除
    decArray = tmpStr.split(";");                               // ";"文字で分割、配列化
 
    // fromCharCode : 
    const result = String.fromCharCode.apply(null, decArray);         // デコード実行
    return result;
}

const Home = () => {
  const [ word, setWord ] = useState('');
  const [ title, setTitle ] = useState('');
  
  const onSearch = async () => {
    const url = GOOGLE + word;
    console.log(url);
    fetch(url)
    .then(res => res.text())
    .then(d => console.log(d))
    .catch(err => console.error(err));
    // const res = await fetch(url);
    // console.log(res);
    // const result = res.json();
    // console.log(result);
    // const data = [{
    //   "keyword": word,
    //   "location_code": 2840,
    //   "language_name": "Japanese",
    //   "filters": [
    //         ["keyword_info.search_volume", ">", 10]
    //     ],
    //   "limit": 3
    // }];
    // const res = await axios({
    //   method: 'post',
    //   url: url,
    //   auth: {
    //     username: 'nobu.s1322@gmail.com',
    //     password: '3d02f609b1eb5c2d',
    //   },
    //   data: data,
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // });
    // const result = res['data']['tasks'];
    // console.log(result);
    await addDoc(historyCollectionRef, { 
      id: uuid.v4(), 
      title: word, 
      createdAt: new Date() });
    setTitle(word);
    setWord('');

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
