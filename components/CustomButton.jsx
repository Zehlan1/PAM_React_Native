import { View, Text } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native'

const CustomButton = ({label, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>{label}</Text>
    </TouchableHighlight>
  )
}

export default CustomButton