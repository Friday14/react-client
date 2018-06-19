import axios from 'axios';
import { CREATE_USER, UPDATE_USER } from './config';

export function create() {
  return axios({
    method: 'post',
    url: CREATE_USER
  });
}

export function update(payload) {
  return axios.post(UPDATE_USER, payload);
}