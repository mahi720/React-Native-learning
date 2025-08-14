import React, { Component } from "react";
import { Text, View } from "react-native";
import SecondClassComponent from "./SecondClassComponent";

class ClassComponents extends Component {

    render() {
        const age = 23
        return (
            <View>
                <Text style={{fontSize: 20}}>Class Components</Text>
                <SecondClassComponent data = {age} />
            </View>
        )
    }
}

export default ClassComponents;