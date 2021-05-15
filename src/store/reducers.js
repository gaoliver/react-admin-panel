import * as types from "./actionTypes";
import Immutable from "seamless-immutable";

import {users} from "../service/mockData"

const initialState = Immutable({
  loading: false,
  userId: -1,
  userData: {}
});

export default function storeUser(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOGIN:
      return state.merge({
        userId: action.data,
        userData: users.find(x => x.id === action.data)
      });
    case types.USER_LOGOUT:
      return state;
    case types.LOADING:
      return state.merge({
        loading: action.data.loading,
      });
    default:
      return state;
  }
}
