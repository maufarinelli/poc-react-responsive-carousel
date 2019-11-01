import React from 'react';
import './App.css';
import Slider from './Slider/Slider';

function App() {
  const items = [
    {
      label: 'First slide',
      children: <img alt="" src="https://www.gannett-cdn.com/sweetiq/sls/upload/locations.roguetrends.com/RogueTrends-Image1.jpg" />
    },
    {
      label: 'Second slide',
      children: <img alt="" src="https://www.gannett-cdn.com/sweetiq/sls/upload/locations.roguetrends.com/RogueTrends-Image2.jpg" />
    },
    {
      label: 'Third slide',
      children: <img alt="" src="https://www.gannett-cdn.com/sweetiq/sls/upload/locations.roguetrends.com/RogueTrends-Image3.jpg" />
    }
  ];

  return (
    <div>
      <Slider label="My test with react responsive carousel" items={items} />
    </div>
  );
}

export default App;
