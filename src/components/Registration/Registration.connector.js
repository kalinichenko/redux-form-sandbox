import { reduxForm } from 'redux-form';

import Registration from './Registration';
import {asyncValidate} from './Registration.validators';
import {addAlert, SUCCESS_LEVEL} from '../Alerts/Alerts.connector';

function onSubmit(values) {
  // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};

function onSubmitSuccess(values, dispatch) {
  dispatch(addAlert({level: SUCCESS_LEVEL, message: 'Congratz! All data is valid'}))
}

export default reduxForm({
  form: 'registrationForm',
  onSubmit,
  onSubmitSuccess,
  asyncValidate,
  asyncChangeFields: ['iban'],
})(Registration);

