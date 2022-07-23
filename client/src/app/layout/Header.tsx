import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React, { ChangeEvent } from 'react'

interface props{
    onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export default function Header({onChange}: props) {
  return (
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar>
            <Typography variant='h6'>
                RE_STORE
            </Typography>
            <Switch onChange={onChange}/>
        </Toolbar>
    </AppBar>
  )
}
