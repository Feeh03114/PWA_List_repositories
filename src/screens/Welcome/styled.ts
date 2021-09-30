import { TextInput } from 'react-native';
import styled from 'styled-components/native'
import { getStatusBarHeight} from "react-native-iphone-x-helper";

export const Container = styled.View`
    margin-top: ${getStatusBarHeight()+ 150}px;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
`;

export const ViewLogin = styled.View`
    align-items: center;
    align-content: center;
    justify-content: center;
`;

export const ViewCadatro = styled.View`
    margin-top: 150px;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

export const InputEmail = styled.TextInput`
    border-color: black;
    border: 1px;
    align-items: center;
    align-content: center;
    font-weight: bold;
    margin-right: 5px;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
`;

export const InputPassword = styled.TextInput`
    margin-top: 10px;
    border-color: black;
    border: 1px;
    align-items: center;
    align-content: center;
    font-weight: bold;
    margin-right: 5px;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
`;