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
                       selectedMap:state.selectedMap
                 }
            case SET_MAP:
                  console.log("setting map")
                  return {
                        mapList:state.mapList,
                        selectedMap:action.map
                  }
           
            default:
                  return state;
      }
}

export default mapReducer;