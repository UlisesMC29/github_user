import axios from "axios";

export const FETCH_GITHUBUSER_REQUEST = 'FETCH_GITHUBUSER_REQUEST';
export const FETCH_GITHUBUSER_SUCCESS = 'FETCH_GITHUBUSER_SUCCESS';
export const FETCH_GITHUBUSER_FAILURE = 'FETCH_GITHUBUSER_FAILURE';

//Actions
export const fetchGitHubUserRequest = () => {
    return {
        type: FETCH_GITHUBUSER_REQUEST
    }
}

export const fetchGitHubUserSuccess = (user) => {
    return {
        type: FETCH_GITHUBUSER_SUCCESS,
        playload: user
    }
}

export const fetchGitHubUserFailure = (error) => {
    return {
        type: FETCH_GITHUBUSER_FAILURE,
        playload: error
    }
}

// const axios = require('axios');


const fetchUserGitHub = (value) => {
    return (dispatch) => {
        dispatch(fetchGitHubUserRequest());
        axios.get(`https://api.github.com/users/${value}`)
            .then(response => {
                dispatch(fetchGitHubUserSuccess([response.data]));
            })
            .catch(error => {
                dispatch(fetchGitHubUserFailure('Not Found'));
            });
    }
}



export default fetchUserGitHub;