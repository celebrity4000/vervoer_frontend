import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import { ColorsTemplate } from '../constant/Color';

interface CustomInputFieldProps extends TextInputProps {
    label: string;
    name: string;
    control: Control<any>;
    rules?: object;
    placeholder?: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
    label,
    name,
    control,
    rules = {},
    placeholder = '',
    ...rest
}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <>
                        <TextInput
                            style={[styles.input, error && styles.errorInput]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={placeholder}
                            {...rest}
                        />
                        <View style={styles.bottomLine}></View>
                        {error && <Text style={styles.errorText}>{error.message}</Text>}
                    </>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15,
        marginTop: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
        paddingHorizontal: 10,
    },
    input: {
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: ColorsTemplate.White,
        paddingVertical: 20,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        marginLeft: 10,
    },
    bottomLine: {
        width: '100%',
        height: 0.5,
        backgroundColor: ColorsTemplate.DarkGray,
    }
});

export default CustomInputField;
