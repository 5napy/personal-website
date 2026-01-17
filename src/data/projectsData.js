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
    description: "Timer app built with React to manage focused work sessions using the Pomodoro Technique.",
    link: "https://5napy.github.io/pomodoro-clock",
    image: pomodoroImg,
  },
      {
    id: 2,
    title: "RPG Creature Search",
    description: "Search tool for RPG creatures that retrieves and displays detailed information from an external API.",
    link: "https://5napy.github.io/rpg-creature-finder/",
    image: rpgCreature,
  },
  {
    id: 3,
    title: "Quote Generator",
    description: "Random quote generator that displays a new quote on each request built in react.",
    link: "https://5napy.github.io/Random-quote-machine",
    image: quoteImg,
  },
  {
    id: 4,
    title: "Calculator",
    description: "Interactive calculator built in React that supports basic arithmetic operations.",
    link: "https://5napy.github.io/calculator-fcc",
    image: calculatorImg,

  },
  {
    id: 5,
    title: "Markdown Previewer",
    description: "Live Markdown previewer that converts user input into formatted HTML in real time using React.",
    link: "https://5napy.github.io/markdown-previewer-fcc",
    image: markdownImg,
  },
  {
    id: 6,
    title: "Drum Machine",
    description: "Drum machine application that plays audio samples through clickable pads and keyboard interactions.",
    link: "https://5napy.github.io/drum-machine-fcc/",
    image: drumMachine,
  },
  {
    id: 7,
    title: "Palindrome Checker",
    description: "Utility app that validates whether a given word or phrase reads the same forwards and backwards. (if a word is a palindrome)",
    link: "https://5napy.github.io/palindrome-checker/",
    image: palindromeChecker,
  },  
  {
    id: 8,
    title: "Roman Numeral Converter",
    description: "A JavaScript app that converts numbers into their Roman numeral representation.",
    link: "https://5napy.github.io/roman-numeral-converter/",
    image: romanNumeral,
  },
    {
    id: 9,
    title: "Simple Music Player",
    description: "Music player built in JavaScript that loads and plays predefined audio tracks with basic playback controls.",
    link: "https://5napy.github.io/simple-music-player/",
    image: musicPlayer,
  },

];
export default projects;