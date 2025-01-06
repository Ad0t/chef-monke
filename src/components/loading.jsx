import { useState, useEffect } from 'react';

function CharacterChanger() {
  const characters = ['|', '/', '-', '\\'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % characters.length);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3>Loading Recipe: {characters[index]}</h3>
    </div>
  );
}

export default CharacterChanger;