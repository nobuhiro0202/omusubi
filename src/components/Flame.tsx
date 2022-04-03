import React from "react";
import { View, Text} from 'react-native';
import { styles } from '../styles/Styles';

export const Flame = ({ value }) => {

  return (
    <View style={styles.flame}>
      {value.trim() !== '' ?
        <View style={styles.title}>
          <Text style={styles.text}>{ value }</Text>
        </View>
       : <Text></Text>
      }
    </View>
  );
}