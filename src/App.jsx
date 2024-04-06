import { useRef, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Search from "./components/Search";
import domtoimage from "dom-to-image";

export const name = "Tejas-0612";
function App() {
  const elementRef = useRef(null);
  const [val, setVal] = useState("");
  const [data, setData] = useState({});
  const [isloading, setIsLoading] = useState(null);

  const downloadImage = () => {
    domtoimage
      .toPng(elementRef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "image.png";
        link.click();
      })
      .catch(function (error) {
        console.error("Error converting image:", error);
      });
  };

  const handleclick = async () => {
    setIsLoading(true);
    const data = await fetch(`https://api.github.com/users/${val}`);
    const userData = await data.json();
    if (!data) {
      setIsLoading(false);
      return <p>User not exist</p>;
    }
    setData(userData);

    console.log(userData);

    setIsLoading(false);
  };

  return (
    <div className="bg-[#242424] min-h-screen text-white">
      <h1 className="text-center text-5xl font-semibold py-10">Github Card</h1>
      <Search
        isloading={isloading}
        val={val}
        setVal={setVal}
        handleclick={handleclick}
      />

      {val == "" && <div>Search your card</div>}
      <div>
        {!isloading && val != "" ? (
          <div ref={elementRef}>
            <Card cardDetails={data} elementRef={elementRef} />
          </div>
        ) : (
          <div className="rounded-full h-4 w-4 border animate-spin border-dark-blue border-t-transparent"></div>
        )}
      </div>
      <button onClick={downloadImage}>Download Image</button>
    </div>
  );
}

export default App;
