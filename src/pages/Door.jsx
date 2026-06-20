import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Door() {
  const [openAnim, setOpenAnim] = useState(false);
  const navigate = useNavigate();

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
      <p style={styles.hint}>Click the door to enter</p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px",
    overflow: "hidden",
  },

  scene: {
    transformStyle: "preserve-3d",
  },

  door: {
    width: "220px",
    height: "340px",
    backgroundColor: "#8B0000",
    border: "5px solid #300",
    boxShadow: "0 0 80px red",
    cursor: "pointer",
    transformOrigin: "left center",
    transition: "transform 1.2s ease, opacity 1.2s ease",
  },

  title: {
    color: "white",
    marginTop: "20px",
    letterSpacing: "5px",
  },

  hint: {
    color: "#777",
    fontSize: "14px",
  },
};
