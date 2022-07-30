import { useEffect, useState } from "react";

const useInventory = () =>{
    const [inventory, setInventory] = useState({});

    useEffect( () =>{
        const url = `https://gentle-temple-80074.herokuapp.com/inventory`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setInventory(data));

    }, []);
    return [inventory,setInventory]
}
export default useInventory
