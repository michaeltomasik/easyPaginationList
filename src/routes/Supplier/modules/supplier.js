// ------------------------------------
// Constants
// ------------------------------------
export const GET_SUPPLIER = 'GET_SUPPLIER'
export const RECIVE_SUPPLIERS = 'RECIVE_SUPPLIERS'
// ------------------------------------
// Actions
// ------------------------------------
export const getSuppliers = () => {

  return (dispatch, getState) => {
    return new Promise((resolve) => {
      return fetch('http://test-api.kuria.tshdev.io/?rating=3&page=2')
        .then(response => response.json())
        .then(json => dispatch(reciveSuppliers(json)))
        .then(() => resolve())
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
    console.log('TRURURURUURURU', action.json)
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
