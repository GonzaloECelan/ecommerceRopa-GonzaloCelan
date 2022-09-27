import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../../contex/ShopProvides';
import { DataGrid } from '@mui/x-data-grid';


const Cart = ({}) => {


  const {cart, removeItem, clearCart} = useContext(Shop);



const columns = [
  { field: 'img', headerName: 'imagen', width: 400 },
  { field: 'tittle', headerName: 'Product', width: 250 },
  { field: 'quantity', headerName: 'Quantity', width: 80 },
  {
    field: 'remove',
    headerName: '',
    width: 90,
  },
 
];
const filas = [];
cart.forEach(item => {
  filas.push({
    id: item.id,
    img: item.img,
    tittle: item.tittle,
    quantity: item.quantity

  })

  
});

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
  );
}




export default Cart