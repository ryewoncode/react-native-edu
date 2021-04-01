import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';

// 클래스형 컴포넌트
// class MyComponentSate extends Component {
//     constructor() {
//         super();
//         this.state = { count: 2021 };
//         this.setCouunt = this.setCouunt.bind(this);
//     }
//     setCouunt = () => {
//         this.setState({ count: this.state.count + 1 });

//     }
//     render() {
//         return(
//             <View>
//                 <Text onPress={this.setCouunt}>{this.state.count}</Text>
//             </View>
//         )
//     }
// }

// 함수형 컴포넌트
const MyComponentSate = () => {
    const [count, setCount] = useState(2025);

    return(
    <View>
        <Text onPress={() => {setCount(count + 1)}}>{count}</Text>
    </View>
    )
}

export default MyComponentSate;