import { useEffect } from "react";

export default function Route(props) {
  useEffect(() => {
    const onLocationChange = () => {
      props.setCurrentPath();
    };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, [props.currentPath]);

  return props.currentPath === props.path ? props.children : null;
}
