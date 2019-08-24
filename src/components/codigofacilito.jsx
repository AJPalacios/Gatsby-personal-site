import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Posts from './Posts';
import Course from './Course';

export default () => {
  const data = useStaticQuery(graphql`

{
  codigofacilitoJson {
    data {
      finished_courses {
        title
        url
      }
    }
  }
}`)

console.log(data);

  return(
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <Posts 
            card={Course}
            data={data.codigofacilitoJson.data.finished_courses} 
            title="Mis cursos online en Código Facilito"
          />
        </div>
      </div>
    </section>
  );
}