import './App.css';

import DatingCards from './Components/datingcard/DatingCards';
import Header from './Components/header/Header';

import SwipeButton from './Components/swipebutton/SwipeButton';

function App() {

  return (

    <div className="app">

    <Header />

    <DatingCards />

    <SwipeButton />

    </div>

);
  }

export default App;