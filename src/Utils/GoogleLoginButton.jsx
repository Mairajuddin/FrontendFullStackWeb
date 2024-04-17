import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    // Handle Google login response
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="1033327356868-o4nn945vvv7us4b31o5inr6fevv761no.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
