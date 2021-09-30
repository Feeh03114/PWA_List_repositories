import styled from 'styled-components/native'
import { getStatusBarHeight} from "react-native-iphone-x-helper";
import {RFPercentage} from 'react-native-responsive-fontsize';

interface user{
    user?:boolean;
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
    align-content: center;
    margin-top: ${getStatusBarHeight()}px;
`;

export const ViewPesquisa = styled.View`
   flex-direction: row;
   align-items: center;
   align-content: center;
`;

export const ViewPesquisa2 = styled.View<user>`
   align-items: center;
   align-content: center;
   ${props => props.user ? `margin-top: 10px;` : `margin-top: 20px;`}
`;

export const Headers = styled.View`
    padding: 5px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

export const TextName = styled.Text`
    margin-left: 5px;
    font-size: ${RFPercentage(2.825)}px;
    font-weight: bold;
`;

export const Avatar = styled.Image`
    width: ${RFPercentage(15.441)}px;
    height: ${RFPercentage(15.441)}px;
    border-radius: ${RFPercentage(7.705)}px;
`;


export const Input = styled.TextInput`
    border-color: black;
    border: 1px;
    align-items: center;
    align-content: center;
    font-weight: bold;
    margin-right: 5px;
`;
export const ViewList = styled.View``;
