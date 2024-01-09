# next-init
Base de un proyecto next (Componentes, rutas, test y animaciones)

## Iniciar proyecto

npx create-next-app@latest

``✔ What is your project named? … next-init``

``✔ Would you like to use TypeScript? … No / Yes``

``✔ Would you like to use ESLint? … No / Yes``

``✔ Would you like to use Tailwind CSS? … No / Yes``

``✔ Would you like to use `src/` directory? … No / Yes``

``✔ Would you like to use App Router? (recommended) … No / Yes``

``✔ Would you like to customize the default import alias (@/*)? … No / Yes``

cd a next-init
npx run dev 
http://localhost:3001

## Componentes y ruteo con variables en la URL

Importo Link donde quiera crear un link: import Link from 'next/link'
Creo link a página: ``<Link href="/invitations">Invitaciones</Link>``
Creo componentes siguiendo la estrcutura de carperta con layout y page (Ver code)
Un componente con link a otros componentes que le pasa una url dinámicamente (Fijate que hay una carpeta que se llama [id]) 

Más info en: https://nextjs.org/docs/app/building-your-application/routing

## Componente con animación

``npm install framer-motion``

``import { motion } from "framer-motion"``

Crear un componete llamado Animation y animarlo. Importante para que un componente de next utilice useState debe de poner el siguiente string: 'use client';

Más info: https://www.framer.com/motion/introduction/

## Test de componente de React

``npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom``

``npm init jest@latest``

``✔ Would you like to use Typescript for the configuration file? … no``
``✔ Choose the test environment that will be used for testing › jsdom (browser-like)``
``✔ Do you want Jest to add coverage reports? … yes``
``✔ Which provider should be used to instrument code for coverage? › v8``
``✔ Automatically clear mock calls, instances, contexts and results before every test? … no``

Más info: https://nextjs.org/docs/app/building-your-application/testing/jest

``npm run test``

Si falla, copia los archivos jest.config.js y jest.setup.js del repo y añadelos a tu proyecto

Más info:  https://github.com/vercel/next.js/tree/canary/examples/with-jest

## Ejercicio

Intenta pasar el test prueba.test.js



