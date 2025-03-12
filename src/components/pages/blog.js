import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []);

  if (loading) return <div className="text-center p-4">Cargando...</div>;
  if (error) return <div className="text-center p-4 text-danger">Error: {error}</div>;

  return (
    <div className="blog-items">
      <div className="blog-header">
        <h1>Blog de Pintxos</h1>
        <p>Descubre las opiniones de nuestros visitantes</p>
      </div>
      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <div className="card-container">
              {post.featured_image_url && (
                <img 
                  src={post.featured_image_url} 
                  className="card-img"
                  alt={post.title}
                />
              )}
              <h2 className="card-title">{post.title}</h2>
              <p className="card-description">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;