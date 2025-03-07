import { StackScreenProps } from "@react-navigation/stack";
import { Layout, Icon, Text, Button } from "@ui-kitten/components";
import { RootStackParams } from "../../routes/Navigator";


interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{ }
export const HomeScreen = ( { navigation }: Props) => {
    return (
        <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text category="h3">Dashboard en construccion para conexion con api de facebook</Text>
            <Button onPress={() => navigation.navigate('LoginScreen')} >Cerrar Sesión</Button>
        </Layout>
    );
};

export default HomeScreen;