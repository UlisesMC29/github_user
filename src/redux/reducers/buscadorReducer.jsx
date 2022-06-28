import { FETCH_GITHUBUSER_FAILURE, FETCH_GITHUBUSER_REQUEST, FETCH_GITHUBUSER_SUCCESS } from "../actions/SearchUser";


const initialState = {
    loading: false,
    user: [],
    error: ''
}

const Searcher = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GITHUBUSER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_GITHUBUSER_SUCCESS:
            return {
                loading: false,
                user: action.playload,
                error: ''
            }

        case FETCH_GITHUBUSER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.playload
            }

        default: return state;
    }
}

export default Searcher;