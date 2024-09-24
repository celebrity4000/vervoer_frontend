import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch, ViewStyle } from 'react-native';
import { ColorsTemplate } from '../constant/Color';

interface SingleLineCardProps {
    leftSide: React.ReactNode;
    rightSide: React.ReactNode;
    onPress?: () => void;
    containerStyle?: ViewStyle;
    leftSideStyle?: ViewStyle;
    rightSideStyle?: ViewStyle;
}

const SingleLineCard: React.FC<SingleLineCardProps> = ({
    leftSide,
    rightSide,
    onPress,
    containerStyle,
    leftSideStyle,
    rightSideStyle,
}) => {
    return (
        <TouchableOpacity
            style={[styles.cardContainer, containerStyle]}
            onPress={onPress}
            activeOpacity={onPress ? 0.7 : 1}
        >
            <View style={[styles.leftSide, leftSideStyle]}>
                {leftSide}
            </View>
            <View style={[styles.rightSide, rightSideStyle]}>
                {rightSide}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: ColorsTemplate.White,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: ColorsTemplate.Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    leftSide: {
        flex: 1,
    },
    rightSide: {
        justifyContent: 'center',
    }
});

export default SingleLineCard;
