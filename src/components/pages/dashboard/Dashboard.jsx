import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../firebaseConfig"
import { products } from "../../productsMock"



const Dashboard = () => {
    const rellenar = ()=>{

        products.forEach( (productos)=> {
            let refCollection = collection( db , "productos")
            addDoc(refCollection, productos )
        })

    }


  return (
    <div>
        <button onClick={rellenar}>Rellenar base de datos</button>
    </div>
  )
}

export default Dashboard


