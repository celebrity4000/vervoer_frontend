import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import NavMenu from '../../components/NavMenu';
import { ColorsTemplate } from '../../constant/Color';
import Header from '../../components/Heading';

const CookiePolicy = () => {
    return (
        <View style={styles.container}>
            <NavMenu />
            <Header heading="Cookie Policy" />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* What Are Cookies Section */}
                <Text style={styles.sectionHeading}>What Are Cookies?</Text>
                <Text style={styles.sectionText}>
                    Cookies are small text files that are stored on your device (computer, smartphone, or other electronic device) when you visit a website. They help the website remember your preferences and enable features like user logins and personalized content.
                </Text>

                {/* How We Use Cookies Section */}
                <Text style={styles.sectionHeading}>How We Use Cookies</Text>
                <Text style={styles.sectionText}>
                    We use cookies to enhance your experience on our mobile application. Cookies help us to:
                </Text>
                <Text style={styles.bulletText}>
                    • Understand your preferences and customize our application.{'\n'}
                    • Remember your login details and keep you logged in.{'\n'}
                    • Provide relevant content and advertisements.{'\n'}
                    • Analyze usage patterns to improve the application.
                </Text>

                {/* Types of Cookies We Use Section */}
                <Text style={styles.sectionHeading}>Types of Cookies We Use</Text>
                <Text style={styles.sectionText}>
                    We use the following types of cookies in our mobile application:
                </Text>
                <Text style={styles.bulletText}>
                    • **Essential Cookies**: These cookies are necessary for the application to function properly. They enable basic features like page navigation and access to secure areas of the app.{'\n'}
                    • **Performance Cookies**: These cookies help us understand how visitors interact with our application by collecting and reporting information anonymously.{'\n'}
                    • **Functionality Cookies**: These cookies remember your preferences and choices, enhancing your experience by providing personalized content.{'\n'}
                    • **Advertising Cookies**: These cookies are used to deliver ads that are relevant to you and track the effectiveness of our marketing campaigns.
                </Text>

                {/* Managing Cookies Section */}
                <Text style={styles.sectionHeading}>Managing Cookies</Text>
                <Text style={styles.sectionText}>
                    You have the right to decide whether to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Please note that disabling cookies may affect the functionality of our application.
                </Text>

                {/* Contact Information Section */}
                <Text style={styles.sectionHeading}>Contact Information</Text>
                <Text style={styles.sectionText}>
                    If you have any questions about our Cookie Policy, please contact us at:
                </Text>
                <Text style={styles.contactText}>
                    Email: support@example.com{'\n'}
                    Phone: +1 123-456-7890
                </Text>
            </ScrollView>
        </View>
    );
};

export default CookiePolicy;

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
