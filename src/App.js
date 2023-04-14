
import './App.css';
import List from './list/List';
function App() {
  const items =[
    {
      index:1,
      text:"text1",

    },
    {
      index:2,
      text:"text2",
      
    },
    {
      index:3,
      text:"text3",
      
    },
    {
      index:4,
      text:"text4",
      
    },
    {
      index:5,
      text:"text5",
      
    }
  ]
  return (
    <div className="App">
     <List items={items}/>
    </div>
  );
}

export default App;
