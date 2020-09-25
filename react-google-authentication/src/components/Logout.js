import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '529849094404-ehimhb1h26i1cgbmr6u7dlk33la9nq1h.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
