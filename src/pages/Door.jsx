import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Door() {
  const [openAnim, setOpenAnim] = useState(false);
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
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

      {/* النجوم */}
      <div style={styles.stars}></div>

      {/* النص العلوي - يمكنك تغييره لأي شيء */}
      <div style={styles.eye}>
       Second rule :I have ADHD. I'm not crazy—I'm a genius 
      </div>

      {/* الساعة */}
      <div style={styles.clock}>
        {time}
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
        >
          <div style={styles.handle}></div>
        </div>
      </div>

      {/* العنوان */}
      <h1 style={styles.title}>HARM</h1>

      <p style={styles.hint}>
        CLICK THE DOOR TO ENTER
      </p>

    </div>
  );
}

const styles = {
  container: {
    background: "radial-gradient(circle,#180000,#000)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    perspective: "1200px",
  },

  stars: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(white 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    opacity: 0.05,
  },

  eye: {
    color: "#FFD700",
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "6px",
    textTransform: "uppercase",
    textShadow:
      "0 0 10px gold, 0 0 25px rgba(255,215,0,.8)",
    marginBottom: "25px",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "90%",
    wordBreak: "break-word",
  },

  clock: {
    color: "#00ffcc",
    fontSize: "16px",
    letterSpacing: "3px",
    textShadow: "0 0 15px #00ffcc",
    marginBottom: "25px",
    zIndex: 2,
  },

  scene: {
    transformStyle: "preserve-3d",
    zIndex: 2,
  },

  door: {
    width: "220px",
    height: "340px",
    background: "linear-gradient(145deg,#8B0000,#300000)",
    border: "4px solid #400",
    borderRadius: "12px",
    cursor: "pointer",
    transformOrigin: "left center",
    transition: "transform 1.2s ease, opacity 1.2s ease",
    boxShadow:
      "0 0 40px red,0 0 100px rgba(255,0,0,.8)",
    position: "relative",
  },

  handle: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    background: "#ccc",
    position: "absolute",
    right: "25px",
    top: "50%",
  },

  title: {
    color: "white",
    marginTop: "18px",
    marginBottom: "5px",
    letterSpacing: "10px",
    fontSize: "48px",
    textShadow:
      "0 0 20px red,0 0 50px red",
    zIndex: 2,
  },

  hint: {
    color: "#888",
    letterSpacing: "3px",
    fontSize: "13px",
    zIndex: 2,
  },
};
