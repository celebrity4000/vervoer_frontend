import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import NavMenu from '../../components/NavMenu';
import { ColorsTemplate } from '../../constant/Color';
import Header from '../../components/Heading';

const PrivacyPolicy = () => {
    return (
        <View style={styles.container}>
            <NavMenu />
            <Header heading="Privacy Policy" />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* Introduction Section */}
                <Text style={styles.sectionHeading}>Introduction</Text>
                <Text style={styles.sectionText}>
                    Welcome to our Privacy Policy page! When you use our mobile application, you trust us with your
                    information. This Privacy Policy is meant to help you understand what data we collect, why we
                    collect it, and what we do with it. This is important; we hope you will take time to read it
                    carefully.
                </Text>

                {/* Information Collection Section */}
                <Text style={styles.sectionHeading}>Information Collection</Text>
                <Text style={styles.sectionText}>
                    We collect various types of information in connection with the services we provide, including:
                </Text>
                <Text style={styles.bulletText}>
                    • Personal Information: Name, Email, Phone Number, etc.{'\n'}
                    • Usage Data: Information about how you interact with our application.{'\n'}
                    • Device Information: Device type, operating system, and other technical details.
                </Text>

                {/* Use of Information Section */}
                <Text style={styles.sectionHeading}>Use of Information</Text>
                <Text style={styles.sectionText}>
                    We use the information we collect in various ways, including to:
                </Text>
                <Text style={styles.bulletText}>
                    • Provide, operate, and maintain our application.{'\n'}
                    • Improve, personalize, and expand our services.{'\n'}
                    • Communicate with you, either directly or through one of our partners.{'\n'}
                    • Develop new products, services, features, and functionality.
                </Text>

                {/* Sharing of Information Section */}
                <Text style={styles.sectionHeading}>Sharing of Information</Text>
                <Text style={styles.sectionText}>
                    We may share your information in the following situations:
                </Text>
                <Text style={styles.bulletText}>
                    • With service providers who perform services on our behalf.{'\n'}
                    • For legal purposes, if required to comply with laws or respond to lawful requests.
                </Text>

                {/* Contact Information Section */}
                <Text style={styles.sectionHeading}>Contact Information</Text>
                <Text style={styles.sectionText}>
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                </Text>
                <Text style={styles.contactText}>
                    Email: support@example.com{'\n'}
                    Phone: +1 123-456-7890
                </Text>
            </ScrollView>
        </View>
    );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsTemplate.White,
    },
    contentContainer: {
        padding: 20,
    },
    sectionHeading: {
        color: ColorsTemplate.Black,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionText: {
        color: ColorsTemplate.Black,
        fontSize: 16,
        marginBottom: 15,
        lineHeight: 22,
    },
    bulletText: {
        color: ColorsTemplate.Black,
        fontSize: 16,
        marginBottom: 15,
        lineHeight: 22,
    },
    contactText: {
        color: ColorsTemplate.Black,
        fontSize: 16,
        marginTop: 10,
        lineHeight: 22,
    },
});
