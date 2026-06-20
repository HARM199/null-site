import { useParams } from "react-router-dom";
import { categories } from "../data";

export default function Category() {

  const { name } = useParams();

  const category = categories.find(
    (cat) => cat.name === name
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
                        ? "green"
                        : "red",
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

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            {/* ========================= */}
            {/* 🎓 COURSE MODE */}
            {/* ========================= */}

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
                    style={styles.payBtn}
                  >
                    🔒 Request Now 
                  </a>
                )}
              </>
            )}

            {/* ========================= */}
            {/* 🖥️ GO MODE */}
            {/* ========================= */}

            {category.mode === "go" && (
              <a
                href={item.link}
                target="_blank"
                style={styles.goBtn}
              >
                GO
              </a>
            )}

            {/* ========================= */}
            {/* 🌐 LINKS MODE */}
            {/* ========================= */}

            {category.mode === "links" && (
              <div style={styles.linkBox}>
                {item.link}
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

  title: {
    textAlign: "center",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(300px,1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "#111",
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #222",
    paddingBottom: "20px",
  },

  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "white",
    fontSize: "12px",
  },

  tag: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "orange",
    color: "black",
    fontSize: "12px",
  },

  freeBtn: {
    display: "block",
    backgroundColor: "green",
    color: "white",
    textAlign: "center",
    padding: "10px",
    margin: "15px",
    borderRadius: "5px",
    textDecoration: "none",
  },

  payBtn: {
    display: "block",
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
    padding: "10px",
    margin: "15px",
    borderRadius: "5px",
    textDecoration: "none",
  },

  goBtn: {
    display: "block",
    backgroundColor: "#0066ff",
    color: "white",
    textAlign: "center",
    padding: "10px",
    margin: "15px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  linkBox: {
    backgroundColor: "#000",
    border: "1px solid #333",
    padding: "10px",
    margin: "15px",
    borderRadius: "5px",
    wordBreak: "break-all",
    color: "#00ff99",
    fontSize: "13px",
  },
};
