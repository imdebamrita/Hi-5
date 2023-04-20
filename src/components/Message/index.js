import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Message = ({ message }) => {

    const isMyMessage = () => {
        return message.user.id == 'u1';
    }

  return (
    <View style={[
        styles.container, 
        {
            backgroundColor: isMyMessage() ? '#d9fdd3' : 'white',   //#d9fdd3(by my own extension)  #DCF8C5
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
            borderBottomLeftRadius: isMyMessage() ? 10 : 0,
            borderBottomRightRadius: isMyMessage() ? 0 : 10,
        }
    ]}>
      <Text>{ message.text }</Text>
      <Text style={styles.time}>{ dayjs(message.createdAt).fromNow(true) }</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        // alignSelf: 'flex-start',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    time: {
        color: 'gray',
        alignSelf: 'flex-end'
    },
})

export default Message;