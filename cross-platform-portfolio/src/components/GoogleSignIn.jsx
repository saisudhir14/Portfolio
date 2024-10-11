import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import * as jwtDecode from 'jwt-decode';  // Change this line

function GoogleSignIn({ onSuccess }) {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decoded = jwtDecode.jwtDecode(credentialResponse.credential);  // And this line
        onSuccess(decoded);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}

export default GoogleSignIn;