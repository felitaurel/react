import React from 'react'
import jordan1 from "../JordanRetro1.jpg"
import jordan4 from "../JordanRetro4.jpg"
import jordan11 from "../JordanRetro11.jpg"
const Productos = []

function GetData() {
   
  
  return new Promise((resolve, reject) => {

      

      const Deportivas = [
        {
          "id": "1",
          "nombre": "Nike Air Zoom Pegasus 38",
          "descripcion": "Las zapatillas Nike Air Zoom Pegasus 38 son ideales para correr. Cuentan con una amortiguación reactiva y una parte superior transpirable que te proporcionará comodidad y soporte en cada paso.",
          "img": "https://ejemplo.com/zapatillas/pegasus38.jpg",
          "precio": 129.99
        },
        {
          "id": "2",
          "nombre": "Adidas Ultraboost 21",
          "descripcion": "Las zapatillas Adidas Ultraboost 21 ofrecen un retorno de energía sin igual. Con su tecnología Boost y su diseño elegante, te brindarán una sensación de ligereza y comodidad en tus entrenamientos.",
          "img": "https://ejemplo.com/zapatillas/ultraboost21.jpg",
          "precio": 159.99
        },
        {
          "id": "3",
          "nombre": "New Balance Fresh Foam 1080v11",
          "descripcion": "Las zapatillas New Balance Fresh Foam 1080v11 están diseñadas para ofrecerte una carrera suave y cómoda. Su entresuela Fresh Foam proporciona una amortiguación excepcional y una sensación de respuesta en cada zancada.",
          "img": "https://ejemplo.com/zapatillas/freshfoam1080v11.jpg",
          "precio": 139.99
        }
      ]
        setTimeout(() => {
          const Urbanas = [
            {
              "id": "1",
              "nombre": "Jordan Retro 1",
              "descripcion": "Las zapatillas Jordan Retro 1 son un clásico del estilo urbano. Presentan un diseño icónico con colores llamativos y ofrecen comodidad durante todo el día.",
              "img": jordan1,
              "precio": 150.99
            },
            {
              "id": "2",
              "nombre": "Jordan Retro 4",
              "descripcion": "Las zapatillas Jordan Retro 4 son ideales para los amantes del estilo urbano. Con su diseño moderno y elegante, estas zapatillas destacan en cualquier ocasión.",
              "img": jordan4,
              "precio": 179.99
            },
            {
              "id": "3",
              "nombre": "Jordan Retro 11",
              "descripcion": "Las zapatillas Jordan Retro 11 combinan estilo y rendimiento. Con su parte superior de cuero premium y su amortiguación de primera calidad, son perfectas tanto para el día a día como para actividades deportivas.",
              "img": jordan11,
              "precio": 199.99
            },
            {
              "id": "4",
              "nombre": "Nike Air Force 1",
              "descripcion": "Las Nike Air Force 1 son unas icónicas zapatillas urbanas con un estilo clásico y versátil. Cuentan con una parte superior de cuero y una suela de caucho resistente.",
              "precio": 120.00,
              "imagen": "https://ejemplo.com/imagenes/air-force-1.jpg"
            },
            {
              "id": "5",
              "nombre": "Adidas Superstar",
              "descripcion": "Las Adidas Superstar son unas zapatillas urbanas con un diseño atemporal y reconocible. Presentan una puntera de goma y las famosas tres rayas de Adidas en los costados.",
              "precio": 90.00,
              "imagen": "https://ejemplo.com/imagenes/superstar.jpg"
            },
            {
              "id": "6",
              "nombre": "Vans Old Skool",
              "descripcion": "Las Vans Old Skool son unas zapatillas clásicas de skate que se han convertido en un ícono urbano. Tienen una parte superior de lona resistente y la distintiva banda lateral de Vans.",
              "precio": 75.00,
              "imagen": "https://ejemplo.com/imagenes/old-skool.jpg"
            },
            {
              "id": "7",
              "nombre": "Puma Suede Classic",
              "descripcion": "Las Puma Suede Classic son unas zapatillas de estilo retro con una parte superior de ante suave y una suela de goma que brinda comodidad y tracción.",
              "precio": 80.00,
              "imagen": "https://ejemplo.com/imagenes/suede-classic.jpg"
            }
          ]
          if (Urbanas.length === 0){
            reject("Error: no encontramos los articulos :(")
          }
            resolve(Urbanas)
        }, 2000)

        }
    )
  
}

export default GetData