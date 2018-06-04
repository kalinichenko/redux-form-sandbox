import React from 'react';
import { Values } from "redux-form-website-template";

import Registration from '../Registration';
import Alerts from '../Alerts';

export default (props) => (
  <div>
    <Registration />
    <Values form="registrationForm" />
    <Alerts />
  </div>
);
