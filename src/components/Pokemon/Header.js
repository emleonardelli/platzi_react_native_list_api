import { View, Text, StyleSheet, SafeAreaView, Image, Platform, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { capitalize } from 'lodash';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

const Header = (props) => {
  const [size, setSize] = useState('small');
  const {
    name,
    order,
    image,
    type,
  } = props;

  const color = getColorByPokemonType(type);

  const bgStyle = [{
    backgroundColor: color,
    ...styles.bgStyle,
    height: getSize(size).height
    }]

  return (
    <>
        <View style={bgStyle}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name}>{capitalize(name)}</Text>
                <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={styles.contentImg}>
                <TouchableWithoutFeedback
                    onPress={() => toogleSize(size, setSize)}
                >
                    <Image
                        source={{uri: image}}
                        style={{
                            ...styles.image,
                            ...getSize(size)
                        }}
                    />
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    </>
  )
}

export default Header

const toogleSize = (size, setSize) => {
    switch (size) {
        case 'small': setSize('medium');break;
        case 'medium': setSize('large');break;
        case 'large': setSize('small');break;
    }
}

const getSize = (size) => {
    const values={
        width: 250,
        height: 400,
    };
    switch (size) {
        case 'small':
            values.width= 250;
            values.height= 400;
        break;
        case 'medium':
            values.width= 350;
            values.height= 500;
        break;
        case 'large':
            values.width= 450;
            values.height= 600;
        break;
   }
   return values;
}

const styles = StyleSheet.create({
    bgStyle: {
        width: "100%",
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2}]
    },
    content: {
        marginHorizontal: 30,
        marginTop: Platform.OS === "android" ? 60 : 0,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 27
    },
    order: {
        color: "white",
        fontWeight: "bold"
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30,
    },
    image: {
        width: getSize().width,
        height: 400,
        marginTop: Platform.OS === "android" ? -100 : 0 ,
        resizeMode: "contain"
    },
});