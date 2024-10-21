import React from "react";
import { View , Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Member from "./Pages/Member/Member";
import MemberDetail from "./Pages/Member/MemberDetail";
import MemberUpdate from "./Pages/Member/MemberUpdate";

import Profile from "./Pages/Profile";
import ProfileEdit from "./Pages/Profile/ProfileEdit";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MemberStack(){
  return(

      <Stack.Navigator>
          <Stack.Screen name="MemberScreen" component={Member}/>
          <Stack.Screen name="MemberDetailScreen" component={MemberDetail}/>
          <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate}/>
      </Stack.Navigator>
 

  )
}

function ProfileStack(){
  return(

    <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={Profile} />
        <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>

  )
}

function App(){
    return(
     <NavigationContainer>
      <Tab.Navigator initialRouteName="MemberPage">
      <Tab.Screen name="ProfilePage" component={ProfileStack}/>
        <Tab.Screen name="MemberPage" component={MemberStack}/>
        {/* MemberStack yapısını direk componente verdik */}
       
      </Tab.Navigator>
     </NavigationContainer>
    )
}

export default App;