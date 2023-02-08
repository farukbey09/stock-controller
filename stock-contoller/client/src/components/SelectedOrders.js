import React from 'react'
import { IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


const styles = {
    root: {
        marginTop: "50px",
        marginBottom: "50px",
        display: "flex",
        justifyContent: "center",
        maxWidth: "1000px",
        overflowX: "auto",
        marginLeft: "auto",
        marginRight: "auto"
    },
    order: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "50px",
    },
    title: {
        display: "flex",
        color: "#197dd4",
        justifyContent: "center",
        fontFamily: "cursive"
    },
    orderName: {
        fontSize: "20px",
        fontWeight: "bolder",
        marginRight: "15px",
        color: "#197dd4"
    }

}

const SelectedOrders = ({ selectedOrders, handleDeleteSelectedOrder }) => {
    return (
        <div style={{ marginTop: "75px", }}>
            <div style={styles.root} >
                {selectedOrders && selectedOrders.map((selectedOrder) =>
                    <div style={styles.order} key={selectedOrder.orderId + Math.random(10)}>
                        <IconButton onClick={() => handleDeleteSelectedOrder(selectedOrder)}>
                            <Typography style={styles.orderName}>
                                {selectedOrder.orderName}
                            </Typography>
                            <DeleteIcon color='primary' />
                        </IconButton>

                    </div>)}
            </div>
        </div>
    )
}

export default SelectedOrders