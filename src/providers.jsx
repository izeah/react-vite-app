import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  reducer as authReducer,
  initialState as initialAuthState,
} from "@/libs/reducers/auth/reducer";
import PropTypes from "prop-types";

export function UIProviders({ children }) {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <NextThemeProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}

UIProviders.propTypes = {
  children: PropTypes.node,
};

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
