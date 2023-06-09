import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [token, setToken] = useState("");
    const [points, setPoints] = useState([]);
    const [point, setPoint] = useState([]);
    return (
      <AuthContext.Provider
        value={{
            token,
            setToken, 
            points,
            setPoints,
            point,
            setPoint
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }