import React, { ReactNode } from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import BackBtn from './BackBtn';

// Define the props type for the component
interface HeaderProps {
    heading: string;
    children?: ReactNode;
    containerStyle?: ViewStyle; // Custom style for the container
    headingStyle?: TextStyle; // Custom style for the heading text
    childrenContainerStyle?: ViewStyle; // Custom style for the children container
}

// Define the component
const Header: React.FC<HeaderProps> = ({
    heading,
    children,
    containerStyle,
    headingStyle,
    childrenContainerStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {/* Left Section with Back Button and Heading */}
            <View style={styles.leftSection}>
                <BackBtn />
                <Text style={[styles.heading, headingStyle]}>{heading}</Text>
            </View>

            {/* Right Section for Children */}
            <View style={[styles.childrenContainer, childrenContainerStyle]}>
                {children}
            </View>
        </View>
    );
};

// Define default styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftSection: {
        flexDirection: 'row',
    },
    heading: {
        marginLeft: 70,
        fontSize: 20,
        color: 'black',
    },
    childrenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Header;
