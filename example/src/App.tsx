import React, { useEffect } from 'react'
import { View } from 'react-native'
import Snappy from 'react-native-snappy'

const App = () => {
  // useEffect(() => {
  //   console.log(RNSnappyModule)
  // })

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Snappy name='snap' />
    </View>
  )
}

export default App
