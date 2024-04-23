import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;
// Exporting the whole function enable us to use both data and setData for future purposes
// Since we are already returning both data and setData in the useState hook in the useCurrencyInfo function
// Without exporting the hook it will not work