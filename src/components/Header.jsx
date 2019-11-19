import React from 'react';

import Hero from '../img/hero.svg'
import ContactForm from './Contact.form';

export default () => {
  return (
    <header className="bg-gray-300">
      <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="font-bold text-purple-700 text-6xl">¡Hola! soy Adan 🤓 </h1>
            <p className="text-xl font-light text-justify mr-4">
              Estoy ubicado en Ciudad de Mèxico, desde 2016 tengo experiencia profesional como Full Stack Developer, he pasado por diferentes tecnologias, como PHP, JavaScript y Java enfocado al desarrollo movil, 
              algunas tecnologías que he utilizado se ecuentran 
              NodeJs, GraphQL, MongoDB, Docker, Laravel, React JS ❤️, Vue Js etc...
            </p>
          </div>
          <img src={Hero} alt="cube" style={{height: '300px'}}/>
        </div>
      </div>
    </header>

  )
}
