import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './View/UserList'
import UserForm from './View/UserForm'
import {Button, Icon} from 'react-native-elements'


const Stack = createStackNavigator() 



export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                  initialRouterName="UserList"
                  screenOptions={screenOptions}
                  >
                <Stack.Screen 
                              name ="UserList"
                              component= {UserList} 
                              options={() =>{
                                  return{
                                      title: 'Lista de usuários',
                                      headerRight:() =>(
                                          <Button
                                            type="clear"
                                            icon={<Icon name="add" size={25} color="white"/>}
                                          
                                          
                                          
                                          />
                                      )
                                  }
                              }}
                              />
                <Stack.Screen 
                              name ="UserForm"
                              component = {UserForm} 
                              options={{
                                  title: 'Formulário de usuários'
                              }}
                             />
            </Stack.Navigator>
        </NavigationContainer>

    )
}


const screenOptions = {
    headerStyle:{
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold'
    }
}