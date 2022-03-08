import React, { useEffect } from 'react'
import { View } from 'react-native'
import Snappy, { snappyNameArray } from 'react-native-snappy'

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
      {snappyNameArray.map((name) => (
        <Snappy key={name} name={name} />
      ))}
      <Snappy name='arrow-down' size={100} strokeWidth={5} />
      <Snappy name='arrow-up' size={100} strokeWidth={5} />
      <Snappy name='chevrons-right' size={100} strokeWidth={5} />
      <Snappy name='bell-notification' />
      <Snappy name='file' />
      <Snappy name='document' />
      <Snappy name='folder' />
      <Snappy name='angry' />
      <Snappy name='cloud-upload' />
      <Snappy name='x' />
      <Snappy name='cookie' />
      <Snappy name='copy' />
      <Snappy name='airpods-case' />
      <Snappy name='toggle-right' />
      <Snappy name='soccer' color='#ff6666' />
      <Snappy name='soccer' color='#ff6666' />
    </View>
  )
}

export default App
