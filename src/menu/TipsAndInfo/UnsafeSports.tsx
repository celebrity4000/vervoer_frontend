import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import NavMenu from '../../components/NavMenu'
import Header from '../../components/Heading'
import { ColorsTemplate } from '../../constant/Color'
import Card from '../../components/Card'
import { useNavigation } from '@react-navigation/native'

const UnsafeSports = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground
            source={require('../../assets/GoogleMapTA.png')}
            style={{ flex: 1 }}
        >
            <NavMenu />
            <Header heading="Unsafe Stops" />
            <View
                style={{
                    width: '100%',
                    minHeight: '30%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <View>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            objectFit: 'contain',
                            position: 'absolute',
                            top: 60,
                            left: '35%',
                        }}
                        source={require('../../assets/My_Location.png')} />
                    <Image
                        style={{
                            width: 60,
                            height: 60,
                            objectFit: 'contain',
                            position: 'absolute',
                            top: 180,
                            left: '65%',
                        }}
                        source={require('../../assets/UnSafeStops.png')} />
                    <Image
                        style={{
                            width: 60,
                            height: 60,
                            objectFit: 'contain',
                            position: 'absolute',
                            top: 40,
                            left: '15%',
                        }}
                        source={require('../../assets/UnSafeStops.png')} />
                </View>
                <View
                    style={{
                        alignSelf: 'flex-end',
                    }}
                >
                    <Image
                        style={{
                            width: 100,
                            height: 100,

                        }}
                        source={require('../../assets/Current_Location.png')} />
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >

                <View
                    style={{
                        backgroundColor: ColorsTemplate.White,
                        width: '100%',
                        flexGrow: 1,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        paddingVertical: 20,
                    }}
                >
                    <Card
                        heading="Joshua Terminal, NY"
                        body="🕒 30 mins in Bus"
                        footer={
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ color: ColorsTemplate.Black }}>• Thieves & Goons</Text>
                                <Text style={{ color: ColorsTemplate.Black }}>• Construction Work in Progress</Text>
                                <Text style={{ color: ColorsTemplate.Black }}>• Insufficient Cleaning</Text>
                            </View>
                        }
                        containerStyle={{ backgroundColor: ColorsTemplate.Cultured, margin: 10, paddingVertical: 10, borderRadius: 10 }}
                        headingStyle={{ fontSize: 18, color: ColorsTemplate.Black, fontWeight: 'bold', paddingVertical: 0 }}
                        bodyStyle={{ marginVertical: 5 }}
                        bodyTextStyle={{ fontSize: 16, color: ColorsTemplate.Black }}
                        footerStyle={{ paddingVertical: 5, paddingHorizontal: 20 }}
                    />
                    <Card
                        heading="Joshua Terminal, NY"
                        body="🕒 30 mins in Bus"
                        footer={
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ color: ColorsTemplate.Black }}>• Thieves & Goons</Text>
                                <Text style={{ color: ColorsTemplate.Black }}>• Construction Work in Progress</Text>
                                <Text style={{ color: ColorsTemplate.Black }}>• Insufficient Cleaning</Text>
                            </View>
                        }
                        containerStyle={{ backgroundColor: ColorsTemplate.Cultured, margin: 10, paddingVertical: 10, borderRadius: 10 }}
                        headingStyle={{ fontSize: 18, color: ColorsTemplate.Black, fontWeight: 'bold', paddingVertical: 0 }}
                        bodyStyle={{ marginVertical: 5 }}
                        bodyTextStyle={{ fontSize: 16, color: ColorsTemplate.Black }}
                        footerStyle={{ paddingVertical: 5, paddingHorizontal: 20 }}
                    />
                    <Card
                        heading="Joshua Terminal, NY"
                        body="🕒 30 mins in Bus"
                        footer={
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ color: ColorsTemplate.Black }}>• Thieves & Goons</Text>
                                <Text style={{ color: ColorsTemplate.Black }}>• Construction Work in Progress</Text>
                                <Text style={{ color: ColorsTemplate.Black }}>• Insufficient Cleaning</Text>
                            </View>
                        }
                        containerStyle={{ backgroundColor: ColorsTemplate.Cultured, margin: 10, paddingVertical: 10, borderRadius: 10 }}
                        headingStyle={{ fontSize: 18, color: ColorsTemplate.Black, fontWeight: 'bold', paddingVertical: 0 }}
                        bodyStyle={{ marginVertical: 5 }}
                        bodyTextStyle={{ fontSize: 16, color: ColorsTemplate.Black }}
                        footerStyle={{ paddingVertical: 5, paddingHorizontal: 20 }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MarkOnMap')
                        }}
                        style={{
                            backgroundColor: ColorsTemplate.Orange,
                            padding: 15,
                            borderRadius: 30,
                            margin: 10,
                        }}
                    >
                        <Text style={{
                            color: ColorsTemplate.White,
                            textAlign: 'center',
                            fontSize: 16,
                        }}>
                            + Mark New Station as Unsafe
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ContactPublicMetro')
                        }}
                        style={{
                            backgroundColor: ColorsTemplate.DavysGray,
                            padding: 15,
                            borderRadius: 30,
                            margin: 10,
                        }}
                    >
                        <Text style={{
                            color: ColorsTemplate.White,
                            textAlign: 'center',
                            fontSize: 16,
                        }}>
                            Contact Public Metro
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </ImageBackground >
    )
}

export default UnsafeSports

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsTemplate.Cultured,
    },
})
