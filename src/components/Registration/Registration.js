import React from 'react';
import { Field } from 'redux-form';

import {required, latinOnly, email} from './Registration.validators';
import Input from '../../components/Input';


export default props => {
  const { error, submitting, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={Input}
        label="First Name"
        validate={[required, latinOnly]}
      />
      <Field
        name="lastName"
        type="text"
        component={Input}
        label="Last Name"
        validate={[required, latinOnly]}
      />
      <Field
        name="email"
        type="email"
        component={Input}
        label="Email"
        validate={[required, email]}
      />
      <Field
        name="iban"
        type="text"
        component={Input}
        label="IBAN"
        validate={[required]}
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Log In</button>
      </div>
    </form>
  );
};
