import React, {useEffect, useState} from 'react';

function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(results => {
                // console.log(results.data.children);
                setIsLoading(false);
                setData(results.data.children);
            })
            .catch(error => {
                setIsLoading(false);
                setErrorMessage('There was an error');
            });
    }, [url]);

    return { data, isLoading, errorMessage };
}

export default useFetch;