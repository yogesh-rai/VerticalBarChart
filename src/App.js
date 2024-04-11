import './App.css';
import VerticalBarChart from './components/VerticalBarChart ';

function App() {
  // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-sky-300">
      <h1 className="text-4xl font-bold">Chart</h1>
      <div className="h-3/4 w-3/4 my-5 border-4 border-black rounded-md bg-white">
        <VerticalBarChart months={months} data={data}/>
      </div>
    </div>
  );
}

export default App;
