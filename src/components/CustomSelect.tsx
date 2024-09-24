import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Controller } from 'react-hook-form';
import { ColorsTemplate } from '../constant/Color';

// Get the screen height
const { height: screenHeight } = Dimensions.get('window');

interface Option {
    label: string;
    value: string;
    flag: string; // Add a flag property to include the flag emoji
}

interface CustomDropdownProps {
    label: string;
    name: string;
    control: any;
    options: Option[];
    rules?: object;
    defaultValue?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
    label,
    name,
    control,
    options,
    rules = {},
    defaultValue = '',
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Controller
                control={control}
                name={name}
                rules={rules}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <>
                        <TouchableOpacity
                            style={styles.dropdownButton}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.dropdownButtonText}>
                                {/* Display selected flag and label */}
                                {options.find(option => option.value === value)?.flag} {value || 'Select an option'}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.bottomLine}></View>
                        <Modal
                            transparent={true}
                            animationType="slide"
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <FlatList
                                        data={options}
                                        keyExtractor={(item) => item.value}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={styles.option}
                                                onPress={() => {
                                                    onChange(item.value);
                                                    setModalVisible(false);
                                                }}
                                            >
                                                {/* Display flag and label */}
                                                <Text style={styles.optionText}>{item.flag} {item.label}</Text>
                                            </TouchableOpacity>
                                        )}
                                    />
                                </View>
                            </View>
                        </Modal>
                    </>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    dropdownButton: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    dropdownButtonText: {
        fontSize: 16,
        color: '#333',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        height: screenHeight * 0.6, // 60% of the screen height
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 20,
        elevation: 5,
    },
    option: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    bottomLine: {
        width: '100%',
        height: 0.6,
        backgroundColor: ColorsTemplate.DarkGray,
    }
});

export default CustomDropdown;
