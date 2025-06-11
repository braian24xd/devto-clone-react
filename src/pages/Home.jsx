import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import PostCard from "../components/PostCard";
import Header from '../components/Header';
import { getAllPosts } from "../services/api";
import { filterPostsByDate, searchPostsByContent } from "../utils/filters";
import banner from '../assets/img/banner.png';
import challenge1 from '../assets/img/challenge-article1.webp';
import challenge2 from '../assets/img/challenge-article2.webp';
import imgPost from '../assets/img/img-post.webp';
import photoTim from '../assets/img/users/tim_lorent.webp';
import iconHome from '../assets/img/icons/icons8-home-48.png';
import iconDev from '../assets/img/icons/icons8-dev-48.png';
import iconPodcast from '../assets/img/icons/icons8-podcast-48.png';
import iconVideo from '../assets/img/icons/icons8-camera-automation-48.png';
import iconTags from '../assets/img/icons/icons8-tags-64.png';
import iconDevHelp from '../assets/img/icons/icons8-idea-64.png';
import iconForemShop from '../assets/img/icons/icons8-shop-48.png';
import iconAdvertise from '../assets/img/icons/icons8-heart-48.png';
import iconDevChallenges from '../assets/img/icons/icons8-challenges-64.png';
import iconDevShowcases from '../assets/img/icons/icons8-sparkler-48.png';
import iconAbout from '../assets/img/icons/icons8-smiling-face-with-sunglasses-48.png';
import iconContact from '../assets/img/icons/icons8-call-me-hand-48.png';
import iconPostgres from '../assets/img/icons/icons8-postgresql-48.png';
import iconSoftwareComparisons from '../assets/img/icons/icons8-thinking-face-48.png';
import iconCodeofConduct from '../assets/img/icons/icons8-like-48.png';
import iconPrivacyPolicy from '../assets/img/icons/icons8-nerd-face-48.png';
import iconTerms from '../assets/img/icons/icons8-eyes-48.png';
import iconX from '../assets/img/icons/x.png';
import iconFacebook from '../assets/img/icons/facebook.png';
import iconGithub from '../assets/img/icons/github.png';
import iconInstagram from '../assets/img/icons/instagram.png';
import iconTwitch from '../assets/img/icons/twitch.png';
import iconMastodon from '../assets/img/icons/mastodon.png';
import iconBlueSKY from '../assets/img/icons/bluesky.png';
import iconSave from '../assets/img/icons/saved.png';

const Home = () => {
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("all");

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
      setFilteredPosts(data);
    });
  }, []);

  useEffect(() => {
    let result = [...posts];

    if (search) {
      result = searchPostsByContent(result, search);
    }

    if (dateFilter !== "all") {
      result = filterPostsByDate(result, dateFilter);
    }
    setFilteredPosts(result);
  }, [search, dateFilter, posts]);

  const handleDateFilter = (value) => setDateFilter(value);

  return (
    <>
      <Header />
      <div className="container">
        <aside className="links">
          <section className="links__presentation">
            <h2 className="links__presentation--title">
              DEV Community is a community of 2,986,887 amazing developers
            </h2>
            <p className="links__presentation--caption">
              We're a place where coders share, stay up-to-date and grow their careers.
            </p>
            <button className="primary__btn">Create account</button>
            <button className="secondary__btn">Log in</button>
          </section>
          <section className="links__navigation">
            <nav>
              <button className="img__btn">
                <img src={iconHome} alt="" />
                <span>Home</span>
              </button>
              <button className="img__btn">
                <img src={iconDev} alt="" />
                <span>DEV ++</span>
              </button>
              <button className="img__btn">
                <img src={iconPodcast} alt="" />
                <span>Podcast</span>
              </button>
              <button className="img__btn">
                <img src={iconVideo} alt="" />
                <span>Videos</span>
              </button>
              <button className="img__btn">
                <img src={iconTags} alt="" />
                <span>Tags</span>
              </button>
              <button className="img__btn">
                <img src={iconDevHelp} alt="" />
                <span>DEV Help</span>
              </button>
              <button className="img__btn">
                <img src={iconForemShop} alt="" />
                <span>Forem Shop</span>
              </button>
              <button className="img__btn">
                <img src={iconAdvertise} alt="" />
                <span>Advertise on DEV</span>
              </button>
              <button className="img__btn">
                <img src={iconDevChallenges} alt="" />
                <span>DEV Challenges</span>
              </button>
              <button className="img__btn">
                <img src={iconDevShowcases} alt="" />
                <span>DEV Showcase</span>
              </button>
              <button className="img__btn">
                <img src={iconAbout} alt="" />
                <span>About</span>
              </button>
              <button className="img__btn">
                <img src={iconContact} alt="" />
                <span>Contact</span>
              </button>
              <button className="img__btn">
                <img src={iconPostgres} alt="" />
                <span>Free Postgres Database</span>
              </button>
              <button className="img__btn">
                <img src={iconSoftwareComparisons} alt="" />
                <span>Software Comparisons</span>
              </button>
            </nav>
            <h3>Other</h3>
            <nav>
              <button className="img__btn">
                <img src={iconCodeofConduct} alt="" />
                <span>Code of Conduct</span>
              </button>
              <button className="img__btn">
                <img src={iconPrivacyPolicy} alt="" />
                <span>Privacy Policy</span>
              </button>
              <button className="img__btn">
                <img src={iconTerms} alt="" />
                <span>Terms of use</span>
              </button>
            </nav>
            <section className="links__navigation--social">
              <button className="img__btn--single">
                <img src={iconX} alt="" />
              </button>
              <button className="img__btn--single">
                <img src={iconFacebook} alt="" />
              </button>
              <button className="img__btn--single">
                <img src={iconGithub} alt="" />
              </button>
              <button className="img__btn--single">
                <img src={iconInstagram} alt="" />
              </button>
              <button className="img__btn--single">
                <img src={iconTwitch} alt="" />
              </button>
              <button className="img__btn--single">
                <img src={iconMastodon} alt="" />
              </button>
              <button className="img__btn--single">
                <img src={iconBlueSKY} alt="" />
              </button>
            </section>
            <h3>Popular Tags</h3>
            <nav>
              <a className="tag" href="#">#webdev</a>
              <a className="tag" href="#">#programming</a>
              <a className="tag" href="#">#javascript</a>
              <a className="tag" href="#">#beginners</a>
              <a className="tag" href="#">#ai</a>
              <a className="tag" href="#">#tutorial</a>
              <a className="tag" href="#">#productivity</a>
            </nav>
          </section>
        </aside>
        <main className="main">
          <section className="main__order">
            <button className="secondary__btn" onClick={() => handleDateFilter("all")}>All</button>
            <button className="secondary__btn" onClick={() => handleDateFilter("week")}>Week</button>
            <button className="secondary__btn" onClick={() => handleDateFilter("month")}>Month</button>
          </section>
          <section className="main__banner">
            <small className="main__banner--caption">👋 DEV Challenges</small>
            <img className="main__banner--img" src={banner} alt="banner" />
            <h2 className="main__banner--title">Build an AI agent or system powered by real-time web data</h2>
          </section>
          {user && (
            <section className="post__form" id="formPost">
              <img className="post__form--photo" src="./img/users/default.png" alt="" />
              <form action="">
                <textarea
                  className="post__form--content"
                  name="content"
                  id="content"
                  placeholder="¿Qué estás pensando?"
                ></textarea>
                <button className="primary__btn" type="submit">Publicar</button>
              </form>
            </section>
          )}
          <section className="main__posts">
            <article className="post">
              <img className="post__img" src={imgPost} alt="" />
              <div className="group__body">
                <section className="post__photo">
                  <img src={photoTim} alt="" />
                </section>
                <div className="group__items">
                  <section className="post__header">
                    <strong>Tim Lorent</strong>
                    <small>May 14</small>
                  </section>
                  <section className="post__body">
                    <section className="post__body--caption">
                      <p>Free Developer Growth Coaching (Yes, Really)</p>
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
                        <img src={iconSave} alt="" />
                      </button>
                    </section>
                  </section>
                </div>
              </div>
            </article>
            {Array.isArray(filteredPosts) && filteredPosts.length > 0 ? (
              filteredPosts.map((post) => <PostCard key={post._id} post={post} />)
            ) : (
              <p>No se encontraron publicaciones.</p>
            )}
          </section>
        </main>
        <aside className="social">
          <section className="social__challenges">
            <small className="social__challenges--caption">
              👋 What's happening this week
            </small>
            <h2 className="social__challenges--title">Challenges 🤗</h2>
            <article className="challenge__article">
              <small className="challenge__article--title">Just Launched 🚀</small>
              <img className="challenge__article--img" src={challenge1} alt="" />
              <a className="challenge__article--url" href="#">Alibaba Cloud Web Game Challenge</a>
              <p className="challenge__article--description">Get your submissions in early!</p>
            </article>
            <article className="challenge__article">
              <small className="challenge__article--title">Happening Now ✨</small>
              <img className="challenge__article--img" src={challenge2} alt="" />
              <a className="challenge__article--url" href="#">Pulumi Deploy and Document Challenge</a>
              <p className="challenge__article--description">$3,000 prize pool!</p>
            </article>
            <strong>Have a great week ❤️</strong>
          </section>
          <section className="social__discuss">
            <h2 className="social__discuss--title">
              #discuss
            </h2>
            <small className="social__discuss--caption">
              Discussion threads targeting the whole community
            </small>
            <section className="discuss__item">
              <p className="discuss__item--title">Meme Monday</p>
              <small className="discuss__item--comments">98 comments</small>
            </section>
            <section className="discuss__item">
              <p className="discuss__item--title">
                Seeing is Believing: Mitigating Hallucination in Large VisionLanguage Models via CLIP-Guided
              </p>
              <span className="indicator">New</span>
            </section>
            <section className="discuss__item">
              <p className="discuss__item--title">Why Code in Dark Mode?</p>
              <small className="discuss__item--comments">28 comments</small>
            </section>
            <section className="discuss__item">
              <p className="discuss__item--title">
                Ever Wondered What Happens When You Miss a Deadline?
              </p>
              <span className="indicator">New</span>
            </section>
            <section className="discuss__item">
              <p className="discuss__item--title">
                System Design questions
              </p>
              <span className="indicator">New</span>
            </section>
          </section>
          <section className="social__watercooler">
            <h2 className="social__discuss--title">
              #watercooler
            </h2>
            <small className="social__discuss--caption">
              Light, and off-topic conversation.
            </small>
            <section className="discuss__item">
              <p className="discuss__item--title">Meme Monday</p>
              <small className="discuss__item--comments">98 comments</small>
            </section>
            <section className="discuss__item">
              <p className="discuss__item--title">
                Music Monday — What are you listening to? (Anything Goes Edition 👐)
              </p>
              <small className="discuss__item--comments">36 comments</small>
            </section>
            <section className="discuss__item">
              <p className="discuss__item--title">
                Sensible Chuckle: The First `git commit` Message Of The Git Version Control System
              </p>
              <span className="indicator">New</span>
            </section>
            <section className="discuss__item">
              <p className="discuss__item--title">
                Host your own Minecraft Server on Linux in 10 Mins
              </p>
              <small className="discuss__item--comments">2 comments</small>
            </section>
            <section className="discuss__item">
              <p className="discuss__item--title">
                They say my job won't survive...
              </p>
              <small className="discuss__item--comments">9 comments</small>
            </section>
          </section>
        </aside>
      </div>
    </>
  );
};

export default Home;