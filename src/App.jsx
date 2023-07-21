import { useEffect, useState } from 'react';
import './App.css';
import Header from '/src/components/Header/Header';
import getRequestUrl from './utils/getRequestUrl';
import MainSection from '/src/components/MainSection/MainSection';
import Footer from '/src/components/Footer/Footer';
import Loading from './components/Loading/Loading';

const today = new Date(Date.now()).toISOString().slice(0, 10);
function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedApi, setSelectedApi] = useState('apod');

  useEffect(() => {
    setIsLoading(true);
    const queryRequest = getRequestUrl(selectedApi, selectedDate);
    fetch(queryRequest)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      });
  }, [selectedDate, selectedApi]);

  return (
    <>
      <Header
        setSelectedApi={setSelectedApi}
        selectedApi={selectedApi}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        today={today}
      ></Header>
      {!isLoading && (
        <MainSection
          selectedDate={selectedDate}
          isLoading={isLoading}
          data={data}
          selectedApi={selectedApi}
        />
      )}
      {isLoading && <Loading></Loading>}
      <Footer></Footer>
    </>
  );
}

export default App;
