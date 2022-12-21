import { useContext, useEffect } from "react";
import { menuContext } from "../store/menu-context";

const useClickOutside = (ref) => {
  const { setIsMenuOpen } = useContext(menuContext);

  useEffect(() => {
    const handler = (e) => {
      let element = e.path.find((item) => item.id === "toggle-btn");
      console.log(element);
      if (!ref?.current.contains(e.target) && !element) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, setIsMenuOpen]);
};

export default useClickOutside;
