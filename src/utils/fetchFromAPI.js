import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
   
   
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
    //   part: 'id,snippet',
    //   type: 'video',
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '2b448e2f13msh75ca80c66bed929p145d86jsn2732768b9bc2',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

  export const fetchFromAPI = async (url) => {

   
  try {
      const response = await axios.get(`${BASE_URL}/${url}`,options);
      console.log(response.data)
      return response.data;
  } catch (error) {
      console.error(error);
      return null;

    }
  }