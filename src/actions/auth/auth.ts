import {Api} from '../../config/api/api';
import { User } from '../../domain/entities/user';
import type { AuthResponse } from '../../infraestructure/interface/auth.responses';


const returnUserToken = ( data: AuthResponse ) => {

  const user: User = {
    user: (data.user as any).fname + ' ' + (data.user as any).fsurname,
    email: (data.user as any).email,
  }

  return {
    user: user,
    token: data.access_token,
  }
}



export const authLogin = async (email: string, password: string) => {

  email = email.toLowerCase();


  try {
    const { data } = await Api.post<AuthResponse>('/login', {
      email,
      password,
    });

    return returnUserToken(data);


  } catch (error) {
    console.log(error);
    return null;
  }
};


export const authCheckStatus = async () => {

  try {
    const { data } = await Api.get<AuthResponse>('/auth/check-status');
    return returnUserToken(data);

  } catch (error) {
    console.log({error});
    return null;
  }

}