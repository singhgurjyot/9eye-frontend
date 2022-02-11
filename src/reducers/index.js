import { combineReducers } from "redux";
import gpsReducer from "./gpsReducer";
import panTriggerReducer from "./panTriggerReducer";
import panTriggerReducer1 from "./panTriggerReducer1";
import getStoreReducer from "./getStoreReducer";
import locationReducer from "./locationReducer";
import loginReducer from "./loginReducer";
import selectDateReducer from "./selectDateReducer";
import setTimeReducer from "./setTimeReducer";
import setSelectedPersonCountReducer from "./setSelectedPersonCountReducer";
import setSelectedStarsCountReducer from "./setSelectedStarsCountReducer";
import appointmentDetailReducer from "./appointmentDetailReducer";
import appointmentReducer from "./appointmentReducer";
import loadingReducer from "./loadingReducer";
import reviewsReducer from "./reviewsReducer";
import contactFormStatusReducer from "./contactFormStatusReducer";
import signupReducer from "./signupReducer";
import getAllStoreFlagReducer from "./getAllStoreFlagReducer";
import loginVerifyErrorReducer from "./loginVerifyErrorReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import updateProfileReducer from "./updateProfileReducer"
import {filterReducer} from "./filterReducer"

export default combineReducers({
  gps: gpsReducer,
  panTrigger: panTriggerReducer,
  panTrigger1: panTriggerReducer1,
  stores: getStoreReducer,
  login: loginReducer,
  searchLocation: locationReducer,
  selectedDate: selectDateReducer,
  appointments: appointmentDetailReducer,
  appointmentBooking: appointmentReducer,
  progress: loadingReducer,
  review: reviewsReducer,
  selectedTime: setTimeReducer,
  personCount: setSelectedPersonCountReducer,
  starcount: setSelectedStarsCountReducer,
  contact: contactFormStatusReducer,
  signup: signupReducer,
  getAllStore: getAllStoreFlagReducer,
  loginVerify: loginVerifyErrorReducer,
  forgot: forgotPasswordReducer,
  pwdReset: resetPasswordReducer,
  updateProfile: updateProfileReducer,
  filter: filterReducer,
});
