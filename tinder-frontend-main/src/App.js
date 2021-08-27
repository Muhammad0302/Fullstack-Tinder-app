import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
    {/* Tinder-Header */}
    <Header />
    {/* Tinder-cards */}
    <TinderCards />
    {/* Tinder-swape button */}
    <SwipeButtons />
    </div>
  );
}
export default App;
