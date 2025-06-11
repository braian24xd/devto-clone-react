import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPostById, deletePost } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const PostDetail = () => {
  const { id } = useParams();
  const { user, token } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id).then(setPost);
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm("¿Estás seguro de que deseas eliminar este post?");
    if (confirm) {
      const res = await deletePost(id, token);
      if (res) {
        alert("Post eliminado.");
        navigate("/");
      } else {
        alert("Error al eliminar el post.");
      }
    }
  };

  if (!post) return <main className="single__post"><p>Cargando post...</p></main>;

  const date = new Date(post.createdAt).toLocaleDateString();

  return (
    <main className="single__post">
      <article>
        <h1>{post.title}</h1>
        <p><i>Publicado el {date}</i></p>
        <div className="single__post--content">
          <p>{post.content}</p>
        </div>
        {post.tags?.length > 0 && (
          <p><strong>Tags:</strong> {post.tags.join(", ")}</p>
        )}
        {user?.id === post.author && (
          <div className="post-actions" style={{ marginTop: "1rem" }}>
            <Link to={`/edit-post/${post._id}`}>
              <button className="secondary__btn">Editar</button>
            </Link>
            <button onClick={handleDelete} className="primary__btn">Eliminar</button>
          </div>
        )}
      </article>
    </main>
  );
};

export default PostDetail;