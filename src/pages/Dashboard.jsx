import { useNavigate } from "react-router-dom";
import { categories } from "../data";

export default function Dashboard() {
  const navigate = useNavigate();

  const isMobile = window.innerWidth <= 768;

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

      <h1 style={styles.title}>Dashboard</h1>

      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile
            ? "repeat(2,1fr)"
            : "repeat(4,1fr)",
        }}
      >
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
            <div
              style={{
                ...styles.icon,
                fontSize: isMobile ? "40px" : "30px",
              }}
            >
              {cat.icon}
            </div>

            <h3
              style={{
                fontSize: isMobile ? "22px" : "18px",
              }}
            >
              {cat.title}
            </h3>

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
    padding: "20px",
  },

  topbar: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    marginBottom: "20px",
    flexWrap: "wrap",
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
    gap: "20px",
  },

  card: {
    backgroundColor: "#111",
    borderRadius: "12px",
    border: "1px solid #222",
    textAlign: "center",
    minHeight: "180px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
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
    borderRadius: "5px",
    fontSize: "10px",
    fontWeight: "bold",
  },
};
