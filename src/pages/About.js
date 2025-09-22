import React from "react";
import { useNavigate } from "react-router-dom";
import starfireImg from "../assets/images/star.jpeg";
import robinImg from "../assets/images/robin.jpeg";

const characters = [
  {
    name: "Robin",
    image: robinImg,
    path: "/robin",
    color: "#ef1717"
  },
  {
    name: "Starfire",
    image: starfireImg,
    path: "/starfire",
    color: "#e00077"
  },
  //   {
  //     name: "Raven",
  //     image: ravenImg,
  //     path: "/raven",
  //     color: "#6a4c93"
  //   },
  //   {
  //     name: "Beast Boy",
  //     image: beastBoyImg,
  //     path: "/beastboy",
  //     color: "#2a9d8f"
  //   },
  //   {
  //     name: "Cyborg",
  //     image: cyborgImg,
  //     path: "/cyborg",
  //     color: "#1d3557"
  //   }
];

function About() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1
        className="text-center mb-4"
        style={{ fontWeight: "bold", color: "#fffcfcff" }}
      >
        Meet the Teen Titans
      </h1>
      <p className="lead text-center mb-5" style={{ maxWidth: "800px", margin: "0 auto" }}>
        Welcome to Titans Tower! We’re the Teen Titans, a team of young heroes
        who’ve come together to protect the world and have each other’s backs.
        From battling interdimensional demons to stopping everyday crime, we
        face it all with courage, teamwork, and a little bit of chaos. Robin
        keeps us sharp, Starfire brings the heart, Raven holds the mystic edge,
        Beast Boy lightens the mood, and Cyborg powers us forward. We’re more
        than just a superhero squad; we’re a family. <strong>Titans, go!</strong>
      </p>

      <div className="row justify-content-center">
        {characters.map((char) => (
          <div key={char.name} className="col-md-6 col-lg-4 mb-4 d-flex">
            <div
              className="card h-100 shadow-lg border-0 overflow-hidden"
              style={{
                borderRadius: "15px",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
              onClick={() => navigate(char.path)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="position-relative">
                <img
                  src={char.image}
                  className="card-img-top"
                  alt={char.name}
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    filter: "brightness(85%)"
                  }}
                />
                <div
                  className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    top: 0,
                    left: 0,
                    background: "rgba(0,0,0,0.4)",
                    color: "white",
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                >
                  <h4 style={{ fontWeight: "bold", color: char.color }}>{char.name}</h4>
                  <p className="mb-0">Click to view profile</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
