const INITIAL_STATE = { todos : [] };

function todoReducer( state = INITIAL_STATE, action){
    console.log(state.todos);
    console.log(action);
    switch(action.type) {
        case "ADD":
            return {todos : [...state.todos, action.payload ]}
        case "DELETE":
            return {todos : [...state.todos.filter(todo => todo.key !== action.payload.key)]}
        default:
            return state;
    }
}

export default todoReducer;