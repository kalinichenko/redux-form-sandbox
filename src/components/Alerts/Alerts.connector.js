import {connect} from 'react-redux';
import Alerts from './Alerts';

export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const SUCCESS_LEVEL = 'SUCCESS_LEVEL';

let alertId = 0;
export const addAlert = ({level, message}) => (dispatch) => {
  dispatch({
    type: ADD_ALERT,
    payload: {
      level,
      message,
      alertId: alertId,
    }
  });
  (alertId => setTimeout(() => dispatch(removeAlert(alertId)), 3000))(alertId);
  alertId++;
}

export const removeAlert = (alertId) => ({
  type: REMOVE_ALERT,
  payload: {
    alertId,
  }
})

export default connect((state) => ({
  alerts: state.ui.alerts,
}), {addAlert})(Alerts);