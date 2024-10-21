import React from "react";
import { View , Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Member from "./Pages/Member/Member";
import Profile from "./Pages/Profile";

const Tab = createBottomTabNavigator();
function App(){
    return(
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MemberScreen" component={Member}/>
        <Tab.Screen name="ProfileScreen" component={Profile}/>
      </Tab.Navigator>
     </NavigationContainer>
    )
}

export default App;