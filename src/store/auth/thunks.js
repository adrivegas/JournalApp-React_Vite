import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = (email, password) => {
    return async(dispach) => {

        dispach(checkingCredentials());

    }
}

export const startGoogleSingIn = () => {
    return async(dispach) => {

        dispach(checkingCredentials());

        const result = await singInWithGoogle();
        // console.log({result});        
        if (!result.ok) return dispach(logout(result.errorMessage));
        
        dispach(login(result));

    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        console.log(result);
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}


