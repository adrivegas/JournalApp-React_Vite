import { checkingCredentials } from './';

export const checkingAuthentication = (email, password) => {
    return async(dispach) => {

        dispach(checkingCredentials());

    }
}

export const startGoogleSingIn = () => {
    return async(dispach) => {

        dispach(checkingCredentials());

    }
}