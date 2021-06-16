import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {  COLORS, SIZES, FONTS, icons} from "../constants"

const PriceAlert = ({ customContainerStyle }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 4.5,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        ...customContainerStyle,
        ...styles.shadow

      }}
    >
      <Image
        source={icons.notification_color}
        style={{
          width: 30,
          height: 30
        }}
      />

      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h2 }}>Criar Alerta de Preço</Text>
         <Text style={{...FONTS.body4 }}>Seja Notificado quando seu preço atingir a meta.</Text>
      </View>

            <Image
        source={icons.right_arrow}
        style={{
          width: 25,
          height: 25,
          tintColor: COLORS.gray
        }}
      />

    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
      shadowRadius: 4.65,
        
      elevation: 8

        
    }
})

export default PriceAlert;