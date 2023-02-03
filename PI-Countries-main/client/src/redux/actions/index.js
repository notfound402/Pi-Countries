import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRY_NAME,
  GET_ALL_ACTIVITIES,
  GET_COUNTRY_DETAIL,
  ORDER_BY_NAME,
  FILTER_BY_POPULATION,
  FILTER_BY_CONTINENT,
  CLEAN_DETAILS,
  FILTER_BY_ACTIVITIES,
} from "./const";


export function getCountries() {
  return async function (dispatch) {
    const answer = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: GET_COUNTRIES,
      payload: answer.data,
    });
  };
}
export function getCountryName(name){
    return async function(dispatch){
        const answer = await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch({
            type : GET_COUNTRY_NAME,
            payload : answer.data,
        })
    }
}

export function filterByActivity(payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}
 export function postActivity(payload){
     return async function(){
         const answer = await axios.post('http://localhost:3001/activities', payload);
         return answer;

     }
 }

export function getActivities(){
    return async function(dispatch){
        var acts = await axios.get('http://localhost:3001/activities');
        return dispatch({
            type : GET_ALL_ACTIVITIES,
            payload : acts.data,
        })
    }
}
export function getCountryDetail(id){
    return async function(dispatch){
        const detail = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type : GET_COUNTRY_DETAIL,
            payload : detail.data,
        })
    }
}

export function orderByName(payload) {
	return {
		type: ORDER_BY_NAME,
		payload,
	};
}
export function cleanDetails() {
	return {
		type: CLEAN_DETAILS,
	};
}
export function filterContinent(payload) {
	return {
		type: FILTER_BY_CONTINENT,
		payload,
	};
}
export function filterCountryByPopulation(payload) {
	return {
		type: FILTER_BY_POPULATION,
		payload,
	};
}