import React, {
    createContext,
    ReactNode,
    useCallback,
    useState,
    useEffect,
    useContext,
    Dispatch,
  } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api  from '../services/api';


  interface AuthProviderProps {
    children: ReactNode;
  }

  interface SignInCredentials {
    email: string;
    password: string;
  }

  interface AuthState {
    access_token: string;
    //refreshToken: RefreshToken;
  }

  /* interface RefreshToken {
    id: string;
    userId: string;
    expiresIn: number;
  } */
  

  interface AuthContextData {
    token: string;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    CreateUser: (credentials: SignInCredentials) => Promise<void>;
  }
  
  const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<AuthState>({} as AuthState);
    /*useEffect(() => {
         async function loadStoragedData(): Promise<void> {
          const [token] = await AsyncStorage.multiGet([
            '@test:token',
          ]);
    
          if (token[1] /* && refreshToken[0] ) {
            setData({
              access_token: token[1],
             // refreshToken: JSON.parse(refreshToken[0]),
            });
          }
        }
    
        loadStoragedData();
      }, []); */

      const signIn = useCallback(async (credentials: SignInCredentials) => {
        try {
          const response = await api.post('auth/login', credentials);
          const { access_token } = response.data;
    
          await AsyncStorage.multiSet([
            ['@test:token', access_token],
            //['@test:refreshToken', JSON.stringify(refreshToken)],
          ]);
    
          setData({ access_token });
        } catch (err) {
          console.log(err);
        }
      }, []);

      const CreateUser = useCallback(async (credentials: SignInCredentials) => {
        try {
          const response = await api.post('user', credentials);
          console.log(response);
          alert("Usuário Criado, por favor realize o login")
        } catch (err) {
          console.log(err);
        }
      }, []);



      return (
        <AuthContext.Provider
          value={{ token: data.access_token, signIn, CreateUser }}
        >
          {children}
        </AuthContext.Provider>
      );
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
  
  export { AuthProvider, useAuth };