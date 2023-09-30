import React, { createContext, useState, useContext } from "react";
import { executeJWTAuthenticationService } from "../api/HelloWorldApiService";
import {apiClient} from "../api/TodoApiService";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  async function login(username, password) {
    try {
      const response = await executeJWTAuthenticationService(
        username,
        password
      );
      console.log(response);
      if (response.status === 200) {
        const jwtToken = "Bearer " + response.data.token;

        setAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);

        apiClient.interceptors.request.use((config) => {
          console.log("interceting and adding token");
          config.headers.authorization = jwtToken;
          return config;
        });
        return true;
      } else {
        setAuthenticated(false);
        setUsername(null);
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}
