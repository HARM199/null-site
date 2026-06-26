import { useNavigate } from "react-router-dom";
import { categories } from "../data";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      <div style={styles.topbar}>
        <a href="https://t.me/HARM_1996" style={styles.telegram}>
          Telegram
        </a>

        <a
          href="https://youtube.com/@harm1903?si=QlpKuDppcsCVT9Qw"
          style={styles.youtube}
        >
          YouTube
        </a>
   
        </div>
   
      <h1 style={styles.title}>HARM Dashboard</h1>

      <div style={styles.grid}>
        {categories.map((cat) => (
          <div
            key={cat.name}
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

  topbar: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  telegram: {
    color: "#229ED9",
    fontWeight: "bold",
  },

  youtube: {
    color: "#ff0000",
    fontWeight: "bold",
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
