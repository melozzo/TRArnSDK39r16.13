
 const baseURL = "http://localhost:7070";
 //const baseURL = "http://138.68.12.0:8080"


export async function getMap( memberId ) {
      try {
            let response = await fetch(`${baseURL}/map/last/${memberID}`);
            let json = await response.json();
            return json.data;
      } catch (error) {
            console.error(error);
      }

}

async function getSites( mapId ) {
      try {
            let response = await fetch('https://reactnative.dev/movies.json');
            let json = await response.json();
            return json.movies;
      } catch (error) {
            console.error(error);
      }
    }