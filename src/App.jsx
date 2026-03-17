// 3. Import useState from React
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // 4. Create state for Mr. Castro’s likes (start at 5)
  const [castroLikes, setCastroLikes] = useState(5);

  // 5. Create state for Mr. Chambers’ dislikes (start at 10)
  const [chambersDislikes, setChambersDislikes] = useState(10);

  // 6. Create state for dark/light mode (start at false)
  // delete the old darkMode variable before this
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "page dark-mode" : "page"}>
      <>
        <section id="center">
          <div className="hero">
            <img
              src={heroImg}
              className="base"
              width="170"
              height="179"
              alt=""
            />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

          <div>
            <h1>Teacher Posts</h1>
            <p>
              Practice using useState with likes, dislikes, and screen mode.
            </p>
          </div>

          <div className="teacher-posts">
            <div className="teacher-card">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b328976aa49a1b7b46b89c3/1737065083600-U94IK3BEAJFHETKPMZBW/CSH+Faculty+010225+IB_IAN_7046.jpg?format=1000w"
                alt="Mr. Castro"
                className="teacher-img"
              />

              <h2>Mr. Castro</h2>
              <p>This is Mr. Castro's post.</p>

              <button
                className="counter"
                // 7. Increase Castro likes by 1 when clicked
                onClick={() => setCastroLikes(castroLikes + 1)}
              >
                Like Mr. Castro 👍
              </button>

              {/* 8. Display Castro likes */}
              <p>Likes: 👍 {castroLikes}</p>
            </div>

            <div className="teacher-card">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b328976aa49a1b7b46b89c3/1737065078925-4ZB8D62QP1PZ0K0FM7OC/CSH+Faculty+010225+IB_IAN_7044.jpg?format=1000w"
                alt="Mr. Chambers"
                className="teacher-img"
              />

              <h2>Mr. Chambers</h2>
              <p>This is Mr. Chambers's post.</p>

              <button
                className="counter"
                // 9. Increase Chambers dislikes by 1 when clicked
                onClick={() => setChambersDislikes(chambersDislikes + 1)}
              >
                Dislike Mr. Chambers 👎
              </button>

              {/* 10. Display Chambers dislikes */}
              <p>Dislikes: 👎 {chambersDislikes}</p>
            </div>
          </div>

          <button
            className="counter"
            onClick={() => {
              // 11. Reset Castro likes to 0
              setCastroLikes(0);
              // 12. Reset Chambers dislikes to 0
              setChambersDislikes(0);
            }}
          >
            Reset Reactions
          </button>

          {/* 13. Toggle screen mode */}
          <button
            className="counter"
            onClick={() => setDarkMode(!darkMode)}
          >
            Change Screen Mode
          </button>

          {/* 14. Display current mode */}
          <p>Current Mode: {darkMode ? "Dark Mode" : "Light Mode"}</p>
        </section>

        <div className="ticks"></div>

        <section id="next-steps">
          <div id="docs">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  <img className="logo" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank">
                  <img className="button-icon" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>
            </ul>
          </div>
          <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with us</h2>
            <p>Join the Vite community</p>
            <ul>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>
      </>
    </div>
  );
}

export default App;
