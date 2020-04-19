import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Fruit =(props)=>{
  return(
    <View>
      <Text>{props.name}</Text>
  <Text>{props.cost}</Text>
    </View>
  )
}


class App extends React.Component{
  render(){
    const Fruits = [
      {name:'Apple',cost:400},
      {name:'Mango',cost:700},
      {name:'PineApple',cost:800}
    ]
    return(
      <View style={styles.container}>
         {
           Fruits.map((fruit)=>{
             return(
               <Fruit name={fruit.name} cost={fruit.cost}/>
             )
           })
         }
      </View>
    )
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
