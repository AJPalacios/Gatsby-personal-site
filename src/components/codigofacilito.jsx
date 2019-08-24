import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';


export default () => {
  const data = useStaticQuery(graphql`

{
  codigofacilitoJson {
    data {
      finished_courses {
        title
      }
    }
  }
}`)
  return(
    <section></section>
  );
}