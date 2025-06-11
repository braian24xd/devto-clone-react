import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import PostForm from "../components/PostForm";

const EditPost = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then((res) => {
      if (res) setPost(res);
      else navigate("/");
    });
  }, [id, navigate]);

  const handleUpdate = async (data) => {
    const res = await updatePost(id, data, token);
    if (res) {
      alert("Post actualizado correctamente.");
      navigate(`/post/${id}`);
    } else {
      alert("Hubo un error al actualizar el post.");
    }
  };

  return (
    <div className="edit-post-page">
      {post ? (
        <PostForm mode="edit" postData={post} onSubmit={handleUpdate} />
      ) : (
        <p>Cargando post...</p>
      )}
    </div>
  );
};

export default EditPost;