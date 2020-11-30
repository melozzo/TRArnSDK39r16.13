import * as SiteActions from './../actions/site-actions';



const initialState = {
      siteList:[],
      selectedSite:{Name:'godzilla'}
}

function siteReducer( state = initialState, action ){

      switch(action.type){
            case SiteActions.SET_SITES:
                  return {
                        siteList:action.sites,
                        selectedSite:action.sites[0]
                  }

            case SiteActions.SET_SITE:
                  return {
                        siteList: state.siteList,
                        selectedSite: action.selectedSite
                  }
            
            default: 
                  return state;
            
      }
      
}

export default siteReducer;