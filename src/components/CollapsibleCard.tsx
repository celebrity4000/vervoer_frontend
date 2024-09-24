import React, { useState, ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ColorsTemplate } from '../constant/Color';

interface CollapsibleCardProps {
    heading: string;
    body: ReactNode;
    footer?: ReactNode;
    containerStyle?: any;
    headingStyle?: any;
    bodyStyle?: any;
    bodyTextStyle?: any;
    footerStyle?: any;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
    heading,
    body,
    footer,
    containerStyle,
    headingStyle,
    bodyStyle,
    bodyTextStyle,
    footerStyle,
}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={{ ...styles.container, ...containerStyle }}>
            <TouchableOpacity onPress={toggleExpand} style={{ ...styles.header, ...headingStyle }}>
                <Text style={styles.headerText}>{heading}</Text>
                <Text style={{ fontSize: 18 }}>
                    {expanded ? '▲' : '▼'} {/* Toggle between up and down arrow */}
                </Text>
            </TouchableOpacity>
            {expanded && (
                <View style={{ ...styles.body, ...bodyStyle }}>
                    <Text style={[styles.bodyText, bodyTextStyle]}>{body}</Text>
                </View>
            )}
            {expanded && footer && (
                <View style={{ ...styles.footer, ...footerStyle }}>
                    <Text>{footer}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorsTemplate.White,
        marginVertical: 10,
        borderRadius: 15,
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    headerText: {
        fontSize: 18,
        color: ColorsTemplate.Black,
    },
    body: {
        color: ColorsTemplate.Black,
    },
    bodyText: {
        color: ColorsTemplate.Black,
        fontSize: 16,
        paddingHorizontal: 15,
        paddingBottom: 15,
        lineHeight: 24,
    },
    footer: {
        padding: 15,
    },
});

export default CollapsibleCard;
