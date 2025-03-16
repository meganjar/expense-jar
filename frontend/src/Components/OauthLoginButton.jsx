import React from 'react'

function OauthLoginButton() {

  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/login/google';
  };
  return (
    <button
    onClick={handleLogin}
    >OauthLoginButton</button>
  )
}

export default OauthLoginButton