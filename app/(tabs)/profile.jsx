import { View, Text, Image} from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'

const profile = () => {
    [label, setLabel] = useState("Clicked")
  return (
    <View className="w-full h-full items-center justify-center">
      <Text>profile alisjdoiajsodij</Text>
      <CustomButton
      label={label}
      color="bg-slate-600"
      onPress={() => setLabel("Clicked again")}
      />
      {label==="Clicked" && <Text>Hello</Text>}

      <Image
      source={{uri: "https://picsum.photos/200/300"}}
      style={{width:200, height:200}}
      />
    </View>
  )
}

export default profile