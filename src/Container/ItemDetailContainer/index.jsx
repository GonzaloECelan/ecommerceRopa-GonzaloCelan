import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import ItemDetail from '../../components/ItemDetail';


const ItemDetailContainer = () => {
  

    
  const [detalleproducto, setDetalleproducto] = useState({})
    
  const {productId} = useParams();


  useEffect(()=> {

    
    (async ()=> {


try {


const docRef = doc(db, "Products", productId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  setDetalleproducto({id: docSnap.id, ...docSnap.data()});
} else {
  
  console.log("No such document!");
}

        } catch (error) {
          console.log(error);
        }

      })()

  }, [productId])
  
    console.log(detalleproducto)



  return (
  
    <ItemDetail product={detalleproducto}/>
    
  )
}

export default ItemDetailContainer