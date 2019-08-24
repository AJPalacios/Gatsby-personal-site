import React from 'react';

export default ({ repo }) => {
  return (
    <li className="flex items-center mt-3">
      <div className="w-10/12 overflow-x-hidden">
        <h4 className="text-pink-600 font-bold truncate">{repo.name}</h4>
        <p className="text-sm text-gray-800 overflow-y-hidden" style={{height: "1.5em"}}>{repo.description}</p>
      </div>
      <div className="flex-1 text-right">
        <a href={repo.html_url} target='_blank' rel='noopener noreferer'>Ver</a>
      </div>
      
    </li>
  )
}