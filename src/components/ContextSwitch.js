// import "./Styles.css";
import { useTheme } from "./ContextTheme";

const ContextSwitch = () => {
    console.log("ContextTheme.Provider is being rendered");
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default ContextSwitch;




