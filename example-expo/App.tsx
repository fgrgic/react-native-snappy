import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Snappy from 'react-native-snappy';

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.heading}>v0.0.21</Text>
      <Text style={styles.heading2}>New</Text>
      <Text style={styles.body}>
        Also added a few devices and an egg.{' '}
        <Snappy name='grin' size={14} strokeWidth={1} />
      </Text>
      <View style={styles.iconGroup}>
        <Snappy name='airpods-pro-case' />
        <Snappy name='headphones-2' />
        <Snappy name='mouse-2' />
        <Snappy name='keyboard' />
        <Snappy name='egg' />
      </View>
      <Text style={styles.heading2}>Updated</Text>
      <Text style={styles.body}>
        Updated smartphone to be more up do date with silhouettes of newer
        smartphones. Also polished a few inconsistencies
      </Text>
      <View style={styles.iconGroup}>
        <Snappy name='smartphone' />
        <Snappy name='smartphones' />
        <Snappy name='vibrate' />
        <Snappy name='soccer-2' />
        <Snappy name='golf' />
      </View>
      <Text style={styles.heading}>v0.0.20</Text>
      <Text style={styles.heading2}>New</Text>
      <Text style={styles.body}>Just a pac-man icon</Text>
      <View style={styles.iconGroup}>
        <Snappy name='pac-man' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 200,
    paddingHorizontal: 24,
  },
  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 800,
  },
  heading2: {
    fontSize: 16,
    fontWeight: 700,
  },
  body: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 8,
  },
  iconGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
});
