import React from "react";
import { View , Text, Button } from "react-native";

function MemberDetail({navigation}){
    return(
        <View>
            <Text>Hello From MemberDetail !</Text>
            <Button title="Update" 
            onPress={() => navigation.navigate("MemberUpdateScreen")}/>
        </View>
    )
}

export default MemberDetail;