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

      {/* خلفية النجوم */}
      <div style={styles.stars}></div>

      {/* عداد الزوار */}
      <div style={styles.counter}>
        👁 Visitors : {visitors}
      </div>

      {/* الباب */}
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

      {/* العنوان */}
      <h1 style={styles.title}>HARM</h1>

      {/* النص */}
      <p style={styles.hint}>
        Click the door to enter
      </p>

      {/* الساعة */}
      <div style={styles.clock}>
        {new Date().toLocaleTimeString()}
      </div>

    </div>
  );
}

const styles = {
  container: {
    background:
      "radial-gradient(circle at center,#180000,#000)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px",
    overflow: "hidden",
    position: "relative",
  },

  stars: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(white 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    opacity: "0.06",
  },

  counter: {
    color: "#00ffee",
    fontSize: "18px",
    marginBottom: "35px",
    letterSpacing: "3px",
    textShadow: "0 0 20px #00ffee",
    zIndex: 2,
  },

  scene: {
    transformStyle: "preserve-3d",
    zIndex: 2,
  },

  door: {
    width: "220px",
    height: "340px",
    background:
      "linear-gradient(145deg,#9b0000,#220000)",
    border: "4px solid #300",
    borderRadius: "12px",
    cursor: "pointer",
    transformOrigin: "left center",
    transition: "transform 1.2s ease, opacity 1.2s ease",
    boxShadow:
      "0 0 30px red,0 0 70px rgba(255,0,0,.7)",
  },

  title: {
    color: "white",
    marginTop: "25px",
    letterSpacing: "10px",
    textShadow:
      "0 0 20px red,0 0 50px red",
    zIndex: 2,
  },

  hint: {
    color: "#999",
    fontSize: "14px",
    letterSpacing: "2px",
    zIndex: 2,
  },

  clock: {
    marginTop: "20px",
    color: "#00ff99",
    textShadow: "0 0 15px #00ff99",
    fontSize: "15px",
    zIndex: 2,
  },
};
