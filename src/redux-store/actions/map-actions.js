import { DrawerContentScrollView } from "@react-navigation/drawer";

export const SET_MAPS = 'SET_MAPS';
export const SET_MAP = 'SET_MAP';


const baseURL= 'http://138.68.12.0:8080';      // 'http://localhost:7070';

export const fetchMaps = (memberId)=>{ 
      return async dispatch =>{
            const response = await fetch(`${baseURL}/map/list/${memberId}`,
            {
                  method:'GET',
                  headers:{
                        'Content-Type':'application/json'
                  },
            })
            const data = await response.json();
           // console.log('returning maps' ,data)
            dispatch({
                  type:SET_MAPS,
                  maps: data
            })
      }
}

export const fetchLastMap = (memberId)=>{ 
      console.log('fetching last for ' ,memberId)
      return async dispatch =>{
            const response = await fetch(`${baseURL}/map/last/${memberId}`,
                  {
                        method:'GET',
                        headers:{
                              'Content-Type':'application/json'
                        },
                  });

            if( ! response.ok){
                  console.log('error getting last map', response)
            }
                  const lastmap = await response.json();
                  console.log('returning last map', lastmap)
           
            dispatch({
                  type:SET_MAP,
                  selectedMap: lastmap
            })
           
      }
}

export const getMap = (id)=>{ 
      return {
            type:GET_MAP,
            mapId : id
      }
}