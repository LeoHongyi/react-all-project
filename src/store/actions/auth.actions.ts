export const SIGNUP = "SIGNUP";
export const SIGN_SUCCESS = "SIGN_SUCCESS";
export const SIGN_FAIL = "SIGN_FAIL";
export const RESET_SIGNUP = "RESET_SIGNUP";

export interface SignupPayload {
  email: string;
  name: string;
  password: string;
}

export interface SignupAction {
  type: typeof SIGNUP;
  payload: SignupPayload
}

export interface SignupSuccessAction {
  type: typeof SIGN_SUCCESS;
}

export interface SignupFailAction {
  type: typeof SIGN_FAIL;
  message: string;
}

export interface ResetSignupAction {
  type: typeof RESET_SIGNUP
}

export const signup = (payload: SignupPayload): SignupAction => ({
  type: SIGNUP,
  payload
})


export const signupSuccess = (): SignupSuccessAction => ({
  type: SIGN_SUCCESS
})

export const signupFail = (message: string): SignupFailAction => ({
  type: SIGN_FAIL,
  message
})

export const resetSignup = (): ResetSignupAction => ({
  type: RESET_SIGNUP
})

export const SIGNIN = "SIGNIN";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAIL = "SIGNIN_FAIL";

export interface SigninPayload {
  email: string;
  password: string;
}

export interface SigninAction {
  type: typeof SIGNIN;
  payload: SigninPayload
}

export interface SigninSuccessAction {
  type: typeof SIGNIN_SUCCESS
}

export interface SigninFailAction {
  type: typeof SIGNIN_FAIL;
  message: string;
}

export const signin = (payload: SigninPayload): SigninAction => ({
  type: SIGNIN,
  payload
})

export const signinSuccess = (): SigninSuccessAction => ({
  type: SIGNIN_SUCCESS
})

export const signinFail = (message: string): SigninFailAction => ({
  type: SIGNIN_FAIL,
  message
})





export type AuthUnionType = SignupAction
  | SignupSuccessAction
  | SignupFailAction
  | ResetSignupAction
  | SigninAction
  | SigninSuccessAction
  | SigninFailAction;

