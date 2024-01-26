import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "@/config/baseUrl";

export default function Home() {
  const [Data, setData] = useState(null);
  useEffect(() => {
    axios.get(baseUrl)
      .then((response) => {
        setData(response)
      }).catch((error) => {
        console.error(error);
      })
  }, [])

  if (!Data) {
    return <div>Loading...</div>
  }
  return (
    <>
      {Data}
    </>
  );
}
