import React from "react";

function Logo() {
  //position:absolute;width:26px;height:30px
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="26"
      width="30"
      overflow="visible"
      display="block"
    >
      <path
        d="M13 0l13 7.5v15L13 30 0 22.5v-15z"
        fill="hsla(258, 100%, 50%, 0.3)"
      />
      <path
        d="M0 7.5L13 15l13-7.5v15L13 30 0 22.5z"
        fill="rgba(77, 0, 255, 0.6)"
      />
      <path d="M13 15l13 7.5L13 30 0 22.5z" fill="#4D00FF" />
    </svg>
  );
}

export { Logo };
