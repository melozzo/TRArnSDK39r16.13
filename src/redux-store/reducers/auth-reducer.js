import * as AuthActions from '../actions/auth-actions';



const initialState = {
      authenticatedMember: null
}

function memberReducer( state = initialState, action ){

      switch(action.type){
            case AuthActions.SET_AUTHENTICATED:
                  return {
                        authenticatedMember:action.member
                  }
            default: 
                  return state;
            
      }
      
}

export default memberReducer;