import React, { useState, useEffect } from 'react';
import { doApiGet } from '../service/apiService';
import ProdsItem from './prodsItem';


function Prods(props) {

    let [ prods_ar, setProds ] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3000/valid"
        doApiGet(url)
            .then(data => {
                setProds(data)
                console.log(data);
            })
    }, [])

    return (
        <div className="row">
            {prods_ar.map(item => {
                return (
                    <ProdsItem key={item.id} item={item} />
                )
            })}

        </div>
    );
}

export default Prods;