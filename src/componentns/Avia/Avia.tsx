import React, {FC, useState} from 'react';
import styles from './Avia.module.css'
import MaterialUIPickers from "../../mui/DatePicker/DatePicker";
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import dayjs from "dayjs";


interface Props {
    testHandler: (num: string, arrival: string) => any
}

const Avia: FC<Props> = ({testHandler}) => {

    const [departureCity, setDepartureCity] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')

    const dateHandler = (date: dayjs.Dayjs | null) => {
        setDateFrom(date)
    }

    console.log(dateFrom)

    return (
        <div className={styles.wrapper}>
            <div className={styles.findForm}>
                <div className={styles.inputWrapper}>
                    <div className={styles.fieldBlock}>
                        <TextField
                            id="outlined-basic"
                            label="Город вылета"
                            variant="outlined"
                            onChange={e => setDepartureCity(e.target.value)}
                        />
                    </div>
                    <div className={styles.fieldBlock}>
                        <TextField
                            id="outlined-basic"
                            label="Город прилета"
                            variant="outlined"
                            onChange={e => setArrivalCity(e.target.value)}
                        />
                    </div>
                    <div className={styles.fieldBlock}>
                        <MaterialUIPickers dateHandler={dateHandler}/>
                    </div>
                    <div className={styles.fieldBlock}>
                        <MaterialUIPickers dateHandler={dateHandler}/>
                    </div>
                </div>
                <Link to="/avia/info">
                    <Button
                        onClick={() => testHandler(departureCity, arrivalCity)}
                        variant="contained">
                        Найти билеты
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Avia;