import React, { useState } from "react";

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body || !userId) {
      console.error("Por favor, completa todos los campos");
      return;
    }

    // Inicia el indicador de carga al enviar el formulario
    setIsSubmitting(true);

    const newPost = {
      title,
      body,
      userId: parseInt(userId, 10), // Convierte userId a número
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
      if (response.ok) {
        const data = await response.json();
        addPost(data);

        // Limpia los campos del formulario después de enviar
        setTitle("");
        setBody("");
        setUserId("");
        console.log("Nuevo post añadido con éxito:", data);
      } else {
        console.error("Error al añadir el nuevo post");
      }
    } catch (error) {
      console.log(error);
    } finally {
      // Después de enviar el formulario, actualiza el estado de isSubmitting a false
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      // Envía los datos del nuevo post a la API. Si la respuesta es correcta, añadiremos el nuevo post al estado de posts
    >
      <label htmlFor="title">Título:</label>
      <input
        id="title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="body">Contenido:</label>
      <textarea
        id="body"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <label htmlFor="userId">ID usuario:</label>
      <input
        type="number"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Crear post"}
      </button>
    </form>
  );
};

export default PostForm;
