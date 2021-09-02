export function manageFriends(state = {friends: []}, action){
  switch(state, action.type){
    case 'ADD_FRIEND':
      return ({...state, friends: [...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
      let drop = state.friends.findIndex(d => d.id === action.id)
      return ({...state, friends: [
              ...state.friends.slice(0, drop),
              ...state.friends.slice(drop + 1)
            ]})
    default:
      return state
  }
}
