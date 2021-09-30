import React, {  useEffect, useState } from 'react';
import {FlatList, Text, TouchableOpacity, Linking, View} from 'react-native';
import { list } from '../../components/list_repositories';
import api  from '../../services/api';
import { Container, ViewPesquisa, Headers, Avatar, TextName, Input, ViewPesquisa2, ViewList } from './styled';

interface user{
    length: number;
    login: string;
    name: string;
    avatar_url: string;
}

interface repository{
    owner: user;
    id: number;
    length: number;
    name: string;
    html_url: string;
    description: string;
    
}


export function List_repository(){
    const [userName, setUserName] = useState('felipe03114');

    //const [user, setUser] = useState<user>({} as user);
    const [repository, setRepository] = useState<repository[]>([]);

    async function dates_user(){
        const response = await api.post(`historic`, {pesquisa: userName});
        setRepository(response.data);

    }
    
    //const user  = 
    let user = {} as user;
    try {
        user = repository[0].owner;
    } catch(error){
        user = {}as user;
    }

     console.log(user);
    //Object.keys(user).length !==0

    return(
        <Container>
            { Object.keys(user).length !==0 &&
                <Headers>
                    <Avatar
                        source={{uri: user.avatar_url}}
                    />
                    <TextName>{user.name}</TextName>
                </Headers>   
            } 
            <ViewPesquisa2 user={Object.keys(user).length !==0}>
                <Text style={{marginBottom:5}}>Coloque o nome do usuário que deseja ver os repositórios</Text>
                <ViewPesquisa>
                    <Input
                        onChangeText={(text)=> setUserName(text)}
                        value={userName}
                    />
                    <TouchableOpacity
                    style={{backgroundColor: 'black', padding: 5, borderRadius: 10}}
                    onPress={()=> {if(userName !=="")dates_user()}}
                    >
                    <Text style={{color: 'white'}}>Procurar usuario</Text>
                    </TouchableOpacity>
                </ViewPesquisa>
            </ViewPesquisa2>
            <ViewList>
                <FlatList
                    data={repository}
                    keyExtractor={item => (item.id).toString()}
                    renderItem={list}
                />
            </ViewList>

        </Container>
    );
}

