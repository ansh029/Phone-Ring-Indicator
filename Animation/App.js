import React from 'react';
import {StyleSheet,View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { MotiView } from 'moti'
import {Easing} from 'react-native-reanimated';


const color='#6E01EF';
const size=100;

const App= () => {

  return (
 
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={[styles.dot,styles.center]}>
            {[...Array(3).keys()].map(index=>{
              return (
              <MotiView
              from={{opacity:0.7,scale:1}}
              animate={{opacity:0,scale:4}}
              transition={{
                type:'timing',
                duration:2000,
                easing:Easing.out(Easing.ease),
                delay:index*400,
                loop:true,
                repeatReverse:false
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject,styles.dot]}/>
              );
            })}
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