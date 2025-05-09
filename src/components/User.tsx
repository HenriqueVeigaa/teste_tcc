import React from "react";
import { Text, View } from "react-native";
import { Avatar, AvatarImage } from "./Avatar";

export function User() {
return(
    <View className="items-center">

        <Avatar>
            <AvatarImage source={{}}/>
        </Avatar>

        <Text className="text-white font-bold text-2xl mt-4">
            Henrique
        </Text>
        <Text className="text-gray-400 text-lg">
            @henriqueveiga
        </Text>

    </View>
)
}
