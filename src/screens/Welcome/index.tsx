import React, { useState } from "react";
import {  TouchableOpacity, Text } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Container,ViewLogin, ViewCadatro, InputEmail, InputPassword } from "./styled";

export function Welcome(){
    const [email_login, setEmail_login] = useState('');
    const [password_login, setPassword_login] = useState('')
    const [email_cadastro, setEmail_cadastro] = useState('');
    const [password_cadastro, setPassword_cadastro] = useState('')
    const { signIn, CreateUser } = useAuth();


    async function login_user(){
        signIn(
            {
                email: email_login,
                password: password_login,
            }

        )
            }
    async function create_user(){
        CreateUser(
            {
                email: email_cadastro,
                password: password_cadastro,
            }
        )
        setEmail_cadastro("");
        setPassword_cadastro("");
    }

    return(
        <Container>
            <ViewLogin> 
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>Fazer Login</Text>
                <InputEmail
                    onChangeText={(text)=> setEmail_login(text)}
                    value={email_login}
                    placeholder='E-mail'
                />
                <InputPassword
                    secureTextEntry={true}
                    onChangeText={(text)=> setPassword_login(text)}
                    value={password_login}
                    placeholder='Password'
                />
                <TouchableOpacity
                style={{marginTop: 5, backgroundColor: 'black', 
                borderRadius: 50, paddingLeft: 10, paddingRight:10, 
                paddingBottom: 5, paddingTop: 5}}
                    onPress={()=>{
                        if(email_login && (password_login.length >= 6)){
                            login_user();
                        }
                    }}
                >
                    <Text style={{color:'white'}}>
                        Login
                    </Text>
                </TouchableOpacity>
            </ViewLogin> 
            <ViewCadatro>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}> Não consegue fazer o login, faça o cadastro</Text>
                <InputEmail
                    onChangeText={(text)=> setEmail_cadastro(text)}
                    value={email_cadastro}
                    placeholder='E-mail'
                />
                <InputPassword
                    secureTextEntry={true}
                    onChangeText={(text)=> setPassword_cadastro(text)}
                    value={password_cadastro}
                    placeholder='Password'
                />
                <TouchableOpacity
                style={{marginTop: 5, backgroundColor: 'black', 
                borderRadius: 50, paddingLeft: 10, paddingRight:10, 
                paddingBottom: 5, paddingTop: 5}}
                    onPress={()=>{
                        if(password_cadastro.length < 6){
                            alert("Senha com igual ou maior de 6 caracter")
                        }
                        if(email_cadastro && (password_cadastro.length >= 6)){
                            create_user();
                        }
                    }}
                >
                    <Text  style={{color:'white'}}>
                        Create User?
                    </Text>
                </TouchableOpacity>
            </ViewCadatro>
        </Container>
    );
}