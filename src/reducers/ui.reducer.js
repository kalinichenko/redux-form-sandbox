import {ADD_ALERT, REMOVE_ALERT} from '../components/Alerts/Alerts.connector';

export default (state = {alerts: []}, action) => {
  switch (action.type) {
    case ADD_ALERT: {
      const alerts = [...state.alerts, action.payload];
      return {...state, alerts};
    }
    case REMOVE_ALERT: {
      const {alertId} = action.payload;
      const alerts = state.alerts.filter(alert => alert.alertId !== alertId)
      return {...state, alerts};
    }
    default: return state;
  }
};
