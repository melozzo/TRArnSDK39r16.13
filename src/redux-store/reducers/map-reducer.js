import {SET_MAPS, SET_MAP } from './../actions/map-actions'

const initialState = {
      mapList:[],
      selectedMap:null

};

function mapReducer( state = initialState, action ){
     
      switch(action.type){
            case SET_MAPS:
                 return {
                       mapList:action.maps,
                       selectedMap:state.selectedMap
                 }
            case SET_MAP:
                  console.log("setting map", action.selectedMap)
                  return {
                        mapList:state.mapList,
                        selectedMap:action.selectedMap
                  }
           
            default:
                  return state;
      }
}

export default mapReducer;