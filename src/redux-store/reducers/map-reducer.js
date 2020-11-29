import {SET_MAPS, SET_MAP } from './../actions/map-actions'

const initialState = {
      mapList:[],
      selectedMap:{
            MapID:null,
            MapName:''
      }

};

function mapReducer( state = initialState, action ){
     
      switch(action.type){
            case SET_MAPS:
                 return {
                       mapList:action.maps,
                       activeMap:state.selectedMap
                 }
            case SET_MAP:
                  return {
                        mapList:state.mapList,
                        selectedMap:action.selectedMap
                  }
           
            default:
                  return state;
      }
}

export default mapReducer;