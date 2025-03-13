import { useState, useEffect } from "react";

const useJournalService = (jwtToken) => {
    const url = 'https://myjournalapp-3egm.onrender.com/journal';
    const headers = getHeaders(jwtToken);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetchAllEntries();
    }, []);

    async function fetchAllEntries() {
        try {
            let results = await fetch(url, {
                method: 'GET',
                headers: headers
            });
            results = await results.json();
            setEntries(results);
        } catch (error) {
            console.error("Error occurred while fetching entries: ", error);
        }
    }

    async function addEntry(props) {
        try {
            const entry = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({title: props.title, content: props.content, sentiment: props.sentiment})
            });
            return await entry.json();
            
        } catch (error) {
            console.error("Error occurred while fetching entry: ", error);
            return null;
        }
    }

    async function getEntryById(id) {
        try {
            let results = await fetch(`${url}/get-by-id/${id}`, {
                method: 'GET',
                headers: headers
            });
            return await results.json();
        } catch (error) {
            console.error("Error occurred while fetching entry: ", error);
            return null;
        }
    }

    async function deleteById(id) {
        try {
            await fetch(`${url}/delete-by-id/${id}`, {
                method: 'DELETE',
                headers: headers
            });
        } catch (error) {
            console.error("Error occurred while fetching entry: ", error);
            return null;
        }
    }

    function getHeaders(token) {
        let headers = {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
            headers['Content-Type'] = 'application/json'
        }
        return headers;
    }
    return { entries, addEntry, getEntryById, deleteById };
};

export default useJournalService;
