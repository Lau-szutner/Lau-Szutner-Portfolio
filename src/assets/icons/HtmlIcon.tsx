
import { SVGProps } from "react";

const HtmlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none" // Cambiado a currentColor
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Asegura que puedas pasar clases como className
  >
    <path d="M1.5 0H22.5L20.5897 21.5625L11.9767 24L3.414 21.5625L1.5 0ZM8.53125 9.75L8.301 7.03125L18.3592 7.035L18.5895 4.41375L5.40975 4.41L6.10875 12.4215H15.234L14.91 15.8475L12 16.6485L9.0465 15.84L8.85525 13.7302H6.246L6.57825 17.9025L12 19.3515L17.379 17.9062L18.1215 9.75H8.53125Z" fill="black"/>
  </svg>
);

export default HtmlIcon;
