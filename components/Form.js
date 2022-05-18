import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function Form({ addHandler }) {
  const [text, setValue] = useState('');
  
    const onChange = (text) => {
        setValue(text);
  };
  
    return (
     <View>
         <TextInput style={styles.input} onChangeText={onChange} placeholder='Задача' />
         <Button onPress={() => addHandler(text)} title='New Tasks' />
     </View>
  );
}

const styles = StyleSheet.create({
  input: {
      borderBottomWidth: 1,
      padding: 10,
      marginVertical: 30,
      marginHorizontal: '20%',
      width: '60%'
  }
});