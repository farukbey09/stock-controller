import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const styles = {
  root: {
    marginTop: "150px",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  headCell: {
    fontWeight: "bolder"
  }
}


export default function MaterialList({ materials }) {

  return (
    <TableContainer component={Paper} style={styles.root}>
      <Table >
        <TableHead >
          <TableRow>
            <TableCell style={styles.headCell} align="center">
              Malzeme No
            </TableCell>
            <TableCell style={styles.headCell} align="center">
              Depodaki Miktarı
            </TableCell>
            <TableCell style={styles.headCell} align="center">
              İki Siparişin Toplam ihtiyaç Miktarı
            </TableCell>
            <TableCell style={styles.headCell} align="center">
              Satın alınacak miktar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {materials.map((material) => (
            Row(material, (material.requestedQuantity - material.warehouseQuantity))

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Row = (material, neededQuantity) => {
  if (!(neededQuantity <= 0))
    return (
      <TableRow hover key={material.materialId + Math.random(10)} style={{
        background: (neededQuantity) > 100 && '#F2917A'
      }}>
        <TableCell align="center">{material.materialNo}</TableCell>
        <TableCell align="center">{material.warehouseQuantity}</TableCell>
        <TableCell align="center">{material.requestedQuantity}</TableCell>
        <TableCell align="center"> {neededQuantity} </TableCell>
      </TableRow>
    )
}