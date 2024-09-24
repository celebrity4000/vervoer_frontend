import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import NavMenu from '../../components/NavMenu';
import Header from '../../components/Heading';
import CustomRadioButton from '../../components/CustomRadioButton';
import { ColorsTemplate } from '../../constant/Color';

interface FormData {
    stationName: string;
    reason: string[];
    otherReason: string;
}

const MarkOnMap: React.FC = () => {
    const { control, handleSubmit, watch, reset } = useForm<FormData>({
        defaultValues: {
            stationName: 'Joshua Terminal, NY',
            reason: [],
            otherReason: ''
        }
    });

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log('Form Data:', data);
        // Handle form submission here
    };

    const selectedReasons = watch('reason');

    const toggleReasonSelection = (reason: string, selectedReasons: string[], onChange: (value: string[]) => void) => {
        const newReasons = selectedReasons.includes(reason)
            ? selectedReasons.filter(r => r !== reason)
            : [...selectedReasons, reason];
        onChange(newReasons);
    };

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
                    minHeight: '30%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <View>
                    <Image
                        style={{
                            width: 60,
                            height: 60,
                            resizeMode: 'contain',
                            position: 'absolute',
                            top: 80,
                            left: '45%',
                        }}
                        source={require('../../assets/UnSafeStops.png')}
                    />
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
                        source={require('../../assets/Current_Location.png')}
                    />
                </View>
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
                    paddingHorizontal: 20,
                }}
            >
                <View style={{
                    paddingBottom: 30,
                }}>
                    <Text style={styles.titleText}>Or Add Station Name Manually</Text>
                    <View style={styles.stationNameBox}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',

                        }}>
                            <Image
                                style={{
                                    width: 60,
                                    height: 60,

                                }}
                                source={require('../../assets/Unsafe_Train.png')}
                            />
                            <Text style={styles.stationNameText}>Joshua Terminal, NY</Text>
                        </View>
                        <View style={{
                            width: '90%',
                            height: 1,
                            backgroundColor: ColorsTemplate.LightGray,
                            marginLeft: '5%',
                            marginVertical: 10,
                        }}></View>
                    </View>

                    <Text style={styles.titleText}>Why it is Unsafe?</Text>
                    <View>
                        <Controller
                            name="reason"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <CustomRadioButton
                                        label="Thieves & Goons"
                                        value="Thieves & Goons"
                                        selected={value.includes('Thieves & Goons')}
                                        onPress={() => toggleReasonSelection('Thieves & Goons', value, onChange)}
                                    />
                                    <View style={{
                                        width: '90%',
                                        height: 1,
                                        backgroundColor: ColorsTemplate.LightGray,
                                        marginLeft: '5%',
                                        marginVertical: 10,
                                    }}></View>
                                    <CustomRadioButton
                                        label="Construction Work in Progress"
                                        value="Construction Work in Progress"
                                        selected={value.includes('Construction Work in Progress')}
                                        onPress={() => toggleReasonSelection('Construction Work in Progress', value, onChange)}
                                    />
                                    <View style={{
                                        width: '90%',
                                        height: 1,
                                        backgroundColor: ColorsTemplate.LightGray,
                                        marginLeft: '5%',
                                        marginVertical: 10,
                                    }}></View>
                                    <CustomRadioButton
                                        label="Insufficient Cleaning"
                                        value="Insufficient Cleaning"
                                        selected={value.includes('Insufficient Cleaning')}
                                        onPress={() => toggleReasonSelection('Insufficient Cleaning', value, onChange)}
                                    />
                                    <View style={{
                                        width: '90%',
                                        height: 1,
                                        backgroundColor: ColorsTemplate.LightGray,
                                        marginLeft: '5%',
                                        marginVertical: 10,
                                    }}></View>
                                    <CustomRadioButton
                                        label="Other Reason"
                                        value="Other Reason"
                                        selected={value.includes('Other Reason')}
                                        onPress={() => toggleReasonSelection('Other Reason', value, onChange)}
                                    />
                                    <View style={{
                                        width: '90%',
                                        height: 1,
                                        backgroundColor: ColorsTemplate.LightGray,
                                        marginLeft: '5%',
                                        marginVertical: 10,
                                    }}></View>
                                </>
                            )}
                        />
                    </View>

                    {selectedReasons.includes('Other Reason') && (
                        <Controller
                            name="otherReason"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={[styles.input, { height: 100 }]} // Adjust the height as needed
                                    placeholder="Write Your Reason..."
                                    onChangeText={onChange}
                                    value={value}
                                    multiline={true}
                                    numberOfLines={4}
                                    textAlignVertical="top"
                                />

                            )}
                        />
                    )}

                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default MarkOnMap;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    stationNameBox: {
        backgroundColor: ColorsTemplate.Cultured,
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    stationNameText: {
        fontSize: 16,
        color: ColorsTemplate.Black,
    },
    input: {
        height: 40,
        borderColor: ColorsTemplate.Grey,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    submitButton: {
        backgroundColor: ColorsTemplate.Orange,
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: ColorsTemplate.White,
        fontSize: 16,
    },
});
