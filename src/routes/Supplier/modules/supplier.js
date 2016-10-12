// ------------------------------------
// Constants
// ------------------------------------
export const GET_SUPPLIER = 'GET_SUPPLIER'
export const RECIVE_SUPPLIERS = 'RECIVE_SUPPLIERS'

// ------------------------------------
// Actions
// ------------------------------------
export const getSuppliers = (active, rating = 0, query = '') => {
  let url = 'http://test-api.kuria.tshdev.io/?page=' + active
  url = rating !== 0 ? (url + '&rating=' + rating) : url
  url = query !== '' ? (url + '&query=' + query) : url

  return (dispatch, getState) => {
    return new Promise((resolve) => {
      return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(reciveSuppliers(json)))
        .then(() => resolve()).catch(function (e) {
          console.log('Error :' + e)
          dispatch(reciveSuppliers({
            pagination: {},
            payments: []
          }))
        })
    })
  }
}

export function reciveSuppliers (json) {
  return {
    type : RECIVE_SUPPLIERS,
    json
  }
}

export const actions = {
  reciveSuppliers,
  getSuppliers
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECIVE_SUPPLIERS] : (state, action) => {
    return {
      ...state,
      ...action.json
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  pagination: {},
  payments: []
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
