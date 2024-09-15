import { useState } from "react";
import Backround from './components/background/Background'
import Navbar from "./components/navbar/Navbar";

function App() {

  let heroData = [
    {
      text1: 'Dive into',
      text2: 'what you love'
    },
    {
      text1: 'Indulge',
      text2: 'your passions'
    },
    {
      text1: 'Give in to',
      text2: 'your passions'
    },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playstatus, setPlaystatus] = useState(false);

  return (
    <>
     <Backround playstatus={playstatus} heroCount={heroCount} />
     <Navbar />
    </>
  )
}

export default App
