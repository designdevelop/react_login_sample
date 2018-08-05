import axios from 'axios';

export const FETCH_LOGIN = "FETCH_LOGIN";
export const ROOT_URL = `http://localhost:3000`;

export function fetchLogin(param){
	const url = `${ROOT_URL}/user/login`;
	const request = axios.post(url, param);

	return {
		type : FETCH_LOGIN,
		payload : request
	}
}