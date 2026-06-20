import { useNavigate } from "react-router-dom";
import { categories } from "../data";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      <div style={styles.topbar}>
        <a href="https://t.me/HARM_1996" style={styles.telegram}>Telegram</a>
        <a href="https://youtube.com/@harm1903?si=QlpKuDppcsCVT9Qw" style={styles.youtube}>YouTube</a>
      </div>

      <h1 style={styles.title}>Dashboard</h1>

      <div style={styles.grid}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            style={{
              ...styles.card,
              opacity: cat.locked ? 0.5 : 1,
              cursor: cat.locked ? "not-allowed" : "pointer",
              position: "relative",
            }}
            onClick={() => {
              if (!cat.locked) {
                navigate(`/category/${cat.name}`);
              }
            }}
          >
            <div style={styles.icon}>{cat.icon}</div>
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
    backgroundColor: "#000",
    minHeight: "100vh",
    color: "white",
    padding: "30px",
  },

  topbar: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    marginBottom: "20px",
  },

  telegram: {
    color: "#229ED9",
    textDecoration: "none",
    fontWeight: "bold",
  },

  youtube: {
    color: "#FF0000",
    textDecoration: "none",
    fontWeight: "bold",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },

  card: {
    backgroundColor: "#111",
    padding: "30px",
    textAlign: "center",
    borderRadius: "12px",
    border: "1px solid #222",
  },

  icon: {
    fontSize: "30px",
    marginBottom: "10px",
  },

  comingSoon: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "orange",
    color: "black",
    padding: "5px 10px",
    fontSize: "10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};
