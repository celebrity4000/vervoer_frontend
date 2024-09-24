// Setting.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import NavMenu from '../../components/NavMenu';
import { ColorsTemplate } from '../../constant/Color';
import Header from '../../components/Heading';
import SingleLineCard from '../../components/SingleLineCard';

interface FormValues {
    emailNotifications: boolean;
    smsNotifications: boolean;
}

const Setting: React.FC = () => {
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            emailNotifications: true,
            smsNotifications: false,
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log('Form Data:', data);
    };

    return (
        <View style={{ flex: 1, backgroundColor: ColorsTemplate.White }}>
            <NavMenu />
            <Header heading="Settings" />

            <ScrollView
                contentContainerStyle={{
                    width: '100%',
                    padding: 20,
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                {/* Email Notifications */}
                <Controller
                    control={control}
                    name="emailNotifications"
                    render={({ field: { onChange, value } }) => (
                        <SingleLineCard
                            leftSide={<Text style={styles.cardText}>Email Notifications</Text>}
                            rightSide={
                                <Switch
                                    value={value}
                                    onValueChange={onChange}
                                    thumbColor={value ? ColorsTemplate.White : ColorsTemplate.Grey}
                                    trackColor={{ false: ColorsTemplate.LightGray, true: ColorsTemplate.Orange }}
                                />
                            }
                        />
                    )}
                />

                {/* SMS Notifications */}
                <Controller
                    control={control}
                    name="smsNotifications"
                    render={({ field: { onChange, value } }) => (
                        <SingleLineCard
                            leftSide={<Text style={styles.cardText}>SMS Notifications</Text>}
                            rightSide={
                                <Switch
                                    value={value}
                                    onValueChange={onChange}
                                    thumbColor={value ? ColorsTemplate.White : ColorsTemplate.Grey}
                                    trackColor={{ false: ColorsTemplate.LightGray, true: ColorsTemplate.Orange }}
                                />
                            }
                        />
                    )}
                />

                {/* Privacy Policy */}
                <SingleLineCard
                    leftSide={<Text style={styles.cardText}>Privacy Policy</Text>}
                    rightSide={
                        <Image
                            style={styles.icon}
                            source={require('../../assets/arrow_right.png')}
                        />
                    }
                    onPress={() => navigation.navigate('PrivacyPolicy')}
                />

                {/* Cookie Policy */}
                <SingleLineCard
                    leftSide={<Text style={styles.cardText}>Cookie Policy</Text>}
                    rightSide={
                        <Image
                            style={styles.icon}
                            source={require('../../assets/arrow_right.png')}
                        />
                    }
                    onPress={() => navigation.navigate('CookiePolicy')}
                />

                {/* Delete Account */}
                <SingleLineCard
                    leftSide={<Text style={styles.cardText}>Delete Account</Text>}
                    rightSide={null}
                // onPress={() => navigation.navigate('DeleteAccount')}
                />

            </ScrollView>
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    cardText: {
        color: ColorsTemplate.Black,
        fontSize: 16,
    },
    icon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: ColorsTemplate.Black,
    },
});
