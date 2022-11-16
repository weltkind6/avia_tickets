import React, {FC} from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

interface Props {
    data: string
    data2: string
}

const AviaInfo:FC<Props> = ({data, data2}) => {
    return (
        <div>
            <h1>Avia info</h1>
            <h2>{data} {data2}</h2>
            <Link to="/avia">
                <Button variant="text">Back</Button>
            </Link>
        </div>
    );
};

export default AviaInfo;