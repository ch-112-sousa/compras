import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'



async function fetchData() {
  const querySnapshot = await getDocs(collection(db, 'unidade-medida'));
  querySnapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}