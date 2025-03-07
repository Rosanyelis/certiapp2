import React, { useEffect } from 'react';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { Image, ImageBackground, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../routes/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'SplashScreen'>{ }
export const SplashScreen  = ({ navigation }: Props) => {
    const {height} = useWindowDimensions();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 5000);
    }, [navigation]);

    return (
        <Layout style={{ flex: 1 }}>
              
              <ScrollView style={{ marginHorizontal: 40 }}>
        
                <Layout style={{ paddingTop: height * 0.25, backgroundColor: 'transparent'}}>
                    <Image style={{ alignSelf: 'center' }} source={require('../assets/logo.png')} />
                </Layout>
                /** inputs */
                
                <Layout style={{ marginTop: 150, alignItems: 'center', backgroundColor: 'transparent' }}>
                  <Text
                    style={{ color: 'black' }}
                    category='h2'
                    onPress={() => {}}>Nueva frase</Text>          
                </Layout>
                <Layout style={{ marginTop: 80, backgroundColor: 'transparent'}}>
                    <Image
                        style={{ alignSelf: 'center' }} 
                        source={require('../assets/page_principal.png')}></Image>
                </Layout>
              </ScrollView>
            </Layout>
    );
};


export default SplashScreen;
