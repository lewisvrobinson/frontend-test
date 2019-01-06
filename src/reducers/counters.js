import {
  FETCH_COUNTERS_START,
  FETCH_COUNTERS_SUCCESS,
  FETCH_COUNTERS_FAILED,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  REMOVE_COUNTER
} from '../actions/counters'

const initialState = {
  counters: [],
  loading: false,
  error: null
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTERS_START:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_COUNTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.counters
      }

    case FETCH_COUNTERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }

    case INCREMENT_COUNTER:
      return {
        ...state,
        loading: false,
        items: action.payload.counters
      }

    case DECREMENT_COUNTER:
      return {
        ...state,
        loading: false,
        items: action.payload.counters
      }

    case REMOVE_COUNTER:
      return {
        ...state,
        loading: false,
        items: action.payload.counters
      }

    default:
      return state
  }
}
