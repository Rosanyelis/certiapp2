import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { Alert, Image, ImageBackground, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MyIcon } from '../components/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/Navigator';
import { API_URL, STAGE } from '@env';
import { useState as useReactState } from 'react';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'>{ }

export const LoginScreen = ({ navigation }: Props) => {
  
  const { login } = useAuthStore();
  const [isPosting, setIsPosting] = useReactState(false);
  const [form, setForm] = useReactState({
    email: '',
    password: '',
  });

  const {height} = useWindowDimensions();
  const onLogin = async () => {
    if ( form.email.length === 0 || form.password.length === 0 ) {
      return;
    }
    setIsPosting(true);
    const wasSuccessful = await login(form.email, form.password);
    setIsPosting(false);

    if ( wasSuccessful ) return  navigation.navigate('HomeScreen');
    
    Alert.alert('Error', 'Usuario o contraseña incorrectos');
  }
  return (
    <Layout style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/fondo.png')}
        resizeMode="cover"
        style={{ flex: 1 }}>
      
      <ScrollView style={{ marginHorizontal: 40 }}>

        <Layout style={{ paddingTop: height * 0.25, backgroundColor: 'transparent'}}>
          <Image
              style={{ alignSelf: 'center' }} 
              source={require('../../assets/logo1.png')}></Image>
        </Layout>
        /** inputs */
        <Layout style={{ marginTop: 120, backgroundColor: 'transparent' }}>
          <Input
            accessoryLeft={<MyIcon name='email-outline' />}
            placeholder="Correo electrónico"
            keyboardType='email-address'
            autoCapitalize='none'
            style={{ marginBottom: 10 }}
            value={ form.email }
            onChangeText={ (email) => setForm({ ...form, email })}
            />
        </Layout>
        <Layout style={{ marginTop: 5, backgroundColor: 'transparent' }}>
          <Input
            accessoryLeft={<MyIcon name='lock-outline' />}
            placeholder="Contraseña"
            autoCapitalize='none'
            secureTextEntry
            style={{ marginBottom: 10 }}
            value={ form.password }
            onChangeText={ (password) => setForm({ ...form, password })}
            />
        </Layout>
        
        /** Button */
        <Layout style={{ marginTop: 20, backgroundColor: 'transparent' }}>
          <Button 
            disabled={isPosting}
            onPress={() => onLogin()}>
              Ingresar
          </Button>
        </Layout>

        <Layout style={{ marginTop: 20, alignItems: 'center', backgroundColor: 'transparent' }}>
          <Text
            style={{ color: 'white' }}
            category='p1'
            onPress={() => {}}>¿Olvidaste tu contraseña?</Text>          
        </Layout>
        <Layout style={{ marginTop: 20, alignItems: 'center', backgroundColor: 'transparent' }}>
          <Text category='p1' 
            style={{ color: 'white' }}
            onPress={() => navigation.navigate('RegisterScreen')}
            >Quiero registrarme</Text>
        </Layout>

      </ScrollView>
      </ImageBackground>
    </Layout>
  );
};


export default LoginScreen;

function useState(arg0: { email: string; password: string; }): [any, any] {
  throw new Error('Function not implemented.');
}
