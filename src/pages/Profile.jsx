import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllPosts } from "../services/api";
import PostCard from "../components/PostCard";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      const allPosts = await getAllPosts();
      const userPosts = allPosts.filter((post) => post.author === user.id);
      setMyPosts(userPosts);
    };
    if (user) fetchMyPosts();
  }, [user]);

  return (
    <div className="profile-page">
      <h1>Mis publicaciones</h1>
      {myPosts.length === 0 ? (
        <p>Aún no has publicado nada.</p>
      ) : (
        myPosts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default Profile;