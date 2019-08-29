import React from 'react';

export default (props) => {
  const post = props.element;

  return (
    <div className="shadow p-8 bg-white mr-4 rounded w-64 inline-block mt-4">
      <header className="h-40 bg-cover bg-center" style={{backgroundImage: `url(${post.thumbnail})`}}></header>
      <h4 className="font-bold h-40">{post.title}</h4>
      <div className="text-center">
        <span className="block  p-2 mt-2 truncate">
          <a className="btn" href={post.link} target='_blank'>Leer</a>
        </span>
      </div>
    </div>
  );
}