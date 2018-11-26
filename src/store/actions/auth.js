import axios from "axios";
import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expiratioTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expiratioTime);
  };
};


export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
          email: email,
          password: password,
          returnSecureToken: true
        };

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD6Y8iO6-qxuEGamIJdnVLy9iZxVNN6jq4';

        if (!isSignup){
          url =  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD6Y8iO6-qxuEGamIJdnVLy9iZxVNN6jq4';
        }


        axios.post('',authData)
          .then(response=>{
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
          })
          .catch(err=> {
            dispatch(authFail(err.response.data.error));
          });

    };
};
