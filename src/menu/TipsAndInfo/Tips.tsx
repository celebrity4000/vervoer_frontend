import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavMenu from '../../components/NavMenu'
import Header from '../../components/Heading'
import Card from '../../components/Card'
import { ColorsTemplate } from '../../constant/Color'
import CollapsibleCard from '../../components/CollapsibleCard'
import { useNavigation } from '@react-navigation/native'

const Tips = () => {
    const { width } = Dimensions.get('window')
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <NavMenu />
            <Header heading="Featured Tips" />
            <ScrollView
                contentContainerStyle={{
                    width: '100%',
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View>
                    <Card
                        containerStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 20 }}
                        heading="Lorem ipsum dolor sit amet, consetetur"
                        body="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elit."
                    />
                    <Card
                        containerStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
                        heading="Lorem ipsum dolor sit amet, consetetur"
                        body="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elit."
                        bodyStyle={{ paddingBottom: 20 }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    gap: 20,
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 20,
                        color: ColorsTemplate.Black,
                        padding: 20,

                    }}>
                        Guides
                    </Text>
                    <Card
                        containerStyle={{ borderRadius: 15, width: '93%' }}
                        heading="Beginner’s Guide"
                        body="How to use Vervoer Website?"
                        bodyTextStyle={{ paddingBottom: 20, fontSize: 18, color: ColorsTemplate.Orange }}
                    />
                    <Card
                        containerStyle={{ borderRadius: 15, width: '93%' }}
                        heading="Android App Guide"
                        body="How to use Vervoer Android App?"
                        bodyTextStyle={{ paddingBottom: 20, fontSize: 18, color: ColorsTemplate.Orange }}
                    />
                    <Card
                        containerStyle={{ borderRadius: 15, width: '93%' }}
                        heading="iOS App Guide"
                        body="How to use Vervoer iOS App?"
                        bodyTextStyle={{ paddingBottom: 20, fontSize: 18, color: ColorsTemplate.Orange }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    marginHorizontal: 15,
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 20,
                        color: ColorsTemplate.Black,
                        padding: 20,
                        paddingLeft: 0

                    }}>
                        FAQ
                    </Text>
                    <CollapsibleCard
                        heading="Plug and play networks?"
                        body="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum"
                    />
                    <CollapsibleCard
                        heading="Collaboratively Empowered Markets?"
                        body="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum"
                    />
                    <CollapsibleCard
                        heading="Visualize Customer Directed "
                        body="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum"
                    />
                    <CollapsibleCard
                        heading="Efficiently Unleash Cross-Media?"
                        body="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum"
                    />
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 20,
                        color: ColorsTemplate.Black,
                        padding: 20,
                        lineHeight: 30

                    }}>
                        Issue Related Unsafe Bus & Train
                        Stations?
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                marginBottom: 20,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('UnsafeStops')
                                }}
                            >
                                <Card
                                    containerStyle={{
                                        borderRadius: 15,
                                        marginTop: 20,
                                        width: width * 0.4,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginHorizontal: 8,
                                    }}
                                    heading={
                                        <Image
                                            source={require("../../assets/Icons/UnsafeTrain.png")}
                                            style={{ width: 80, height: 80 }}
                                        />
                                    }
                                    body="Unsafe Train Stops"
                                    bodyTextStyle={{ paddingBottom: 20, fontSize: 14, paddingHorizontal: 8 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('UnsafeStops')
                                }}
                            >
                                <Card
                                    containerStyle={{
                                        borderRadius: 15,
                                        marginTop: 20,
                                        width: width * 0.4,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginHorizontal: 8,
                                    }}
                                    heading={
                                        <Image
                                            source={require("../../assets/Icons/UnsafeBus.png")}
                                            style={{ width: 80, height: 80 }}
                                        />
                                    }
                                    body="Unsafe Bus Stops"
                                    bodyTextStyle={{ paddingBottom: 20, fontSize: 14 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Tips

const styles = StyleSheet.create({})
