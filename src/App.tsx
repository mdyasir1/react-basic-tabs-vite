import { useState } from 'react';
import './App.css'

const courses = ['HTML', 'CSS', 'JS', 'React'];

function App() {
  const [selected, setSelected] = useState(0);
  function handler(idx) {
    return setSelected(idx);
  }

  return (
    <div className="container">
      <nav className="title">
        {courses.map((course, index) => (
          <span className={index === selected ? 'active':''} onClick={() => handler(index)}>
            {course}
          </span>
        ))}
      </nav>
      <div className='description'>
        <h3>You have Selected: {courses[selected]}</h3>
      </div>
    </div>
  );
}

export default App;
