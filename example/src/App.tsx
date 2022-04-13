import React from 'react'
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
      <Snappy name='bell-notification' />
      <Snappy name='pac-man' />
      <Snappy name='document' />
      <Snappy name='file' />
      <Snappy name='folder' />
      <Snappy name='grin' />
      <Snappy name='cloud-upload' />
      <Snappy name='x' />
      <Snappy name='cookie' size={100} />
      <Snappy name='copy' strokeWidth={2.5} />
      <Snappy name='airpods-case' strokeWidth={1} />
      <Snappy name='toggle-right' color='#ff6666' />
      <Snappy name='soccer' color='#ff6666' />
      <Snappy name='star-half-filled' color='#ff6666' />
    </View>
  )
}

export default App
