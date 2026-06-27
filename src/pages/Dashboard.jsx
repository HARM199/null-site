import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data";

export default function Dashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={styles.container}>

      {/* القائمة العائمة */}
      <div style={styles.floatingMenu}>

        {menuOpen && (
          <div style={styles.linksBox}>

            <a
              href="https://t.me/HARM_1996"
              target="_blank"
              rel="noreferrer"
              style={styles.circleBtn}
              title="Telegram"
            >
              ✈️
            </a>

            <a
              href="https://youtube.com/@harm1903?si=QlpKuDppcsCVT9Qw"
              target="_blank"
              rel="noreferrer"
              style={styles.circleBtn}
              title="YouTube"
            >
              ▶️ 
            </a>

            <a
              href="https://t.me/+U_a4R23Ux9w0OTU0"
              target="_blank"
              rel="noreferrer"
              style={styles.circleBtn}
              title="Community"
            >
              💬
            </a>

            <a
              href="https://mega.nz/file/cFdUCI7Z#-yAs05pxEkN73OCY9CFrh1BP7kBrWOmY7laTzP0fhLI"
              target="_blank"
              rel="noreferrer"
              style={styles.circleBtn}
              title="Android App"
            >
              📱
            </a>

            <a
              href="#"
              style={styles.circleBtn}
              title="Amwal"
            >
              💰
            </a>

          </div>
        )}

        <button
          style={styles.mainBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      <h1 style={styles.title}>HARM Dashboard</h1>

      <div style={styles.grid}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            style={{
              ...styles.card,
              opacity: cat.locked ? 0.5 : 1,
              cursor: cat.locked ? "not-allowed" : "pointer",
            }}
            onClick={() => {
              if (!cat.locked) {
                navigate(`/category/${cat.id}`);
              }
            }}
          >
            <div style={styles.icon}>
              {cat.icon}
            </div>

            <h3>{cat.title}</h3>

            {cat.locked && (
              <div style={styles.comingSoon}>
                COMING SOON
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    background:
      "radial-gradient(circle at top,#220000,#000)",
    minHeight: "100vh",
    color: "white",
    padding: "20px",
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
    alignItems: "center",
    gap: "12px",
    marginBottom: "15px",
  },

  mainBtn: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "#8B0000",
    color: "white",
    fontSize: "30px",
    cursor: "pointer",
    boxShadow: "0 0 20px red",
  },

  circleBtn: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: "#111",
    border: "1px solid #400",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "24px",
    boxShadow:
      "0 0 15px rgba(255,0,0,.6)",
  },

  title: {
    textAlign: "center",
    marginBottom: "40px",
    letterSpacing: "4px",
    textShadow: "0 0 20px red",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(180px,1fr))",
    gap: "20px",
  },

  card: {
    background: "#111",
    border: "1px solid #330000",
    borderRadius: "15px",
    textAlign: "center",
    padding: "30px 15px",
    transition: ".3s",
    boxShadow: "0 0 20px rgba(255,0,0,.3)",
    position: "relative",
  },

  icon: {
    fontSize: "50px",
    marginBottom: "15px",
  },

  comingSoon: {
    marginTop: "15px",
    background: "orange",
    color: "#000",
    padding: "5px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "12px",
  },
};
