import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Main = () => {
    return (
        <div>
            <Link to="/avia">
                <Button variant="contained">К поиску</Button>
            </Link>
        </div>
    );
};

export default Main;