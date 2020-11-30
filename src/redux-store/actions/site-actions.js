export const SET_SITES = 'SET_SITES';
export const SET_SITE = 'SET_SITE';
export const SITE_CREATED = 'SITE_CREATED';

const baseURL= 'http://138.68.12.0:8080';  //'http://localhost:7070'

export const fetchSites = (mapId)=>{ 
      return async dispatch =>{
            console.log('fetching sites for', mapId)
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


export const createSite = ( site ) =>{
      console.log('in create site', site)
      return async dispatch => {
            const response = await fetch(`${baseURL}/site/create`,
            {
                  method:'POST',
                  headers:{'Content-Type':'application/json'},
                  body: site
            });
            if(! response.ok)
                  console.log( 'createing site failed');
            const data = await response.json();
            dispatch(fetchSites(site.MapID));
            dispatch({type:SET_SITE, selectedSite: data})
      }

}
