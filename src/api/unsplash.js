import Axios from 'axios';

export default Axios.create({
baseURL:'https://api.unsplash.com',
headers:{
    Authorization:'Client-ID d5124212724f4aba98618c9b91cf5b76259ee517ab7e7b6fd80fe0b38c169051'
}
});

