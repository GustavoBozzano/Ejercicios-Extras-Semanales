import './App.css';
import { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import svg from './svg-loaders/audio.svg';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  // Carga aquí los posts con un useEffect...
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        // Después de cargar los posts, actualiza el estado de isLoadingPosts a false
        setIsLoadingPosts(false);
      }
    };

    getData();
  }, []);

  const addPost = (newPost) => {
    // Agrega el nuevo post al estado de posts
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <h1>Ejercicio Posts</h1>

      {isLoadingPosts ? (
        // Muestra el indicador de carga mientras se están cargando los posts
        <img src={svg} alt="Cargando..." />
      ) : (
        <PostForm addPost={addPost} />
      )}

      {posts.length > 0 && <PostList posts={posts} />}

      {posts.length === 0 && <p>No hay posts todavía</p>}
    </>
  );
}

export default App;
