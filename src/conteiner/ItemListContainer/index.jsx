import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import "./style.css";
import { db } from '../../firebase/config';

const ItemListContainer = ({greeting}) => {



  const [productos, setProductos] = useState([]);

const {categoryId} = useParams();


useEffect(()=>{

    (async ()=> {
        const obtenerProduct = new Promise ((accept, reject)=> {
            setTimeout(()=> {
            accept(productos)
            }, 3000);
        })
        
        try {
          

          const q = categoryId ? query(collection(db, "Products"), where("category", "==", categoryId)) : query(collection(db, "Products")) ;
          
          const querySnapshot = await getDocs(q);
          const productosFirebase = [];

          querySnapshot.forEach((doc) => {
            
            console.log(doc.id, " => ", doc.data());
            productosFirebase.push({id: doc.id, ...doc.data()});
          });

          console.log(productosFirebase);
          setProductos(productosFirebase);


        } catch (error) {
                console.log(error);
        }
        
    
            
    
        })()

},[categoryId])


  return (
    <div className='itemlist'>
        <h1>{greeting}</h1>
      
        <ItemList products={productos}/>
    </div>

  
  )
}

export default ItemListContainer
