import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import NavMenu from '../../components/NavMenu'
import { ColorsTemplate } from '../../constant/Color'
import Card from '../../components/Card'
import { useNavigation } from '@react-navigation/native'

const ContactPublicMetro = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <NavMenu />
            <View style={styles.innerContainer}>
                <Card
                    heading="Contact Public Metro"
                    body={
                        <View style={styles.cardBody}>
                            <View style={styles.contactRow}>
                                <View style={styles.contactInfo}>
                                    <Text style={styles.textBlack}>Support Center 1</Text>
                                    <Text style={styles.textBlack}>📞 0800 123 456</Text>
                                </View>
                                <TouchableOpacity

                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Call</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    containerStyle={styles.cardContainer}
                    headingStyle={styles.cardHeading}
                />
            </View>
        </View>
    )
}

export default ContactPublicMetro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsTemplate.Black,
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    cardBody: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    contactInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%', // Adjusted width for better layout
    },
    textBlack: {
        color: ColorsTemplate.Black,
    },
    button: {
        backgroundColor: ColorsTemplate.Orange,
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: ColorsTemplate.White,
    },
    cardContainer: {
        backgroundColor: ColorsTemplate.White,
        margin: 10,
        paddingVertical: 10,
        borderRadius: 20,
    },
    cardHeading: {
        fontSize: 20,
        color: ColorsTemplate.Orange,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
})
