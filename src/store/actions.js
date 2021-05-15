import * as types from "./actionTypes";

export function userLogin(userId) {
    return async (dispatch) => {
        await dispatch({ type: types.LOADING, data: { loading: true } });
        await dispatch({ type: types.USER_LOGIN, data: userId });
        return dispatch({ type: types.LOADING, data: { loading: false } });
    };
}

export function userLogout() {
    return async (dispatch) => {
        await dispatch({ type: types.LOADING, data: { loading: true } });
        await dispatch({ type: types.USER_LOGOUT });
        return dispatch({ type: types.LOADING, data: { loading: false } });
    };
}