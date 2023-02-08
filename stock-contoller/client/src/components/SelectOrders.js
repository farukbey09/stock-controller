import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const styles = {
  root: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "center",

 
  }
}

export default function SelectOrders(props) {
  const { orders, handleSetSelectedOrders }=props

  return (
    <div style={styles.root} >
      <Autocomplete
        disablePortal
        style={{background:"white"}}
        id="combo-box-orders"
        onChange={(event, newValue) => {
          handleSetSelectedOrders(newValue)
        }}
        options={orders}
        getOptionLabel={(option) => option.orderName}
        sx={{ width: "50%" }}
        renderInput={(params) => <TextField    {...params} label="Orders" />}
      />
    </div>

  );
}

