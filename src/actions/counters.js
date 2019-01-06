export const FETCH_COUNTERS_START = 'FETCH_COUNTERS_START'
export const FETCH_COUNTERS_SUCCESS = 'FETCH_COUNTERS_SUCCESS'
export const FETCH_COUNTERS_FAILED = 'FETCH_COUNTERS_FAILED'

export const fetchCountersStart = () => ({
  type: FETCH_COUNTERS_START
})
export const fetchCountersSuccess = counters => ({
  type: FETCH_COUNTERS_SUCCESS,
  payload: { counters }
})
export const fetchCountersFailed = error => ({
  type: FETCH_COUNTERS_FAILED,
  payload: { error }
})

export function fetchCounters() {
  return dispatch => {
    dispatch(fetchCountersStart())
    fetch('/api/counters')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCountersSuccess(json))
        return json
      })
      .catch(error => dispatch(fetchCountersFailed(error)))
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const incrementCounter = counters => ({
  type: INCREMENT_COUNTER,
  payload: { counters }
})
export function increment(id) {
  return dispatch => {
    fetch('/api/counter/inc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => dispatch(incrementCounter(json)))
  }
}

export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const decrementCounter = counters => ({
  type: DECREMENT_COUNTER,
  payload: { counters }
})
export function decrement(id) {
  return dispatch => {
    fetch('/api/counter/dec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => dispatch(decrementCounter(json)))
  }
}

export const ADD_COUNTER = 'ADD_COUNTER'
export const addCounter = counters => ({
  type: ADD_COUNTER,
  payload: { counters }
})
export function add(title) {
  return dispatch => {
    fetch('/api/counter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => dispatch(removeCounter(json)))
  }
}

export const REMOVE_COUNTER = 'REMOVE_COUNTER'
export const removeCounter = counters => ({
  type: REMOVE_COUNTER,
  payload: { counters }
})
export function remove(id) {
  return dispatch => {
    fetch('/api/counter', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => dispatch(removeCounter(json)))
  }
}
