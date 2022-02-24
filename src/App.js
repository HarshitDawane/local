import './App.css';
import Normal from './Component/Normal';
import Counter from './Component/Counter';
import Functionclick from './Component/Functionclick';
import ParentCompoment from './Component/ParentCompoment';
import ConditionalRendering from './Component/ConditionalRendering';
import PersonList from './Component/PersonList';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Functionclick /> */}
      {/* <ParentCompoment  /> */}
      {/* <ConditionalRendering /> */}
      {/* <Normal name = "Harshit"/> */}
      <PersonList />
    </div>
  );
}

export default App;
