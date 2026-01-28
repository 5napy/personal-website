import heroBg from "../assets/heroBackground.webp";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[160vh]">
      {/* Background image - scrolls with content */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBg}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sticky glass card that stays in view while scrolling */}
      <div className="sticky top-[1vh] sm:top-[4vh] w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div
          className="
            bg-white/10 backdrop-blur-md rounded-3xl text-white
            p-5 md:p-12 sm:p-11 lg:p-16
            w-full max-w-[min(600px,92vw)] md:max-w-4xl lg:max-w-6xl
            shadow-[0_8px_32px_rgba(0,0,0,0.2)]
            border border-white/20
            overflow-y-auto
            max-h-[85vh]
            pointer-events-auto
          "
          style={{
            WebkitOverflowScrolling: "touch",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Frontend Developer crafting clean, modern web experiences.
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
            I work with React, JavaScript, and HTML/CSS to turn Figma designs
            into fast, responsive interfaces. I'm a quick learner, a reliable
            problem-solver, and currently exploring backend and mobile
            development. Open to junior frontend roles, paid freelance projects,
            or full-stack trainee positions.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              "React",
              "JavaScript",
              "HTML/CSS",
              "Tailwind",
              "Python",
              "Figma",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm
                  border border-white/20 transition-transform duration-200
                  active:scale-95"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1qsAjD2skCvjJcJ9xpYj3eP3SulCkH0qt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full text-base sm:text-lg bg-white w-full py-3 text-black font-medium
             text-center transition-all duration-200 active:scale-[0.98]
             active:bg-purple-600 active:text-white shadow-lg"
          >
            See CV
          </a>
        </div>
      </div>
    </section>
  );
}
