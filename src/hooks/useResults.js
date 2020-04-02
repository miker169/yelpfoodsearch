import React, {useState, useEffect} from 'react';
import yelp from "../api/yelp";

export default () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'keighley',
                }
            });

            setErrorMessage('');
            setResult(response.data.businesses);
        }catch(ex) {
            setErrorMessage('Something Went Wrong')
            console.log(ex)
        }
    };

    useEffect(() => {
        searchApi('pasta')
    }, []);


    return [searchApi, results, errorMessage];
}