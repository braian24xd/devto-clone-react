import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createPost } from "../services/api";
import PostForm from "../components/PostForm";

const CreatePost = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    const res = await createPost(data, token);
    if (res && res._id) {
      navigate(`/post/${res._id}`);
    } else {
      alert("No se pudo crear el post. Intenta de nuevo.");
    }
  };

  return (
    <div className="create-post-page">
      <PostForm mode="create" onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePost;