import { useState, useEffect } from "react";

const PostForm = ({ onSubmit, mode = "create", postData = {} }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
    if (mode === "edit" && postData) {
      setForm({
        title: postData.title || "",
        content: postData.content || "",
        tags: postData.tags?.join(", ") || "", // si los tags vienen en array
      });
    }
  }, [mode, postData]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: form.title.trim(),
      content: form.content.trim(),
      tags: form.tags.split(",").map((tag) => tag.trim()),
    };

    onSubmit(data); // función pasada como prop (crea o edita)
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>{mode === "edit" ? "Editar Post" : "Crear nuevo Post"}</h2>

      <label htmlFor="title">Título</label>
      <input
        type="text"
        id="title"
        name="title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="content">Contenido</label>
      <textarea
        id="content"
        name="content"
        value={form.content}
        onChange={handleChange}
        rows="8"
        required
      />

      <label htmlFor="tags">Tags (separados por coma)</label>
      <input
        type="text"
        id="tags"
        name="tags"
        value={form.tags}
        onChange={handleChange}
      />

      <button type="submit" className="primary__btn">
        {mode === "edit" ? "Actualizar" : "Publicar"}
      </button>
    </form>
  );
};

export default PostForm;