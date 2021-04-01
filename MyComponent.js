import React, { Component } from 'react';
import { View, Text } from 'react-native';

// 클래스형 컴포넌트
// class MyComponent extends Component {
//   constructor() {
//     super();
//     console.log('constructor');
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//   hi() {
//     console.log('hi');
//   }
//   render(){
//     this.hi();
//     return (
//       <View><Text>MyComponent</Text></View>
//     )
//   }
// }

// 함수형 컴포넌트
const MyComponent = (props) => {
    return (
    <View>
      <Text>MyComponent function style!</Text>
      <Text>{props.name}</Text>
      <Text>{props.children}</Text>
    </View>
    );
  }
  
export default MyComponent;
