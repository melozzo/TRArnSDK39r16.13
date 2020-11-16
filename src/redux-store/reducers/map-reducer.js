import {SET_MAPS, SET_MAP } from './../actions/map-actions'

const initialState = {
      mapList:[],
      activeMap:{
            MapID:null,
            MapName:''
      }

};

const mapReducer = ( state = initialState, action )=>{
     
      switch(action.type){
            case SET_MAPS:
                 return {
                       mapList:action.maps,
                       activeMap:state.activeMap
                 }
            case SET_MAP:
                  return {
                        mapList:state.mapList,
                        activeMap:action.map
                  }
           
            default:
                  return state;
      }
}

export default mapReducer;