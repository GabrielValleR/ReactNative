import React from "react";
import {View, Text} from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.boxTilte}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}