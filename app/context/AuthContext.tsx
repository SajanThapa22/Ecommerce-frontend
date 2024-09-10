"use client";

import { createContext, ReactNode, useCallback, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("access")
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refresh")
  );

  const isTokenValid = (token: string | null): boolean => {
    if (!token) return false;
    const decoded = jwtDecode<{ exp: number }>(token);
    if (!decoded.exp) return false;
    return decoded.exp * 1000 > Date.now();
  };

  //   const refreshAccessToken = useCallback(async (): Promise<boolean> => {
  //     if (!refreshToken) return false;

  //     try {
  //       const response = await fetch(`http://localhost:3000/api/token`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(refreshToken),
  //       });

  //       if (response.status === 200) {
  //         const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
  //           response.data;
  //         setAccessToken(newAccessToken);
  //         setRefreshToken(newRefreshToken);
  //         localStorage.setItem("access", newAccessToken);
  //         localStorage.setItem("refresh", newRefreshToken);
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } catch (error) {
  //       console.error("Failed to refresh access token:", error);
  //       return false;
  //     }
  //   }, [refreshToken]);

  //   const fetchNewAccess = async () => {
  //     if (!isTokenValid(refreshToken)) {
  //       return await refreshAccessToken();
  //     }
  //   };

  const login = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken(null);
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
      }}
    ></AuthContext.Provider>
  );
};
