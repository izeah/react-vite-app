import { Button } from "@nextui-org/react";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";
import PropTypes from "prop-types";
import { useTheme } from "next-themes";

export default function ThemeSwitcherButton() {
  const { theme: colorTheme, setTheme } = useTheme();

  const handleColorTheme = () => {
    setTheme(colorTheme === "light" ? "dark" : "light");
  };

  return (
    <Button
      isIconOnly={true}
      variant="solid"
      color=""
      onClick={handleColorTheme}
      className="p-2"
    >
      {colorTheme === "dark" ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
}

ThemeSwitcherButton.propTypes = {
  colorTheme: PropTypes.string,
  handleColorTheme: PropTypes.func,
};
