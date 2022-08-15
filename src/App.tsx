import React, { useState, useEffect } from 'react';
import {
  Flex, Button
} from '@chakra-ui/react'
import Navbar from './components/Navbar';
import CustomSlider from './components/Slider';

function App() {
  const [slider, setSlider] = useState(1000);
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    setNumbers(Array.from({length: slider}, () => Math.round(Math.random() * slider)));
  }, [slider])

  useEffect(()=>{
    console.log(numbers)
  },[numbers])

  return (
    <Flex justifyContent="center" flexDir="column">
      <Navbar />
      <Flex wrap="wrap" width="100%" justifyContent="space-evenly">
        <Button colorScheme="red" variant="solid">Bubble Sort</Button>
        <Button colorScheme="blue" variant="solid">Insertion Sort</Button>
        <Button colorScheme="whatsapp" variant="solid">Merge Sort</Button>
        <Button colorScheme="messenger" variant="solid">Heap Sort</Button>
        <Button colorScheme="orange" variant="solid">Bucket Sort</Button>
      </Flex>
      <Flex p="10px">
        <CustomSlider slider={slider} setSlider={setSlider} />
      </Flex>
    </Flex>
  );
}

export default App;
