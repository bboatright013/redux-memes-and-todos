const INITIAL_STATE = { memes: [] };

function memeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return( { memes : [...state.memes, action.payload]} );
    case "DELETE":
        console.log(state.memes);
        return { memes: [...state.memes.slice(0,action.payload.position), ...state.memes.slice(action.payload.position + 1)] };
    default:
      return state;
  }
}
//+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = Redux.createStore(memeReducer);