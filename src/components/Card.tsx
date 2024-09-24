import React, { ReactNode } from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { ColorsTemplate } from '../constant/Color';

interface CardProps {
    heading?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    containerStyle?: ViewStyle;
    headingStyle?: TextStyle;
    bodyStyle?: ViewStyle;
    bodyTextStyle?: TextStyle;
    footerStyle?: ViewStyle;
}

const Card: React.FC<CardProps> = ({
    heading,
    body,
    footer,
    containerStyle,
    headingStyle,
    bodyStyle,
    bodyTextStyle,
    footerStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {heading && (
                <View style={[styles.heading, headingStyle]}>
                    {typeof heading === 'string' ? (
                        <Text style={[styles.headingText, headingStyle]}>{heading}</Text>
                    ) : (
                        heading
                    )}
                </View>
            )}
            {body && (
                <View style={[styles.body, bodyStyle]}>
                    {typeof body === 'string' ? (
                        <Text style={[styles.bodyText, bodyTextStyle]}>{body}</Text>
                    ) : (
                        body
                    )}
                </View>
            )}
            {footer && (
                <View style={[styles.footer, footerStyle]}>
                    {typeof footer === 'string' ? (
                        <Text style={styles.footerText}>{footer}</Text>
                    ) : (
                        footer
                    )}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorsTemplate.White,
        marginHorizontal: 15,
    },
    heading: {
        padding: 10,
        fontSize: 18,
        color: ColorsTemplate.Black,
    },
    headingText: {
        padding: 10,
        fontSize: 18,
        color: ColorsTemplate.Black
    },
    body: {
        paddingHorizontal: 10,
        color: ColorsTemplate.Black
    },
    bodyText: {
        paddingHorizontal: 10,
        fontSize: 16,
        color: ColorsTemplate.Black,
        lineHeight: 25,
    },
    footer: {
        padding: 10,
    },
    footerText: {
        fontSize: 14,
    },
});

export default Card;
