export const LOGIN = 'LOGIN';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';


const baseURL= 'http://138.68.12.0:8080';      // 'http://localhost:7070';

export const login = (email, password)=>{ 
      return async dispatch =>{
            const response = await fetch(`${baseURL}/member/login`,
            {
                  method:'POST',
                  headers:{
                        'Content-Type':'application/json'
                  },
                  body: JSON.stringify({Email:email, Password:password})
            })
            const data = await response.json();
            console.log('returning authenticated member' ,data)
            dispatch({
                  type:SET_AUTHENTICATED,
                  member: data
            })
      }
}