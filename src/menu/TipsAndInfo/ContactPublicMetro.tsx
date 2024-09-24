import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import NavMenu from '../../components/NavMenu';
import { ColorsTemplate } from '../../constant/Color';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

const ContactPublicMetro = () => {
    const navigation = useNavigation();
    const supportCenters = [
        { name: 'Support Centre 1', phone: '+1 1048285215' },
        { name: 'Support Centre 2', phone: '+1 1048285215' },
        { name: 'Support Centre 3', phone: '+1 1048285215' },
    ];

    return (
        <View style={styles.container}>
            <NavMenu />
            <View style={styles.innerContainer}>
                <Card
                    heading={
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 30 }}>
                            <Text style={styles.cardHeading}>Contact Public Metro</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.closeButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    body={
                        <View style={styles.cardBody}>
                            {supportCenters.map((center, index) => (
                                <View style={styles.contactRow} key={index}>
                                    <View style={styles.contactInfo}>
                                        <Text style={styles.textBlack}>{center.name}</Text>
                                        <Text style={styles.textGray}>📞 {center.phone}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Call</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    }
                    containerStyle={styles.cardContainer}
                />
            </View>
        </View>
    );
};

export default ContactPublicMetro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsTemplate.Black,
        paddingHorizontal: 10, // Adding padding to avoid content sticking to the edges
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cardBody: {
        flexDirection: 'column',
        alignItems: 'flex-start', // Aligning the content to the start for better structure
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: ColorsTemplate.Cultured,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15, // Increased margin for better separation between items
        shadowColor: ColorsTemplate.Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    contactInfo: {
        flexDirection: 'column',
        width: '65%', // Adjusted width for more space for button
    },
    textBlack: {
        color: ColorsTemplate.Black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    textGray: {
        color: ColorsTemplate.Grey,
        fontSize: 14,
        marginTop: 5, // Added margin for spacing between name and phone
    },
    button: {
        backgroundColor: ColorsTemplate.Orange, // Changed button color for better contrast
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: ColorsTemplate.Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    buttonText: {
        color: ColorsTemplate.White,
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardContainer: {
        backgroundColor: ColorsTemplate.White,
        padding: 20,
        borderRadius: 20,
        marginVertical: 10,
        shadowColor: ColorsTemplate.Black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    cardHeading: {
        color: ColorsTemplate.Orange,
        fontWeight: 'bold',
        fontSize: 20,
    },
    closeButton: {
        backgroundColor: ColorsTemplate.LightGray,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    closeButtonText: {
        color: ColorsTemplate.Black,
        fontSize: 14,
        fontWeight: 'bold',
    },
});
