import { useCallback, useEffect, useState } from "react";

const ONE_SECOND = 1000

function App() {
  const [data, setData] = useState([]);

  const removeItem = useCallback((id) => {
    setData((prev) => [...prev].filter((item) => item.id !== id));
  }, []);

  // const startInterval = useCallback(() => {
  //   setData(data.map(el => {
  //     el.seconds -= 1;
  //     return el
  //   }));
  // }, [data]);

  const startTimer = useCallback(
    (timer) => {
      setTimeout(() => {
        removeItem(timer.id);
      }, ONE_SECOND * timer.seconds);
    },
    [removeItem]
  );

const updateTimer = () => {
    const updatedData = data.map(el => {
      el.seconds--;
      return el;
    });
    setData(updatedData);
  };

  const addItem = useCallback(() => {
    const time = Math.floor(Math.random() * 20) + 11;

    const newData = {
      message: "Исчезнет через",
      id: data.length + 1,
      seconds: time,
    };

    setData([...data, newData]);
    startTimer(newData);
  }, [data, startTimer]);

  

  useEffect(() => {
    const interval = setInterval(() => updateTimer(), ONE_SECOND);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="App">
      <button onClick={addItem}>Add</button>
      {
        data.map((el,index) => {
          return (
            <div key={el.id}>
              {`${index+1} ${el.message} ${el.seconds}`}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;