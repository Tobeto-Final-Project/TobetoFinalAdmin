// store/reducers/auth.ts
interface AuthState {
    token: string | null;
  }
  
  const initialState: AuthState = {
    token: null,
  };
  
  type AuthAction = { type: 'SET_TOKEN'; payload: string } | { type: 'CLEAR_TOKEN' };
  
  const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...state,
          token: action.payload,
        };
      case 'CLEAR_TOKEN':
        return {
          ...state,
          token: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  