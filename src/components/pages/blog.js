import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navigation/navbar';



//crear una funcion para renderizar el blog
const Blog = () => {

    const [posts, setPosts] = useState([]); // Estado para almacenar las publicaciones
    const [loading, setLoading] = useState(true); // Estado para indicar si la solicitud está en curso
    const [error, setError] = useState(null);
   
    
// Estado para almacenar cualquier error

useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://cegusquiza.devcamp.space/portfolio/portfolio_blogs');
        setPosts(response.data.portfolio_blogs);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
        };
        fetchPosts();
            [0,3] ;  
    }, []);

        if (loading) {
        return <p>Cargando...</p>;
            }

        if (error) {
            return <p>Error: {error}</p>;
        }
    

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="blog-items">
            <h1>Blog</h1>
            <p>Listado Posts: Todas vuestras opiniones </p>
            <div className="blog-posts">
              
              {posts.map((post) => (
              <div key={post.id} className="blog-posts">
                <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <img src={post.featured_image_url } width={250} height={250}   />
                
              </div>
            ))}
          </div>
      </div>
    </div>
  </div>

    )
  }

   
  
  export default Blog;