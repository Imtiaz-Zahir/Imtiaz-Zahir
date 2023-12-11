import { useEffect, useRef } from "react";

export function ScrollUp() {
  const el = useRef<HTMLButtonElement | null>(null); // Initialize with null
  useEffect(() => {
    window.addEventListener("scroll", () => {
      el?.current?.classList.toggle("hidden", window.scrollY < 60); // Access current property
    });
  }, []);
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className="h-16 w-10 bg-amber-400 hidden rounded-2xl fixed bottom-0 right-0 mb-4 mr-4 hover:pb-4 transition-all hover:bg-amber-500"
      ref={el}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="#6563FF"
          d="M12.71,12.54a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,17L12,14.66,14.29,17a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-3-1.08L12,9.16l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Z"
        ></path>
      </svg>
    </button>
  );
}

export function scrollDown(m: React.MouseEvent<HTMLElement>) {
  const text =
    m.currentTarget.innerText == "CONTACT NOW" ||
    m.currentTarget.innerText == "HIRE ME NOW"
      ? "contact"
      : m.currentTarget.innerText;
  document.getElementById(text.toLowerCase())?.scrollIntoView();
}
