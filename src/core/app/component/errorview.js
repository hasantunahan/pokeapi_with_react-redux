import React from 'react';
import {View, Text} from 'react-native';

const ErrorText = ({err}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text numberOfLines={3} style={{color: 'red'}}>
        {err}
      </Text>
    </View>
  );
};
export default ErrorText;
