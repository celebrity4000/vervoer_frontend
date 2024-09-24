import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import NavMenu from '../../components/NavMenu'
import Header from '../../components/Heading'
import { ColorsTemplate } from '../../constant/Color'
import Card from '../../components/Card'
import { useNavigation } from '@react-navigation/native'

const MarkOnMap = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground
            source={require('../../assets/GoogleMapTA.png')}
            style={{ flex: 1 }}
        >
            <NavMenu />
            <Header heading="Mark On Map" />
            <View
                style={{
                    width: '100%',
                    minHeight: '25%',
                }}
            >
                {/* Empty space or any other content */}
            </View>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{
                    backgroundColor: ColorsTemplate.White,
                    width: '100%',
                    flexGrow: 1,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingVertical: 20,
                }}
            >

                <View>
                    <Text>Or Add Station Name Manually</Text>

                </View>
            </ScrollView>
        </ImageBackground >
    )
}

export default MarkOnMap

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsTemplate.Cultured,
    },
})
