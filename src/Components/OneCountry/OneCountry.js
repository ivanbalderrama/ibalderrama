import React, {useState, useEffect} from 'react'
//import data from './oc-data.json'
import OCHeader from './OCHeader'
import OCMain from './OCMain'
export default function OneCountry() {
    const [data, setData] = useState([]);
    
    const getData = () => {
        fetch('oc-data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'https://unsplash.com'
            }
        }
        )
            .then((res) => {
                console.log(res)
                return res.json();
            })
            .then((myJson) => {
                console.log(myJson)
                setData(myJson);
            }
            )
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <>
            <header>
                <OCHeader />
            </header>
            <main>
                <OCMain data={data} />
            </main>
        </>
    )
}