import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { useContext } from "react";
import ThemeContext from "./store/themeContext";

const App = () => {
  const themeCtx = useContext(ThemeContext);

  const darkClass = themeCtx.isDark ? "dark" : "";

  return (
    <div className={`app ${darkClass}`}>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
