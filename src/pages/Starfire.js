import starfireImg from "../assets/images/starfire2.jpg";

function Starfire() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold" style={{ color: "#e00077" }}>
          Starfire
        </h1>
        <p className="fst-italic text-muted">
          “On Tamaran we say: the most beautiful flowers bloom after the storm.”
        </p>
      </div>

      
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4">
          <img
            src={starfireImg}
            alt="Starfire"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h3 style={{ color: "#6ec8e0" }}>About</h3>
          <p className="lead">
            Princess Koriand’r of Tamaran, better known as Starfire, is the
            heart of the Teen Titans. She is known for her compassion,
            curiosity about Earth, and fierce loyalty to her friends.  
          </p>
          <p>
            Despite her royal upbringing, she embraces her role as a hero,
            balancing incredible power with a genuine kindness that inspires
            her team. Her cheerful outlook often hides the struggles of her
            exile and responsibilities as a princess.
          </p>
        </div>
      </div>

      
      <div className="row mt-5">
        <div className="col-md-6">
          <h3 style={{ color: "#62479e" }}>Powers</h3>
          <ul className="list-group">
            <li className="list-group-item">Starbolts (energy projection)</li>
            <li className="list-group-item">Flight at supersonic speeds</li>
            <li className="list-group-item">Energy absorption</li>
            <li className="list-group-item">Enhanced strength & durability</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3 style={{ color: "#42cb45" }}>Skills</h3>
          <ul className="list-group">
            <li className="list-group-item">Multilingual (Tamaranian, English)</li>
            <li className="list-group-item">Diplomatic leadership</li>
            <li className="list-group-item">Martial arts & combat training</li>
            <li className="list-group-item">Strong emotional intelligence</li>
          </ul>
        </div>
      </div>

      
      <div className="mt-5 p-4 rounded shadow mb-4" style={{ backgroundColor: "#373434ff", color: "white" }}>
        <h4 style={{ color: "#ef1717" }}>Fun Fact</h4>
        <p>
          Starfire learns languages by physically kissing someone — which is
          how she first learned English after meeting Robin.
        </p>
      </div>
    </div>
  );
}

export default Starfire;
