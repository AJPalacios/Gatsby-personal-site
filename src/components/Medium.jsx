import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import MediumPost from './MediumPost';


export default () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const data = sessionStorage.getItem('posts');

    if (data) {
      setPosts(JSON.parse(data));
    }

    let myPosts;

    async function getMediumPost (){
      const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40adanpalacios")
      myPosts = await response.json();
      sessionStorage.setItem('posts', JSON.stringify(myPosts.items));

      setPosts(myPosts.items)

    }


    getMediumPost();

  }, []);

  return (
    
      <Posts 
        card={MediumPost}
        data={posts} 
        title="Mis publicaciones en Medium"
      />    
  );
}