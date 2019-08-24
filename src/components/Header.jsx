import React from 'react';

import Cube from '../img/undraw_solution_mindset_34bi.svg'
import Form from './Contact.form';
import ContactForm from './Contact.form';

export default () => {
  return (
    <header className="bg-gray-300">
      <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="font-bold text-purple-700 text-6xl">¡Hola! soy Adan</h1>
            <p className="text-xl font-light">Creo aplicaciones web, utilizando tecnologias TOP, y tambien movil con Flutter y React Native 😉 y tambien enseño Programación.</p>
          </div> 
          <img src={Cube} alt="cube" style={{height: '300px'}}/>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </header>
    
  )
}