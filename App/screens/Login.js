import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { InputText, TextButton } from "../components"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const Login = ({ navigation }) => {
      return (
        <KeyboardAvoidingView style={{
        flex: 1,
        alignItems: 'center',
          justifyContent: 'center',
        backgroundColor: COLORS.primary

      }}>
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Image source={images.ethereum} />

        </View>
        <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', width: '90%'}}>
            <InputText
              placeholder="Email"
              onChangeText={() => {}}
            />
                        <InputText
              placeholder="Senha"
              onChangeText={() => {}}
            />

                          <TextButton
                    label="Acessar"
                    onPress={() => navigation.navigate(
                        "Home", {}
                    )}
          />
                          <TextButton
                    label="Criar Conta"
                    onPress={() => navigation.navigate(
                        "Home", {}
                    )}
                />

        </View>
      </KeyboardAvoidingView>
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

export default Login