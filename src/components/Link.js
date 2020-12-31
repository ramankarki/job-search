import React from "react";

export default function Link(props) {
  const onClick = (event) => {
    // if (event.metaKey || event.ctrlKey) {
    //   return;
    // }

    event.preventDefault();
    window.history.pushState({}, "", props.href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={props.className} href={props.href} onClick={onClick}>
      {props.children}
    </a>
  );
}
