import React from 'react';
import {StyleSheet,View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const color='#6E01EF';
const size=100;

const App= () => {

  return (
 
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={[styles.dot,styles.center]}>
          
          <Icon name='phone-outgoing' size={32} color="#ffffff"/>
          </View>
      
        </View>
    
  );
};

const styles = StyleSheet.create({
   dot:{
    width:size,
    height:size,
    borderRadius:size,
    backgroundColor:color
   },
   center:{
    alignItems:'center',
    justifyContent:'center'
   }
});

export default App;
