import React, { useEffect } from 'react'
import { View } from 'react-native'
import Snappy from 'react-native-snappy'

const App = () => {
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
      <Snappy name='chevrons-right' />
      <Snappy color='#0a0faa' strokeWidth={1} name='snap' />
      <Snappy color='#7f7faa' size={30} strokeWidth={0.5} name='snap' />
      <Snappy color='#f4a' size={100} strokeWidth={2.5} name='snap' />
    </View>
  )
}

export default App
