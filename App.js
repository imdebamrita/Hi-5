import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/chatListItems';


const chat = {
  "id": "1",
  "user": {
    // "id": "u2",
    "name": "Lukas",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg"
  },
  "lastMessage": {
    // "id": "m1",
    "text": "Well done this sprint, guys!",
    "createdAt": "07.08"
  }
}
export default function App() {
  return (
    <View style={styles.container}>

      <ChatListItem chat={chat}/>

      <StatusBar style="auto" />
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
