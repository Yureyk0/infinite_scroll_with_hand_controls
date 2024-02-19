import { useEffect, useState } from "react";
import "./App.css";
import getPhotos from "./servises/getPhotos";

function App() {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await getPhotos();
        setPhotos(data);
      } catch {}
    };

    fetchPhotos();

    return () => {};
  }, []);
  return <>test</>;
}

export default App;
