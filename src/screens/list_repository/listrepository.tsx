import React, {  useEffect, useState } from 'react';
import {FlatList, Text, TouchableOpacity, Linking, View} from 'react-native';
import { list } from '../../components/list_repositories';
import { SeachDropDown } from '../../components/SeachDropDown/SeachAuto';
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

interface historic{

    id: string;
    pesquisa: string;
    data_hora: string;    
}


export function List_repository(){
    const [userName, setUserName] = useState('feeh03114');
    const [historicsList, sethistoricsList] = useState<historic[]>([]);
    const [historicsList2, sethistoricsList2] = useState<historic[]>([]);
    const [repository, setRepository] = useState<repository[]>([]);

    const [selectedUser, setSelectedUser] = useState('');

    const [isSearch, setIsSearch] = useState(false);

    
        

    async function dates_user(){
        
        const tempList = historicsList.filter(item => {
            if(item.pesquisa.match(userName))
            return item;
            }) 

    
        if(tempList[0]){
            const response = await api.get(`historic/${tempList[0].id}`);
            setRepository(response.data);
            setUserName('');
            setIsSearch(false);
            return;
        }
        const response = await api.post(`historic`, {pesquisa: userName});
        setRepository(response.data);
        setUserName('');
        setIsSearch(false);
    }

    useEffect(()=>{
        async function historics(){
            const response = await api.get(`historic`);
            sethistoricsList(response.data);
        }

        historics();
    },[repository])

    const onSearch = (text: string) =>
    {
        if (text && historicsList.length !== 0){
            setIsSearch(true);
            setSelectedUser('');
            const temp = text.toLowerCase()
            const tempList = historicsList.filter(item => {
                if(item.pesquisa.match(temp))
                return item;
                })
                //console.log(tempList);
            
            sethistoricsList2(tempList)
            return;
        }
        setIsSearch(false);
        sethistoricsList2([])
    }
    
    //const user  = 
    let user = {} as user;
    try {
        user = repository[0].owner;
    } catch(error){
        user = {}as user;
    }

     //console.log(historicsList);

    return(
        <Container>
            { Object.keys(user).length !==0 &&
                <Headers>
                    <Avatar
                        source={{uri: user.avatar_url}}
                    />
                    <TextName>{user.login}</TextName>
                </Headers>   
            } 
            <ViewPesquisa2 user={Object.keys(user).length !==0}>
                <Text style={{marginBottom:5}}>Coloque o nome do usuário que deseja ver os repositórios</Text>
                <ViewPesquisa>
                    <Input
                        autoCapitalize={historicsList}
                        onChangeText={(item)=> { 
                            onSearch(item);
                            setUserName(item);
                        }}
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
            { isSearch && <SeachDropDown  
                    data={historicsList2}
                    name={setUserName}
                   
                /> }
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

