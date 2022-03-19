import React, { useEffect } from 'react'
import RNSnappyModule, { Counter } from 'react-native-snappy'

const App = () => {
  useEffect(() => {
    console.log(RNSnappyModule)
  })

  return <Counter />
}

export default App
