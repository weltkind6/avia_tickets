import * as React from 'react';
import dayjs, {Dayjs} from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import './DatePicker.css'
import {FC} from "react";

interface Props {
    dateHandler: (date: dayjs.Dayjs | null) => void
}


const MaterialUIPickers:FC<Props> = ({dateHandler}) => {
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) =>
                        <TextField
                            className="datePicker"
                            {...params}
                            onClick={() => dateHandler(value)}
                        />}
                />
            </Stack>
        </LocalizationProvider>
    );
}

export default MaterialUIPickers
