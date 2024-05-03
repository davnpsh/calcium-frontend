import "@/styles/header-text.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Squiggle from "../../../public/squiggle.svg";

export default function Header() {
  return (
    <div className="flex justify-center items-center w-full mt-52">
      <div className="text-center">
        <div className="main-text text-8xl">
          <p>
            <span className="mind-word text-9xl">Minds</span> unchained,
          </p>
          <div className="relative">
            <div className="inline-block align-top">
              <p className="code-word light inline-block dark:hidden">code</p>
              <p className="code-word dark hidden dark:inline-block">code</p>
            </div>{" "}
            unrestrained
            <div className="absolute right-10 top-10 w-2/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 403.44 74.33"
              >
                <clipPath id="clippy">
                  <path
                    d="M40.88 48c2.09-1.26 4.21-2.4 6.33-3.57a61.49 61.49 0 0 1 16.3-6.58 32.75 32.75 0 0 1 10.73-.15 33.22 33.22 0 0 1 9.43 3.8c2.66 1.73 5.21 3.73 7.78 5.72 1.2.93 2.41 1.85 3.61 2.76a97.59 97.59 0 0 0 8.6 5.81 55 55 0 0 0 16 6.55 58.77 58.77 0 0 0 8.59 1.43 39.39 39.39 0 0 0 9.2-.42 65.05 65.05 0 0 0 8.92-2.07c1.11-.34 2.2-.79 3.3-1.18 2-.73 4-1.6 6-2.47a123.39 123.39 0 0 0 11.34-6c2.8-1.6 5.57-3.37 8.32-5.14l8.15-5.25c5.65-3.46 11.36-6.86 17.43-8.32a33.76 33.76 0 0 1 10.94.15 23.85 23.85 0 0 1 6 2.26c3.37 2.35 6.3 5.78 9.27 9.06 1.47 1.62 2.92 3.27 4.41 4.83 1.74 1.81 3.48 3.61 5.26 5.35a36.51 36.51 0 0 0 4.73 4 31.73 31.73 0 0 0 8.57 4.17 52 52 0 0 0 8.44 1.85 28.21 28.21 0 0 0 9.07-.33 46.66 46.66 0 0 0 8.76-2.45c1.42-.55 2.78-1.24 4.16-1.93l3.08-1.56c.93-.47 1.83-1.12 2.74-1.68l2.72-1.64c1.34-.83 2.64-1.74 3.95-2.66 3.86-2.71 7.65-5.62 11.48-8.42 2-1.43 3.95-2.87 5.94-4.26 1.68-1.18 3.37-2.29 5.08-3.39a41.5 41.5 0 0 1 9.33-4.27 18.42 18.42 0 0 1 5 .19c2 .44 3.95 1 5.91 1.59s4.06 1.16 6.1 1.69c2.56.66 5.13 1.2 7.71 1.68a54.25 54.25 0 0 0 6.22.68 56.33 56.33 0 0 0 5.81-.11c2-.07 4-.39 6-.62 4-.45 7.9-1.29 11.82-2.08l11.07-2.28c-3.92-.95-7.82-1.95-11.73-2.93-3.62-.9-7.24-1.75-10.85-2.69-4-1-8-1.94-11.92-3.27-1.08-.37-2.15-.72-3.23-1.07s-2.1-.86-3.15-1.28c-2-.79-3.91-1.67-5.87-2.49-1.72-.73-3.44-1.52-5.19-2.11-1.18-.4-2.36-.78-3.55-1.15a30.15 30.15 0 0 0-7.24-1.27h-.8a20.44 20.44 0 0 0-8.27 2.07c-1.05.47-2.08 1-3.13 1.53s-1.8 1.07-2.69 1.6c-1.2.71-2.38 1.46-3.55 2.28C302 27 295 33.05 287.78 38.2c-1.18.84-2.35 1.72-3.56 2.47l-3.55 2.19-4.53 2.3a38 38 0 0 1-9 3.16 28.53 28.53 0 0 1-9.22.07 37.35 37.35 0 0 1-10.37-3.62 45 45 0 0 1-7.3-6.36 336.02 336.02 0 0 1-5.15-5.48l-4.93-5.43a42.6 42.6 0 0 0-6.17-5.71 24.46 24.46 0 0 0-8.47-4 40.78 40.78 0 0 0-8.75-1.2 32.93 32.93 0 0 0-9.67 1.27 51.07 51.07 0 0 0-8.3 3.44c-1 .46-1.94 1.07-2.91 1.6-.74.41-1.49.81-2.22 1.26-2.2 1.33-4.41 2.65-6.6 4Q173 30.82 169 33.37c-10.14 6.05-20.46 11.87-31.35 14.23a42.57 42.57 0 0 1-7.2.66 37.68 37.68 0 0 1-7-.69 58.59 58.59 0 0 1-17.59-7.06c-3.4-2.17-6.7-4.67-10-7.13l-3.44-2.57a57.38 57.38 0 0 0-6.48-4.08 31.29 31.29 0 0 0-7.7-3 27.64 27.64 0 0 0-9.83-.73 34.81 34.81 0 0 0-13.73 5l-2.89 1.8c-1.28.78-2.51 1.7-3.75 2.6-1.83 1.31-3.59 2.76-5.36 4.24-3.65 3-7.14 6.48-10.63 9.9-.54.54-1.06 1.18-1.58 1.78q-1.91 2.18-3.8 4.39c-1.19 1.38-2.37 2.78-3.55 4.18-1.41 1.68-2.74 3.49-4.09 5.27 1.56-1.09 3.11-2.24 4.69-3.27 1.21-.77 2.41-1.56 3.61-2.36 2.19-1.45 4.38-2.92 6.55-4.42 2.35-1.33 4.68-2.71 7-4.11z"
                    fill="#171717"
                  />
                </clipPath>
                <path
                  clipPath="url(#clippy)"
                  className="squiggle"
                  fill="none"
                  stroke="#bc85ff"
                  strokeMiterlimit="10"
                  strokeWidth="18"
                  d="M14.2 65.54s36-36.79 56.31-35.66 38.6 27.31 58.13 26.56 26.34-5.91 37.6-13 30.53-19.52 39.48-19.14 19.48 8.23 31.12 19.87 18.91 13.2 25.25 13.16S278.24 58 297 40.76s25.86-17.86 31.49-17.86 48.11 15.42 65 13.27"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sub-text mt-16">
          <p>
            Where Collaborative Coding Meets Effortless Harmony - a sleek,
            minimalist environment that unleashes the power of collective
            ingenuity.
          </p>
        </div>
        <Button className="mt-10 text-xl">Start now</Button>
      </div>
    </div>
  );
}
