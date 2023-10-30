import './App.css';
import $ from './units/fetch';
import Slider from './components/slider';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  async function fetchSliderList() {
    const response = await $.get('/api/slider');
    setData(() => {
      return response.data;
    })
  }

  useEffect(() => {
    fetchSliderList();
  }, [])
  return (
    <div className="App">
      <Slider data={data} id="" />
    </div>
  );
}

export default App;
