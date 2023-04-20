import { Text, View, Image, StyleSheet } from "react-native";

const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://www.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg' }} 
                style={ styles.image} 
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name}>Virat Kohli</Text>
                    <Text style={styles.subTitle}>8:31</Text>
                </View>
                <View style={styles.subTitle}>
                    <Text>How are you?</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{},
    image:{
        width: 80,
        height: 80,
    },
    content:{},
    row:{},
    name:{},
    subTatle:{},
})

export default ChatListItem;