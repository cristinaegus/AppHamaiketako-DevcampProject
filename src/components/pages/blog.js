import React from 'react';

import Navbar from '../navigation/navbar';

//crear una funcion para renderizar el blog
const Blog = () => {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="blog-items">
            <h1>Blog</h1>
            <p>En esta sección encontrará el blog de la aplicación</p>
            <div className="blog-posts">
              <div className="blog-post">
                <h2>Publicación 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                <button>Leer más</button>
              </div>
              <div className="blog-post">
                <h2>Publicación 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                <button>Leer más</button>
              </div>
              <div className="blog-post">
                <h2>Publicación 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                <button>Leer más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blog;


