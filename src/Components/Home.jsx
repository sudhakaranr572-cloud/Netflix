import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const movies = [
    {
      title: "The Dark Knight",
      image:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      title: "Interstellar",
      image:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "Inception",
      image:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
      title: "Avengers",
      image:
        "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    },
    {
      title: "Spider-Man",
      image:
        "https://i.etsystatic.com/38927023/r/il/fffd67/4864726393/il_1080xN.4864726393_60rs.jpg",
    },
  ];

  return (
    <div className="home">

      {/* Navbar */}
      {/* <nav className="navbar">
        <h2 className="logo">MOVIX</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
        </div>

        <button className="login-btn">Sign In</button>
      </nav> */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="small-title">#1 TRENDING MOVIE</p>

          <h1>THE DARK KNIGHT</h1>

          <p className="description">
            A legendary hero rises to protect the city from a dangerous
            criminal mastermind. Experience an unforgettable story of
            courage, mystery and justice.
          </p>

          <div className="buttons">
            <button className="watch-btn">▶ Watch Now</button>
            <button className="info-btn">ⓘ More Info</button>
          </div>
        </div>
      </section>

      {/* Trending Movies */}
      <section className="movies-section">
        <div className="section-header">
          <h2>Trending Now</h2>
          <span>View All →</span>
        </div>

        <div className="movie-container">
          {movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} />

              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>⭐ 8.{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Browse Categories</h2>

        <div className="category-container">
          <div className="category">Action</div>
          <div className="category">Adventure</div>
          <div className="category">Comedy</div>
          <div className="category">Drama</div>
          <div className="category">Sci-Fi</div>
          <div className="category">Thriller</div>
        </div>
      </section>

    </div>
  );
}

export default Home;