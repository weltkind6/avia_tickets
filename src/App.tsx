import React, {useState} from 'react';
import './App.css';
import Avia from "./componentns/Avia/Avia";
import {Route, Routes} from "react-router-dom";
import AviaInfo from "./componentns/AviaInfo/AviaInfo";
import Main from "./componentns/Main/Main";


function App() {

    const [data, setData] = useState('')
    const [data2, setData2] = useState('')

    const testHandler = (departure: string, arrival: string) => {
         setData(departure)
        setData2(arrival)
    }


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/avia" element={
                    <Avia testHandler={testHandler}/>
                }/>
                <Route path="/avia/info" element={<AviaInfo data={data} data2={data2}/>}/>
            </Routes>
        </div>
    );
}

export default App;
