import React, { useContext } from 'react'
import { Text, View, FlatList, Alert } from 'react-native'
import { Button, Icon, ListItem, Avatar } from 'react-native-elements'
import UsersContext from './data/context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem2({ item: user }) {
        return (
                <ListItem 
                    key={user.id} 
                    bottomDivider
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    >
                  <Avatar source={{uri: user.avatarUrl}} />
                  <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )
    }
    /* este não funcionou, então criei aa função acima */
    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm', user)}
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem2}
            />
        </View>
    )
}

