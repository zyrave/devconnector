import axios from 'axios';

import {
  PROFILE_LOADING,
  GET_PROFILE,
  GET_PROFILES,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
} from './types';

// Profile loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING,
});

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: {},
      })
    );
};

// Create profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => {
      history.push('/dashboard');
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post('/api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add education
export const addEducation = (eduData, history) => dispatch => {
  axios
    .post('/api/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete experience
export const deleteExperience = id => dispatch => {
  axios
    .delete(`/api/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete education
export const deleteEducation = id => dispatch => {
  axios
    .delete(`/api/profile/education/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) { // eslint-disable-line
    axios
      .delete('/api/profile')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// Clear profile
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE,
});
