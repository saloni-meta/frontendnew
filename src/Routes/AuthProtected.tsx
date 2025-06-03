import React, { useEffect, useState } from "react";
import { Navigate, Route, useSearchParams } from "react-router-dom";
import { setAuthorization, APIClient } from "../helpers/api_helper";
import { useDispatch } from "react-redux";

const AuthProtected = (props: any) => {
  const dispatch = useDispatch<any>();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [isValidToken, setIsValidToken] = useState(false);
  const bypassAuth = true; // Set to true to bypass authentication for development
  // TODO: Remove bypassAuth flag in production

  useEffect(() => {
    const validateToken = async () => {
      if (bypassAuth) {
        setIsValidToken(true);
        return;
      }

      if (token) {
        try {
          const apiClient = new APIClient();
          const response = await apiClient.create("/auth/validate-token", { token: token });
          if (response.status === 200) {
            localStorage.setItem("authToken", token);
            setAuthorization(token);
            setIsValidToken(true);
          } else {
            if (window.confirm("Auth token invalid, redirecting you to login page")) {
              window.location.href = "https://metaphi.in";
            }
          }
        } catch (error) {
          if (window.confirm("Auth token invalid, redirecting you to login page")) {
            window.location.href = "https://metaphi.in";
          }
        }
      } else {
        if (window.confirm("Auth token invalid, redirecting you to login page")) {
          window.location.href = "https://metaphi.in";
        }
      }
    };

    validateToken();
  }, [token, dispatch, bypassAuth]);

  if (!isValidToken) {
    return null; // or a loading indicator
  }

  /*
    Navigate is un-auth access protected routes via url
    */

  return <>{props.children}</>;
};


const AccessRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtected, AccessRoute };