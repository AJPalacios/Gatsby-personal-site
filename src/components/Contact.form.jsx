import React from 'react';

export default () => {
  return (
    <form className="mt-16 text-center" action="https://formspree.io/ajpalacios.sist@gmail.com" method="POST">
      <label htmlFor="contact-content" className="block text-gray-700 text-sm font-bold mb-2">Cuentame de esa idea que quieres hacer realidad <span>💡</span></label>
      <div className="flex shadow rounded bg-white border p-2 ">
        <textarea
          id="contact-content"
          name="contact-content"
          className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        >
        </textarea>
        <button className="btn ml-4" type="submit">Enviar</button>
      </div>
    </form>
  );
}
