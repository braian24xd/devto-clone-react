const API_BASE_URL = "http://localhost:5000"; // Cambia esto si estás en producción

// Obtener todos los posts
export async function getAllPosts() {
  try {
    const res = await fetch(`${API_BASE_URL}/posts`);
    if (!res.ok) throw new Error("Error al obtener los posts");
    const data = await res.json();

    // Asegúrate que sea un array
    return Array.isArray(data.posts) ? data.posts : [];
  } catch (error) {
    console.error("Error en getAllPosts:", error.message);
    return [];
  }
}

// Obtener un solo post por ID
export async function getPostById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!res.ok) throw new Error("Error al obtener el post");
    return await res.json();
  } catch (error) {
    console.error("Error en getPostById:", error.message);
    return null;
  }
}

// Crear un nuevo post (requiere token)
export async function createPost(data, token) {
  try {
    const res = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al crear el post");
    return await res.json();
  } catch (error) {
    console.error("Error en createPost:", error.message);
    return null;
  }
}

// Editar un post
export async function updatePost(id, data, token) {
  try {
    const res = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al actualizar el post");
    return await res.json();
  } catch (error) {
    console.error("Error en updatePost:", error.message);
    return null;
  }
}

// Eliminar un post
export async function deletePost(id, token) {
  try {
    const res = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Error al eliminar el post");
    return await res.json();
  } catch (error) {
    console.error("Error en deletePost:", error.message);
    return null;
  }
}

export async function loginUser(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al iniciar sesión");

    return await res.json();
  } catch (error) {
    console.error("Error en loginUser:", error.message);
    return null;
  }
}

export async function registerUser(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al registrar");

    return await res.json();
  } catch (error) {
    console.error("Error en registerUser:", error.message);
    return null;
  }
}