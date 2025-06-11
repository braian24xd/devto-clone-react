// src/components/PostCard.jsx
import React from "react";
import photoDefault from '../assets/img/users/default.png';
import iconSave from '../assets/img/icons/saved.png';

const PostCard = ({ post }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString();

  return (
    <article className="post">
      <div className="group__body">
        <section className="post__photo">
          <img src={photoDefault} />
        </section>
        <div className="group__items">
          <section className="post__header">
            <strong>{post.author?.username || "Usuario"}</strong>
            <small>{formattedDate}</small>
          </section>
          <section className="post__body">
            <section className="post__body--caption">
              {/* Simulamos título */}
              <p>{post.content.slice(0, 40)}...</p>
            </section>
            <section className="post__body--tags">
              <span>#webdev</span>
              <span>#learning</span>
              <span>#beginners</span>
              <span>#career</span>
            </section>
          </section>
          <section className="post__footer">
            <section className="post__footer--reactions">
              <span>❤️🦄😲👏🔥</span>
              <small>16 reactions</small>
              <small>💬 3 comments</small>
            </section>
            <section className="post__footer--info">
              <small>2 min read</small>
              <button className="img__btn--single">
                <img src={iconSave} alt="Guardar" />
              </button>
            </section>
          </section>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
