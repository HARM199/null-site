import { useState } from "react";
import { dashboardItems, courseItems } from "./data";
import "./App.css";

function App() {
  const [stage, setStage] = useState("door");
  const [openAnim, setOpenAnim] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const openDoor = () => {
    const audio = new Audio("/assets/door-open.mp3");
    audio.play();

    setOpenAnim(true);

    setTimeout(() => {
      setStage("dashboard");
    }, 8000);
  };

  // 🔥 أهم تعديل: دالة موحدة للضغط
  const handleClick = (item) => {
    console.log("clicked:", item);

    // 1 - LINK خارجي
    if (item.link) {
      window.open(item.link, "_blank");
      return;
    }

    // 2 - GO (خارجي زي download)
    if (item.go) {
      setSelectedPage({ type: "go", data: item });
      return;
    }

    // 3 - DOWNLOAD
    if (item.download) {
      setSelectedPage({ type: "download", data: item });
      return;
    }

    // 4 - COURSE / CATEGORY
    if (item.type === "course") {
      setSelectedPage({ type: "course" });
      return;
    }
  };

  return (
    <div className="app">

      {/* ================= DOOR ================= */}
      {stage === "door" && (
        <div style={styles.container}>
          <div style={styles.center}>
            <div
              style={{
                ...styles.door,
                transform: openAnim
                  ? "rotateY(-120deg) translateZ(200px)"
                  : "rotateY(0deg)",
                opacity: openAnim ? 0 : 1,
              }}
              onClick={openDoor}
            >
              <div style={styles.handle}></div>
            </div>

            <h1 style={styles.title}>OPEN THE DOOR</h1>
          </div>
        </div>
      )}

      {/* ================= DASHBOARD ================= */}
      {stage === "dashboard" && !selectedPage && (
        <div className="dashboard">
          <div className="dashboardGrid">

            {dashboardItems.map((item) => (
              <div
                key={item.id}
                className="dashboardCard"
                onClick={() => handleClick(item)}
              >
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
              </div>
            ))}

          </div>
        </div>
      )}

      {/* ================= GO PAGE ================= */}
      {selectedPage?.type === "go" && (
        <div className="coursesPage">
          <button onClick={() => setSelectedPage(null)}>Back</button>

          <h2 style={{ color: "white" }}>GO SECTION</h2>

          <p style={{ color: "white" }}>
            {selectedPage.data.title}
          </p>

          <button
            onClick={() => window.open(selectedPage.data.go, "_blank")}
          >
            OPEN GO LINK
          </button>
        </div>
      )}

      {/* ================= DOWNLOAD PAGE ================= */}
      {selectedPage?.type === "download" && (
        <div className="coursesPage">
          <button onClick={() => setSelectedPage(null)}>Back</button>

          <h2 style={{ color: "white" }}>DOWNLOAD SECTION</h2>

          <button
            onClick={() =>
              window.open(selectedPage.data.download, "_blank")
            }
          >
            DOWNLOAD
          </button>
        </div>
      )}

      {/* ================= COURSES ================= */}
      {selectedPage?.type === "course" && (
        <div className="coursesPage">
          <button onClick={() => setSelectedPage(null)}>Back</button>

          <div className="courseGrid">
            {courseItems.map((item) => (
              <div key={item.id} className="courseCard">
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <a href={item.link} target="_blank">
                  <button>Download</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px",
  },

  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  door: {
    width: "300px",
    height: "430px",
    background: "linear-gradient(145deg, #8B0000, #300000)",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "transform 8s ease, opacity 8s ease",
  },

  handle: {
    width: "16px",
    height: "16px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    position: "relative",
    top: "50%",
    left: "80%",
  },

  title: {
    color: "white",
    marginTop: "20px",
  },
};

export default App;
