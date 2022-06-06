import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function Category() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Prayers</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:24
    },
    titleText: {
        fontFamily:'Nunito-Bold',
        fontSize: 18,
    }

});