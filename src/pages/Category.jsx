import { useParams } from "react-router-dom";
import { categories } from "../data";

export default function Category() {
  const { id } = useParams();

  const category = categories.find(
    (cat) => cat.id === id
  );

  if (!category) {
    return (
      <div style={styles.container}>
        <h1>Category Not Found</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>
        {category.title}
      </h1>

      <div style={styles.grid}>

        {category.items.map((item) => (

          <div key={item.id} style={styles.card}>

            <div style={styles.imageWrapper}>

              <img
                src={item.image}
                alt=""
                style={styles.image}
              />

              {item.type && (
                <div
                  style={{
                    ...styles.badge,
                    backgroundColor:
                      item.type === "free"
                        ? "#009933"
                        : "#8B0000",
                  }}
                >
                  {item.type.toUpperCase()}
                </div>
              )}

              {item.tag && (
                <div style={styles.tag}>
                  {item.tag}
                </div>
              )}

            </div>

            <div style={styles.content}>
              <h3 style={styles.name}>
                {item.title}
              </h3>

              <p style={styles.desc}>
                {item.desc}
              </p>

              {category.mode === "course" && (
                <>
                  {item.type === "free" ? (
                    <a
                      href={item.download}
                      style={styles.freeBtn}
                    >
                      Download
                    </a>
                  ) : (
                    <a
                      href={`https://t.me/HARM19995?text=Hello%20I%20want%20to%20buy:%20${item.title}`}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.payBtn}
                    >
                      🔒 Request Now
                    </a>
                  )}
                </>
              )}

              {category.mode === "go" && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.goBtn}
                >
                  GO
                </a>
              )}

              {category.mode === "links" && (
                <div style={styles.linkBox}>
                  {item.link}
                </div>
              )}
            </div>

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

  title: {
    textAlign: "center",
    marginBottom: "35px",
    letterSpacing: "3px",
    textShadow: "0 0 20px red",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(260px,1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "#111",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #330000",
    boxShadow: "0 0 20px rgba(255,0,0,.25)",
  },

  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    display: "block",
  },

  content: {
    padding: "15px",
  },

  name: {
    fontSize: "18px",
    marginBottom: "10px",
    lineHeight: "1.4",
  },

  desc: {
    color: "#aaa",
    fontSize: "14px",
  },

  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "6px 10px",
    borderRadius: "8px",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
  },

  tag: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "6px 10px",
    borderRadius: "8px",
    backgroundColor: "orange",
    color: "#000",
    fontSize: "12px",
    fontWeight: "bold",
  },

  freeBtn: {
    display: "block",
    background: "#008f11",
    color: "white",
    textAlign: "center",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 0 15px green",
  },

  payBtn: {
    display: "block",
    background: "#8B0000",
    color: "white",
    textAlign: "center",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 0 15px red",
  },

  goBtn: {
    display: "block",
    background: "#0066ff",
    color: "white",
    textAlign: "center",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 0 15px #0066ff",
  },

  linkBox: {
    backgroundColor: "#000",
    border: "1px solid #333",
    padding: "10px",
    marginTop: "15px",
    borderRadius: "10px",
    wordBreak: "break-all",
    color: "#00ff99",
    fontSize: "13px",
  },

};
