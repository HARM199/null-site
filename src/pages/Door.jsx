import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Door() {
  const [openAnim, setOpenAnim] = useState(false);
  const [visitors, setVisitors] = useState("...");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/harm199/null-site")
      .then((res) => res.json())
      .then((data) => setVisitors(data.value))
      .catch(() => setVisitors("?"));
  }, []);

  const openDoor = () => {
    const audio = new Audio("/assets/door-open.mp3");
    audio.play();

    setOpenAnim(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div style={styles.container}>

      <div style={styles.counter}>
        👁 Visitors : {visitors}
      </div>

      <div style={styles.scene}>
        <div
          style={{
            ...styles.door,
            transform: openAnim
              ? "rotateY(-95deg) translateX(-40px)"
              : "rotateY(0deg)",
            opacity: openAnim ? 0 : 1,
          }}
          onClick={openDoor}
        />
      </div>

      <h1 style={styles.title}>HARM</h1>

      <p style={styles.hint}>
        Click the door to enter
      </p>

    </div>
  );
}

const styles = {
  container: {
    background:
      "radial-gradient(circle,#160000,#000)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px",
    overflow: "hidden",
  },

  counter: {
    color: "#00ffcc",
    fontSize: "20px",
    marginBottom: "40px",
    textShadow: "0 0 15px #00ffcc",
    letterSpacing: "2px",
  },

  scene: {
    transformStyle: "preserve-3d",
  },

  door: {
    width: "220px",
    height: "340px",
    background:
      "linear-gradient(145deg,#8B0000,#300)",
    border: "5px solid #300",
    boxShadow: "0 0 80px red",
    cursor: "pointer",
    transformOrigin: "left center",
    transition: "transform 1.2s ease, opacity 1.2s ease",
    borderRadius: "10px",
  },

  title: {
    color: "white",
    marginTop: "20px",
    letterSpacing: "7px",
    textShadow: "0 0 20px red",
  },

  hint: {
    color: "#888",
    fontSize: "14px",
  },
};
