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
            <p className="text-xl font-light">
              Estoy ubicado en 🇲🇽 desde 2016 tengo experiencia profesional como Full Stack Web Developer, 
              he pasado por diferentes tecnologias, como PHP, JavaScript y Java enfocado al desarrollo movil, 
              si les cuento algunos frameworks o librerias, conozco Laravel, React JS ❤️, Vue Js etc...</p>
          </div>
          <p className="text-xl font-light">
            Tengo un canal de YouTube 📹 en donde te enseño programaciòn 💻 y el maravilloso mundo de la web.
          </p>
          <img src={Cube} alt="cube" style={{height: '300px'}}/>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </header>

  )
}
