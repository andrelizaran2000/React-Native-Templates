// Types
import { Actions, ActionTypes, UserType } from '../types/user';

const initialState:UserType = { displayName:'Andre Lizarán', token:'' }

export default function reducer (state:UserType | null = initialState, { type, payload }:Actions):UserType {
  switch (type) {
    case ActionTypes.SIGN_IN_USER:
      return payload;
    case ActionTypes.SIGN_OUT_USER:
      return { displayName:'', token:'' }
    default:
      return initialState;
  }
}