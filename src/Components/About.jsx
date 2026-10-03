// import React from 'react'

// function About() {
//   return (
//     <div>
//       <h1>About page</h1>
//     </div>
//   )
// }

// export default About




import React from "react";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          minHeight: "480px",
          display: "flex",
          alignItems: "center",
          padding: "70px 8%",
          background:
            "linear-gradient(90deg, #0b0b0b 20%, rgba(11,11,11,0.85) 50%, rgba(11,11,11,0.3)), url('https://image.tmdb.org/t/p/original/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "650px" }}>
          <p
            style={{
              color: "#e50914",
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            WELCOME TO MOVIX
          </p>

          <h1
            style={{
              fontSize: "55px",
              margin: "0 0 20px",
              lineHeight: "1.1",
            }}
          >
            Your World of Movies
          </h1>

          <p
            style={{
              color: "#ccc",
              fontSize: "17px",
              lineHeight: "1.8",
            }}
          >
            MOVIX is a modern movie platform designed for people who love
            discovering great movies, exploring new stories and keeping track
            of their favorite entertainment.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section
        style={{
          padding: "70px 8%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#e50914",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          ABOUT MOVIX
        </p>

        <h2
          style={{
            fontSize: "38px",
            margin: "12px 0 20px",
          }}
        >
          Everything You Love About Movies
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "auto",
            color: "#999",
            lineHeight: "1.8",
            fontSize: "16px",
          }}
        >
          Our goal is to provide a simple and enjoyable place where users can
          explore movies, discover trending titles and find detailed
          information about the movies they want to watch.
        </p>
      </section>

      {/* FEATURES */}

      <section
        style={{
          padding: "20px 8% 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {/* CARD 1 */}

          <div
            style={{
              background: "#151515",
              padding: "30px",
              borderRadius: "10px",
              border: "1px solid #222",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              🎬
            </div>

            <h3 style={{ fontSize: "21px", marginBottom: "12px" }}>
              Huge Collection
            </h3>

            <p
              style={{
                color: "#999",
                lineHeight: "1.7",
              }}
            >
              Explore movies from different genres, years and categories.
            </p>
          </div>

          {/* CARD 2 */}

          <div
            style={{
              background: "#151515",
              padding: "30px",
              borderRadius: "10px",
              border: "1px solid #222",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              🔥
            </div>

            <h3 style={{ fontSize: "21px", marginBottom: "12px" }}>
              Trending Movies
            </h3>

            <p
              style={{
                color: "#999",
                lineHeight: "1.7",
              }}
            >
              Discover popular and trending movies that everyone is watching.
            </p>
          </div>

          {/* CARD 3 */}

          <div
            style={{
              background: "#151515",
              padding: "30px",
              borderRadius: "10px",
              border: "1px solid #222",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              ⭐
            </div>

            <h3 style={{ fontSize: "21px", marginBottom: "12px" }}>
              Movie Ratings
            </h3>

            <p
              style={{
                color: "#999",
                lineHeight: "1.7",
              }}
            >
              Check movie ratings and find highly rated titles worth watching.
            </p>
          </div>

          {/* CARD 4 */}

          <div
            style={{
              background: "#151515",
              padding: "30px",
              borderRadius: "10px",
              border: "1px solid #222",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              ❤️
            </div>

            <h3 style={{ fontSize: "21px", marginBottom: "12px" }}>
              Easy to Explore
            </h3>

            <p
              style={{
                color: "#999",
                lineHeight: "1.7",
              }}
            >
              Find your favorite movies quickly with a clean and simple
              interface.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section
        style={{
          background: "#151515",
          padding: "55px 8%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "40px",
                color: "#e50914",
                marginBottom: "8px",
              }}
            >
              1000+
            </h2>

            <p style={{ color: "#999" }}>Movies</p>
          </div>

          <div>
            <h2
              style={{
                fontSize: "40px",
                color: "#e50914",
                marginBottom: "8px",
              }}
            >
              50+
            </h2>

            <p style={{ color: "#999" }}>Genres</p>
          </div>

          <div>
            <h2
              style={{
                fontSize: "40px",
                color: "#e50914",
                marginBottom: "8px",
              }}
            >
              24/7
            </h2>

            <p style={{ color: "#999" }}>Entertainment</p>
          </div>

          <div>
            <h2
              style={{
                fontSize: "40px",
                color: "#e50914",
                marginBottom: "8px",
              }}
            >
              100%
            </h2>

            <p style={{ color: "#999" }}>Movie Lovers</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#0b0b0b",
          color: "#666",
        }}
      >
        <h2
          style={{
            color: "#e50914",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          MOVIX
        </h2>

        <p>© 2026 MOVIX. Your ultimate movie destination.</p>
      </footer>
    </div>
  );
}

export default About;