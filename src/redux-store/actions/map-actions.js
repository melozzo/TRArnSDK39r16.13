import axios from 'axios'

export const SET_MAPS = 'SET_MAPS';
export const SET_MAP = 'SET_MAP';


const baseURL= 'http://138.68.12.0:8080';      // 'http://localhost:7070';

export const fetchMaps = (memberId)=>{ 
      return async dispatch =>{
            console.log('inside fetch maps')
            const response = await fetch(`${baseURL}/map/list/${memberId}`,
            {
                  method:'GET',
                  headers:{
                        'Content-Type':'application/json'
                  },
            })
            const data = await response.json();
        
            dispatch({
                  type:SET_MAPS,
                  maps: data
            })
            dispatch({
                  type:SET_MAP,
                  selectedMap: data[0]
            })
      }
}


export const getLastMap = (memberId)=>{ 
      console.log('inside last map')
      return async dispatch =>{
           try{
                  const response = await fetch(`${baseURL}/map/list/46996`);
                  console.log('got response')
                  const data = await response.json();
                  console.log('returning map' ,data)
                  dispatch({
                        type:SET_MAP,
                        selectedMap: data
                  })
      }catch(error){
            console.log("error")
      }
}

}