import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data";

export default function Dashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={styles.container}>

      {/* Animated background grid */}
      <div style={styles.gridBg}></div>

      {/* Floating Menu */}
      <div style={styles.floatingMenu}>

        {menuOpen && (
          <div style={styles.linksBox}>

            <a href="https://t.me/HARM_1996" target="_blank" rel="noreferrer" style={styles.circleBtn}>✈️</a>
            <a href="https://youtube.com/@harm1903?si=QlpKuDppcsCVT9Qw" target="_blank" rel="noreferrer" style={styles.circleBtn}>▶️</a>
            <a href="https://t.me/+U_a4R23Ux9w0OTU0" target="_blank" rel="noreferrer" style={styles.circleBtn}>💬</a>
            <a href="https://mega.nz/file/cFdUCI7Z#-yAs05pxEkN73OCY9CFrh1BP7kBrWOmY7laTzP0fhLI" target="_blank" rel="noreferrer" style={styles.circleBtn}>📱</a>
            <a href="#" style={styles.circleBtn}>💰</a>

          </div>
        )}

        <button
          style={styles.mainBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Title */}
      <h1 style={styles.title}>
        H.A.R.M // SYSTEM DASHBOARD
      </h1>

      {/* Grid */}
      <div style={styles.grid}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            style={{
              ...styles.card,
              opacity: cat.locked ? 0.4 : 1,
              filter: cat.locked ? "grayscale(1)" : "none",
            }}
            onClick={() => {
              if (!cat.locked) navigate(`/category/${cat.id}`);
            }}
          >
            <div style={styles.glowLine}></div>

            <div style={styles.icon}>{cat.icon}</div>
            <h3 style={styles.cardTitle}>{cat.title}</h3>

            {cat.locked && (
              <div style={styles.comingSoon}>LOCKED NODE</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {

  container: {
    minHeight: "100vh",
    color: "#00ffe1",
    padding: "20px",
    background: "radial-gradient(circle at top,#0a0a0a,#000)",
    fontFamily: "Arial",
    overflow: "hidden",
    position: "relative",
  },

  /* moving grid background */
  gridBg: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(0,255,200,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.05) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    animation: "moveGrid 10s linear infinite",
    zIndex: 0,
  },

  floatingMenu: {
    position: "fixed",
    top: "25px",
    right: "25px",
    zIndex: 999,
  },

  linksBox: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "15px",
  },

  mainBtn: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "1px solid #00ffe1",
    background: "rgba(0,255,225,0.1)",
    color: "#00ffe1",
    fontSize: "28px",
    cursor: "pointer",
    boxShadow: "0 0 25px #00ffe1",
    backdropFilter: "blur(10px)",
  },

  circleBtn: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.8)",
    border: "1px solid #00ffe1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "22px",
    boxShadow: "0 0 15px #00ffe1",
    transition: "0.2s",
  },

  title: {
    textAlign: "center",
    marginBottom: "40px",
    letterSpacing: "6px",
    color: "#00ffe1",
    textShadow: "0 0 20px #00ffe1",
    zIndex: 1,
    position: "relative",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "20px",
    position: "relative",
    zIndex: 1,
  },

  card: {
    background: "rgba(0,0,0,0.7)",
    border: "1px solid rgba(0,255,225,0.3)",
    borderRadius: "15px",
    textAlign: "center",
    padding: "30px 15px",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0,255,225,0.2)",
    transition: "0.3s",
  },

  glowLine: {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "2px",
    background: "#00ffe1",
    animation: "scan 2.5s infinite",
  },

  icon: {
    fontSize: "45px",
    marginBottom: "10px",
    filter: "drop-shadow(0 0 10px #00ffe1)",
  },

  cardTitle: {
    color: "#00ffe1",
    textShadow: "0 0 10px #00ffe1",
  },

  comingSoon: {
    marginTop: "10px",
    fontSize: "11px",
    background: "rgba(255,50,50,0.2)",
    border: "1px solid red",
    color: "red",
    padding: "4px",
    borderRadius: "6px",
  },
};

