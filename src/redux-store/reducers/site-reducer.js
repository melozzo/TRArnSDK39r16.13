import * as SiteActions from './../actions/site-actions';
import { ActionSheetIOS } from 'react-native';
const initialState = {
      siteList:["lyon"],
      activeSite:null
}

const siteReducer = ( state = initialState, action )=>{

      switch(action.type){
            case SiteActions.SET_SITES:
                  return {
                        siteList:action.sites,
                        activeSite:action.sites[0]
                  }
            default: 
                  return state;
            
      }
      
}

export default siteReducer;