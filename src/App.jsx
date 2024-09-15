import { useState } from "react";
import Backround from './components/background/Background'

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

  const [heroCount, setHeroCount] = useState(2);
  const [playstatus, setPlaystatus] = useState(false);

  return (
    <>
     <Backround playstatus={playstatus} heroCount={heroCount} />
    </>
  )
}

export default App
