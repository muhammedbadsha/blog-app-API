
import 
{
   useEffect,
    useState 
  } 
    from "react";


function App() {
  const [time, setTime] = useState(0);
  const [Running, setRunning] = useState(false);

  useEffect(()=>{
    let intervel;
    if (Running){
      intervel = setInterval(() => {
        console.log('this');
        
        setTime((prevTime) => prevTime + 10);
      },10);
    }else if (!Running){
      clearInterval(intervel);

    }
    return () => clearInterval(intervel);
  } ,[Running]);
  return (
    <div className="max-w-md flex flex-col items-center justify-center py-8">
      <h1 className='text-2xl font-semibold'>stopwatch</h1>
      <div className='text-xl font-semibold py-4'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}:</span>
      </div>
      <div className='w-1/3 max-2-sm flex flex-row justify-evently'>
      {Running ? (<button className='border rounded-lg py-l px-3.5' onClick={ ()=> { setRunning(false)}}>stop</button>) : (<button className='border rounded-lg py-l px-3' onClick={()=> { setRunning(true)}}>start</button>)}
        
        <button className='border rounded-lg py-l px-2.5' onClick={() => { setTime(0); }}>reset</button>
      </div>
    </div>
  );
}

export default App;
