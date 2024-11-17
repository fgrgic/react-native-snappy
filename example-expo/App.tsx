import { StyleSheet, View } from 'react-native';
import Snappy from 'react-native-snappy';

export default function App() {
  return (
    <View style={styles.container}>
      <Snappy name='smartphone' />
      <Snappy name='airplay' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
