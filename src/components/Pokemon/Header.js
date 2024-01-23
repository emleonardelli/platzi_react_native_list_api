import { View, Text, StyleSheet, SafeAreaView, Image, Platform } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

const Header = (props) => {
  
  const {
    name,
    order,
    image,
    type,
  } = props;

  const color = getColorByPokemonType(type);

  const bgStyle = [{ backgroundColor: color, ...styles.bgStyle }]

  return (
    <>
        <View style={bgStyle}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name}>{capitalize(name)}</Text>
                <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={styles.contentImg}>
                <Image
                    source={{uri: image}}
                    style={styles.image}
                />
            </View>
        </SafeAreaView>
    </>
  )
}

export default Header

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
        width: 250,
        height: 400,
        marginTop: Platform.OS === "android" ? -100 : 0 ,
        resizeMode: "contain"
    },
});