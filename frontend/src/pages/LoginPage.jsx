import React from "react";
import OauthLoginButton from "../Components/OauthLoginButton";

export default function LoginPage() {
  return (
    <div className="mt-8 md:mt-10 pt-0 md:pt-10 px-8 md:px-10">
      <h2 className="text-4xl text-center font-bold text-white m-10">Log in</h2>

      <OauthLoginButton />
    </div>
  );
}
