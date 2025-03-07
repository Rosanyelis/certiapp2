import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { Image, ImageBackground, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MyIcon } from '../components/MyIcon';

export const RegisterScreen = () => {
    const {height} = useWindowDimensions();
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
                style={{ marginBottom: 10 }} />
            </Layout>
            <Layout style={{ marginTop: 5, backgroundColor: 'transparent' }}>
              <Input
                accessoryLeft={<MyIcon name='email-outline' />}
                placeholder="Correo electrónico"
                keyboardType='email-address'
                autoCapitalize='none'
                style={{ marginBottom: 10 }} />
            </Layout>
            <Layout style={{ marginTop: 5, backgroundColor: 'transparent' }}>
              <Input
                accessoryLeft={<MyIcon name='lock-outline' />}
                placeholder="Contraseña"
                autoCapitalize='none'
                secureTextEntry
                style={{ marginBottom: 10 }} />
            </Layout>
            <Layout style={{ marginTop: 5, backgroundColor: 'transparent' }}>
              <Input
                accessoryLeft={<MyIcon name='lock-outline' />}
                placeholder="Confirmar Contraseña"
                autoCapitalize='none'
                secureTextEntry
                style={{ marginBottom: 10 }} />
            </Layout>
    
            /** Button */
            <Layout style={{ marginTop: 20, backgroundColor: 'transparent' }}>
              <Button 
                onPress={() => {}}>
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