import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/ShopProvides';
import { DataGrid } from '@mui/x-data-grid';
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";



const Cart = ({}) => {


const handleBuy = async ()=>{
  const importe = total();
  const orden = ordenGenerada("Gonzalo", "gon_celan@hotmail.com", 2646270548, cart, importe);
  console.log("compra usuario:", orden);
  

const docRef = await addDoc(collection(db, "Orders"),orden);

cart.forEach(async (productoEncarrito)=>{
  const productRef = doc(db, "Products", productoEncarrito.id);

  const productSnap = await getDoc(productRef)

  await updateDoc(productRef, {
    stock: productSnap.data().stock - productoEncarrito.quantity,
  });
})




  
alert("Gracias por su compra");

}

  const {cart, removeItem, clearCart, total} = useContext(Shop);



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

      <button onClick={handleBuy}>Confirmar compra</button>
    </div>
  );
}




export default Cart