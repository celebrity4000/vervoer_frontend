import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Btn = ({
  bgColor = '#FF9401',
  btnLabel,
  textColor = 'white',
  width = '80%',
  Press,
  size = 20,
}: any) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 50,
        alignItems: 'center',
        width: width,
        paddingVertical: 10,
        marginVertical: 10,
      }}>
      <Text style={{color: textColor, fontSize: size, fontWeight: '500'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
