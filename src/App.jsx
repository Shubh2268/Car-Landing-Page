import { useState, useEffect } from 'react';
import Backround from './components/background/Background'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

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

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => count===2 ? 0 : count+1)
    }, 5000);
  }, [])

  return (
    <>
     <Backround playstatus={playstatus} heroCount={heroCount} />
     <Navbar />
     <Hero setPlaystatus={setPlaystatus} heroData={heroData} heroCount={heroCount} setHeroCount={setHeroCount} playstatus={playstatus} />
    </>
  )
}

export default App
