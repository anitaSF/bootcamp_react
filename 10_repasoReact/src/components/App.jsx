import { useEffect, useState } from "react";
import PostList from "./PostList/PostList";

function App() {
  const [datosApi, setDatosApi] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setDatosApi(data);
    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {datosApi.length > 0 ? <PostList datosApi={datosApi} /> : null}
    </>
  )
}

export default App 
