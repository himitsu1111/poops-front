import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from "@react-navigation/native";


export default function Options() {

    const [currentUser, setCurrentUser] = useState();
    const [allUsers, setAllUsers] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        const arr = [
            {
                name: "Мама",
                login: "mother"
            },
            {
                name: "Не мама",
                login: "others"                
            }
        ];
        if (isFocused) {
            setAllUsers(arr);            
        }

    }, [isFocused]);

    return (
        <View style={styles.container}>
          <Text style={styles.createUser}>Создать пользователя</Text>            
          <Text>Выберите пользователя:</Text>
            <Picker
                style={{flex: 1, width: 200}}
                selectedValue={currentUser}
                onValueChange={(itemValue, itemIndex) =>
                    setCurrentUser(itemValue)
                }
            >
                {allUsers.map((item, i) => {
                    console.log(item);
                    
                    return (<Picker.Item itemIndex={i} label={item.name} value={item.login} />);

                })}
            </Picker>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '30%',
        // backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        borderWidth: 2,
        borderBottomColor: '#000'

    },
    createUser: {
        marginBottom: 20
    }
  });