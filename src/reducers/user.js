const initialState = {first_name: '', last_name: ''};
export function user(state = initialState, action) {
  switch (action.type){
    case 'INITIALIZE_APP': {
      return action.payload.data;
    }
  }
  return state;
}
