import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText, Menu } from '@material-ui/core';

export default function Select(props) {

    const { name, label, options,onChange } = props;

    return (
        <FormControl variant="outlined"
>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                onChange={onChange}>
                
                <MenuItem key="0" value="0">Tipo Prestamo</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={parseFloat(item.value)}>{item.tipo}</MenuItem>)
                    )
                }
            </MuiSelect>
           
        </FormControl>
    )
}
