import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function LandingScreen() {
  const hookUrl = Linking.useLinkingURL();
  const linkingUrl = Linking.getLinkingURL();

  return (
    <View style={styles.container}>
      <Text>Landing</Text>
      <Text>Linking URL: {JSON.stringify(linkingUrl)}</Text>
      <Text>Linking URL (hook): {JSON.stringify(hookUrl)}</Text>
      <Pressable onPress={() => location.reload()} style={{paddingTop: 50}}><Text style={{color: 'blue'}}>Reload</Text></Pressable>
    </View>
  );
}