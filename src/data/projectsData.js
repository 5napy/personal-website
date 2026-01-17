import pomodoroImg from "./pomodoroTimer.webp";
import quoteImg from "./quoteMachine.webp";
import calculatorImg from "./calculator.webp";
import markdownImg from "./markdownPre.webp";
import drumMachine from "./drumMachine.webp";
import palindromeChecker from "./palindrome.webp";
import rpgCreature from "./rpg_creature.webp";
import romanNumeral from "./roman_numeral.webp";
import musicPlayer from "./music_player.webp";




const projects = [
  {
    id: 1,
    title: "Pomodoro Timer",
    description: "Timer app built in React for the Pomodoro Technique",
    link: "https://5napy.github.io/pomodoro-clock",
    image: pomodoroImg,
  },
      {
    id: 2,
    title: "RPG Creature Search",
    description: "RPG creature finder that fetches data from an API",
    link: "https://5napy.github.io/rpg-creature-finder/",
    image: rpgCreature,
  },
  {
    id: 3,
    title: "Quote Generator",
    description: "Random quote machine built in React",
    link: "https://5napy.github.io/Random-quote-machine",
    image: quoteImg,
  },
  {
    id: 4,
    title: "Calculator",
    description: "Basic Calculator built in React",
    link: "https://5napy.github.io/calculator-fcc",
    image: calculatorImg,

  },
  {
    id: 5,
    title: "Markdown Previewer",
    description: "Makrdown previewer built in React",
    link: "https://5napy.github.io/markdown-previewer-fcc",
    image: markdownImg,
  },
  {
    id: 6,
    title: "Drum Machine",
    description: "Drum Machine Project built in React",
    link: "https://5napy.github.io/drum-machine-fcc/",
    image: drumMachine,
  },
  {
    id: 7,
    title: "Palindrome Checker",
    description: "Palindrome checker app build with JavaScript",
    link: "https://5napy.github.io/palindrome-checker/",
    image: palindromeChecker,
  },  
  {
    id: 8,
    title: "Roman Numeral Converter",
    description: "A JavaScript app that converts numbers into their Roman numeral representation using standard Roman numeral rules.",
    link: "https://5napy.github.io/roman-numeral-converter/",
    image: romanNumeral,
  },
    {
    id: 9,
    title: "Simple Music Player",
    description: "Music player app with pre-loaded data built in JavaScript",
    link: "https://5napy.github.io/simple-music-player/",
    image: musicPlayer,
  },

];
export default projects;