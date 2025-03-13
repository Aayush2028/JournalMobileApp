const useLoginService = async (props) => {
    const url = 'http://myjournalapp-3egm.onrender.com/public/login';
    
    try{
        const jwt = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username: props.name, password: props.password})
        });
        return await jwt.text();
    } 
    catch(error){
        console.error(JSON.stringify({username: props.name, password: props.password}), error);
    }
    return null;
}

export default useLoginService;