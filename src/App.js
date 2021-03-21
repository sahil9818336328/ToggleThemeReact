import React, { useEffect, useState } from "react";
import articles from "./data";
import SingleArticle from "./SingleArticle";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme; // returns this theme on initial render
};

const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  // TOGGLING
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.classList = theme; // accessing HTML node
    localStorage.setItem("theme", theme); // on initial render set theme value to light-theme
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            {theme === "light-theme" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </nav>

      <section className="articles">
        {articles.map((item) => {
          return <SingleArticle key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

export default App;
