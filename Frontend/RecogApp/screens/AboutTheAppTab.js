import React from 'react';
import { Text, View, StyleSheet, Button,  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles';

export default function AboutTheAppTab(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> About The App </Text>
        </View>

    );
}
