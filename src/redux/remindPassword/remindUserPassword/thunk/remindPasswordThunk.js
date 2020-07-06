import { remindPassCases } from "../../../config/cases/Cases";
import { remindPasswordQuery } from "../query/remindPasswordQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const remindMePassword = (email) => {
  return async (dispatch, getState) => {
    dispatch({ type: remindPassCases.LOADING, payload: true });
    const bodyRequest = remindPasswordQuery(email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data.remindPassword !== null) {
        dispatch({
          type: remindPassCases.PASSWORD_SENT,
          payload: data.remindPassword,
        });
      } else if (errors) {
        dispatch({
          type: remindPassCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: remindPassCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const clearRemindPasswordState = () => {
  return (dispatch, getState) => {
    dispatch({ type: remindPassCases.CLEAR_STATE });
  };
};
