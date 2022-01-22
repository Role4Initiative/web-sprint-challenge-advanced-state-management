import axios from 'axios';

export const START_SMURF_FETCH = "START_SMURF_FETCH";
export const SMURF_API_FETCH = "SMURF_API_FETCH";
export const FAILED_API_FETCH = "FAILED_API_FETCH";
export const ADD_A_SMURF = "ADD_A_SMURF";
export const ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE";


export const fetchSmurfs = (search) => (dispatch) => {
    dispatch({ type: START_SMURF_FETCH });
    axios.get(`http://localhost:3333/smurfs${search}`)
    .then((resp) => {
        dispatch({ type: SMURF_API_FETCH, payload: resp.data});
    })
    .catch((error) => dispatch({ type: FAILED_API_FETCH, payload: error.message }))
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.