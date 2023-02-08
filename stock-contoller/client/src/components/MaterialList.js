import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";


const styles = {
  root: {
    marginTop: "75px",
    width: "60%",
    marginRight: "auto",
    marginLeft:"auto",
    marginBottom:"75px"
  }
}

export default function MuiDataTable(props) {
  const { materials } = props
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("350px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);


  const columns = [
    { name: "Malzeme No", options: { setCellProps: () => ({ align: 'center' }) } },
    { name: "Siparişin Toplam ihtiyaç Miktarı", options: { setCellProps: () => ({ align: 'center' }) } },
    { name: "Satın alınacak miktar", options: { setCellProps: () => ({ align: 'center' }) } },
    { name: "Depodaki Miktarı", options: { setCellProps: () => ({ align: 'center' }) } },
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    setRowProps: row => {
      if (row[2] > 100) {
        return {
          style: { background: "#FF5733" }
        };
      }
    },
  };

  return (
    <div style={styles.root}>
      <MUIDataTable
        title={"Sipariş Listesi"}
        data={materials}
        columns={columns}
        options={options}
      />
    </div>
  );
}


