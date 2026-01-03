import { useEffect, useState } from "react";


function Navbar(){
  const [darkText, setDarkText] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setDarkText(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

    return(
      <>
        <div id="navbar" className={`
    fixed top-6 left-1/2 -translate-x-1/2
    w-[95%] h-20 z-20
    px-10 flex items-center justify-between
    rounded-[44px]  backdrop-blur-md
    transition-all duration-300
    ${
      darkText
        ? "text-black border shadow-[0_-4px_16px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] border-white/20"
        : "bg-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20"
    }
  `}>
            <div className="left">
                <p>Gustavo's / Portfolio</p>
            </div>
<div className="right flex gap-8 items-center">
  <button
  type="button"
  onClick={() => setMenuOpen(prev => !prev)}
  className="
    flex items-center justify-center
    w-10 h-10
    rounded-full
    cursor-pointer
    select-none
    transition-transform duration-200
    hover:scale-125
  "
  aria-label="Open menu"
>
  <span className="material-symbols-outlined text-3xl!">
    arrow_outward
  </span>
</button>

<button
  type="button"
  onClick={() => alert("Switching languages is an upcoming feature, Sorry :(")}
  className="
    flex items-center justify-center
    w-10 h-10
    rounded-full
    cursor-pointer
    select-none
    transition-transform duration-200
    hover:scale-125
  "
>
  <span className="material-symbols-outlined text-3xl! transition-transform duration-200 hover:scale-125">
    language
  </span>
  </button>
  <button
  type="button"
  onClick={() => alert("Dark mode comming soon, Sorry :(")}
  className="
    flex items-center justify-center
    w-10 h-10
    rounded-full
    cursor-pointer
    select-none
    transition-transform duration-200
    hover:scale-125
  "
>
  <span className="material-symbols-outlined text-3xl! transition-transform duration-200 hover:scale-125">
    dark_mode
  </span>
  </button>
</div>
        </div>

        {menuOpen && (
  <div
    className={`
      fixed top-28 right-[5%]
      w-48 rounded-2xl p-4 z-30
      backdrop-blur-md transition-all
      ${
        darkText
          ? "bg-white/90 text-black shadow-lg"
          : "bg-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
      }
    `}
  >
    <ul className="flex flex-col gap-3">
      <li>
        <a href="#hero" onClick={() => setMenuOpen(false)}>About</a>
      </li>
      <li>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      </li>
      <li>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </li>
    </ul>
  </div>
)}
</>
    );
}

export default Navbar;