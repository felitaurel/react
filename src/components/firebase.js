import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";
import jordan1 from "../JordanRetro1.jpg"
import jordan4 from "../JordanRetro4.jpg"
import jordan11 from "../JordanRetro11.jpg"
import ultraboost from "../adidasUltraboost.jpg"
import freshfoam from "../NewBalanceFreshFoam.jpg"

const firebaseConfig = {
  apiKey: "AIzaSyCjpUF4BipG3ZoLfTsV6Z79C0OAn17sZyc",
  authDomain: "proyecto-93e30.firebaseapp.com",
  projectId: "proyecto-93e30",
  storageBucket: "proyecto-93e30.appspot.com",
  messagingSenderId: "950276650757",
  appId: "1:950276650757:web:cce2916cb74221136fa96c",
  measurementId: "G-BQ1LXRY3MN"
};


const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

// 2 Implementar async function getData()

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
    
  );
  return docsData;
}

//  3.Implementar getProductData
async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

// * 4 Implementar getCategoryData
async function getCategoryData(categoryId) {
  const productsRef = collection(db, "products");
  // cambiamos esto
  const q = query(productsRef, where("category", "==", categoryId));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

async function _exportProductsWithBatch(){
    const productos = [{
        "id": 2,
        "nombre": "Adidas Ultraboost 21",
        "descripcion": "Las zapatillas Adidas Ultraboost 21 ofrecen un retorno de energía sin igual. Con su tecnología Boost y su diseño elegante, te brindarán una sensación de ligereza y comodidad en tus entrenamientos.",
        "img": ultraboost,
        "precio": 159.99,
        "category": "running",
        "stock": 5
      },
      {
        "id": 3,
        "nombre": "New Balance Fresh Foam 1080v11",
        "descripcion": "Las zapatillas New Balance Fresh Foam 1080v11 están diseñadas para ofrecerte una carrera suave y cómoda. Su entresuela Fresh Foam proporciona una amortiguación excepcional y una sensación de respuesta en cada zancada.",
        "img": freshfoam,
        "precio": 139.99,
        "category": "running",
        "stock": 5
      },{
        "id": 4,
        "nombre": "Jordan Retro 1",
        "descripcion": "Las zapatillas Jordan Retro 1 son un clásico del estilo urbano. Presentan un diseño icónico con colores llamativos y ofrecen comodidad durante todo el día.",
        "img": jordan1,
        "precio": 150.99,
        "category": "urbano",
        "stock": 5
      },
      {
        "id": 5,
        "nombre": "Jordan Retro 4",
        "descripcion": "Las zapatillas Jordan Retro 4 son ideales para los amantes del estilo urbano. Con su diseño moderno y elegante, estas zapatillas destacan en cualquier ocasión.",
        "img": jordan4,
        "precio": 179.99,
        "category": "urbano",
        "stock": 5
      },
      {
        "id": 6,
        "nombre": "Jordan Retro 11",
        "descripcion": "Las zapatillas Jordan Retro 11 combinan estilo y rendimiento. Con su parte superior de cuero premium y su amortiguación de primera calidad, son perfectas tanto para el día a día como para actividades deportivas.",
        "img": jordan11,
        "precio": 199.99,
        "category": "urbano",
        "stock": 5
      }]; // aca poner todos los datos que ya habia en getdata

    const batch = writeBatch(db); 

  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `1${newId}`)
    batch.set(newDoc, producto);    
  })

  const data = await batch.commit()  
  
}

export { getData, getOrder, getProductData, getCategoryData, createOrder, _exportProductsWithBatch};