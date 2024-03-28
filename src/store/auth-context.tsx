import { ReactNode, createContext, useContext, useReducer } from 'react';

type AuthState = {
  isLogin: boolean;
};

const initialState: AuthState = {
  isLogin: false,
};

type AuthContextValue = AuthState & {
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuthContext() {
  const authCtx = useContext(AuthContext);

  if (authCtx === null) {
    throw new Error('AuthContext is null - that should not be the case!');
  }

  return authCtx;
}

type LoginAction = {
  type: 'LOGIN';
};

type LogoutAction = {
  type: 'LOGOUT';
};

type Action = LoginAction | LogoutAction;

function authReducer(state: AuthState, action: Action): AuthState {
  if (action.type === 'LOGIN') {
    return {
      isLogin: true,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      isLogin: false,
    };
  }

  return state;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const ctx: AuthContextValue = {
    isLogin: authState.isLogin,
    login() {
      dispatch({ type: 'LOGIN' });
    },
    logout() {
      dispatch({ type: 'LOGOUT' });
    },
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
