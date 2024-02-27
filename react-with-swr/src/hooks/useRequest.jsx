import useSWR from 'swr';


const baseUrl = "https://pokeapi.co/api/v2";

// Accepts a path provided by the API
// if the path is /pokemon, also need a name of the Pokemon to access its details
export default function useRequest(path, name) {

    if (!path) {
        throw new Error('Path is required');
    }

    
    const url = name ? `${baseUrl}/${path}/${name}?limit=20&offset=20` : `${baseUrl}/${path}`;
    
    // use the useSWR hook to fetch the data based on the key
    // that is provided as well as the fetcher function
    // The key with useSWR is the url that you want to fetch from.
    // useSWR does use caching as well.
    // The url will be the key in useSWR's cache

    // Include `url` in the dependency array
    const { data, error } = useSWR(url);

    // Error handling
    if (error) {
        console.error("Error fetching data:", error);
    }
    
    return { data, error };
}
