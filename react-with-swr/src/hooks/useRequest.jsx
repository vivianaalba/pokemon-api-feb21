import { useSwr } from "swr";

const baseUrl = "https://pokeapi.co/api/v2";

export default function useRequest(path, name) {
    if (!path) {
        throw new Error('Path is required');
    }
    
    const url = name ? `${baseUrl}/${path}/${name}?limit=20&offset=20` : `${baseUrl}/${path}`;

    // Include `url` in the dependency array
    const { data, error } = useSwr(url);

    // Handle errors if needed
    if (error) {
        console.error("Error fetching data:", error);
        // You can handle errors here or let the component using this hook handle them
    }
    
    return { data, error };
}
