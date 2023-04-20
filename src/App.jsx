
import { useRef } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
  const myRef = useRef(null);

  useEffect(() => {
    console.log(myRef.current); // in ra tham chiếu đến thành phần <div> bên dưới
  }, []);

  return (
    <div ref={myRef} value="123444">Đây là một thành phần React</div>
  );
}

export default App
