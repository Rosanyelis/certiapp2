import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { Alert, Image, ImageBackground, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MyIcon } from '../components/MyIcon';
import axios from 'axios';
import { useState as useReactState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'>{ }
export const RegisterScreen = ({ navigation }: Props) => {
    const {height} = useWindowDimensions();
    const [nombre, setNombre] = useReactState('');
    const [email, setEmail] = useReactState('');
    const [password, setPassword] = useReactState('');
    const [confirmPassword, setConfirmPassword] = useReactState('');
    const [isPosting, setIsPosting] = useReactState(false);
    const handleRegister = async () => {
      if (!nombre || !email || !password || !confirmPassword) {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }
  
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Las contraseñas no coinciden');
        return;
      }
      const data = {
        "fname": nombre,
        "fsurname": "test",
        "province": "1",
        "city": "1",
        "cp": "123456",
        "email": email,
        "pwd": password,
        "pwd_confirmation": password
      }
      try {
        const response = await axios.post('https://dev.aerotest.cl/api/registro', data);
        setIsPosting(true);
        Alert.alert('Éxito', 'Registro exitoso');

        setNombre('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        return  navigation.navigate('HomeScreen');
      } catch (error) {
        Alert.alert('Error', 'No se pudo registrar el usuario');
        setIsPosting(false);
      }
    };
      return (
        <Layout style={{ flex: 1 }}>
          <ImageBackground
            source={require('../../assets/fondor.png')}
            resizeMode="cover"
            style={{ flex: 1 }}>
          
          <ScrollView style={{ marginHorizontal: 40 }}>
    
            <Layout style={{ paddingTop: height * 0.10, backgroundColor: 'transparent'}}>
              <Image
                  style={{ alignSelf: 'center' }} 
                  source={require('../../assets/logo.png')}></Image>
            </Layout>
            <Layout style={{ marginTop: 20, backgroundColor: 'transparent'}}>
              <Image
                  style={{ alignSelf: 'center' }} 
                  source={require('../../assets/avatar.png')}></Image>
            </Layout>
            /** inputs */
            <Layout style={{ marginTop: 30, backgroundColor: 'transparent' }}>
              <Input
                accessoryLeft={<MyIcon name='person-outline' />}
                placeholder="Nombre y apellido"
                autoCapitalize='none'
                style={{ marginBottom: 10 }} 
                value={nombre}
                onChangeText={setNombre}/>
            </Layout>
            <Layout style={{ marginTop: 5, backgroundColor: 'transparent' }}>
              <Input
                accessoryLeft={<MyIcon name='email-outline' />}
                placeholder="Correo electrónico"
                keyboardType='email-address'
                autoCapitalize='none'
                style={{ marginBottom: 10 }} 
                value={email}
                onChangeText={setEmail}/>
            </Layout>
            <Layout style={{ marginTop: 5, backgroundColor: 'transparent' }}>
              <Input
                accessoryLeft={<MyIcon name='lock-outline' />}
                placeholder="Contraseña"
                autoCapitalize='none'
                secureTextEntry
                style={{ marginBottom: 10 }} 
                value={password}
                onChangeText={setPassword}/>
            </Layout>
            <Layout style={{ marginTop: 5, backgroundColor: 'transparent' }}>
              <Input
                accessoryLeft={<MyIcon name='lock-outline' />}
                placeholder="Confirmar Contraseña"
                autoCapitalize='none'
                secureTextEntry
                style={{ marginBottom: 10 }}
                value={confirmPassword}
                onChangeText={setConfirmPassword} />
            </Layout>
    
            /** Button */
            <Layout style={{ marginTop: 20, backgroundColor: 'transparent' }}>
              <Button 
                onPress={() => handleRegister()}>
                  Registrarme
              </Button>
            </Layout>

            <Layout style={{ marginTop: 50, backgroundColor: 'transparent'}}>
              <Image
                  style={{ alignSelf: 'center' }} 
                  source={require('../../assets/user.png')}></Image>
            </Layout>
            
    
          </ScrollView>
          </ImageBackground>
        </Layout>
      );
};

export default RegisterScreen;
