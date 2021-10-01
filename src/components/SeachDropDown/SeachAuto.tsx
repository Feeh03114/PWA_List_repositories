import React from "react";
import {FlatList, Text} from 'react-native';
import { Container, Item } from "./styled";

interface date{
    id: string;
    pesquisa: string;
}
interface datas{
    data: date[];
    //selected:(item: string)=> void;
    name: (item: string)=> void; 
}

export function SeachDropDown({data, name}: datas): JSX.Element{
    console.log(data);

    const listUsers = (item)=>{
        return(
            <Item
            onPress={()=>
                {
                    name(item.item.pesquisa)
            }}
            >
                <Text >{item.item.pesquisa}</Text>
            </Item> 
        );
    }

    return(
        <Container>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={listUsers}
            />


        </Container>
    );
}