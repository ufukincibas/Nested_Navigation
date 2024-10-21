import React from "react";
import { View , Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function ProfileEdit(){
    return(
        <View>
            <Text>Hello From ProfileEdit !</Text>
        </View>
    )
}

export default ProfileEdit;