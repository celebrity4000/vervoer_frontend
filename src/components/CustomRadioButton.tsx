import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomRadioButtonProps {
    label: string;
    value: string;
    selected: boolean;
    onPress: () => void;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ label, value, selected, onPress }) => {
    return (
        <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
            <View style={styles.radioButton}>
                {selected ? <View style={styles.radioButtonSelected} /> : null}
            </View>
            <Text style={styles.radioButtonLabel}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f57c00',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#f57c00',
    },
    radioButtonLabel: {
        fontSize: 16,
        color: '#333',
    },
});

export default CustomRadioButton;
