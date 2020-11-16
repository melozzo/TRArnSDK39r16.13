export const SET_SITES = 'SET_SITES';
export const SET_SITE = 'SET_SITE';

const baseURL= 'http://138.68.12.0:8080';  //'http://localhost:7070'

export const fetchSites = (mapId)=>{ 
      return async dispatch =>{

       try{     
                  const response = await fetch(`${baseURL}/site/list/${mapId}`,
                  {
                        method:'GET',
                        headers:{
                              'Content-Type':'application/json'
                        },
                  })
                  if(! response.ok){
                        throw new Error('fetching sites failed');
                  }
                  const data = await response.json();
                  console.log('returning sites' ,data)
                  dispatch({type:SET_SITES,sites: data})
            }catch(err){
                  throw err;
            }
      }
}
