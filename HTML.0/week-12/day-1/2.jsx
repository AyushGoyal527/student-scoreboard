import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  var [posts, setPosts] = useState([]);
  var [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const getData = (url) => {
    return fetch(url).then((res) => res.json());
  };

  const handleClick = (value) => {
    var updatePage = page + value;
    setPage(updatePage);
    // fetchDataAndUpdate(updatePage);
  };

  useEffect(() => {
    fetchDataAndUpdate(page);
  }, [page]);

  const fetchDataAndUpdate = async (page) => {
    try {
      setLoad(true);
      const data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      console.log(data);
      setPosts(data);
      setLoad(false);
    } catch (error) {
      setErr(true);
      setLoad(false);
      console.log(error, error.message);
    }
  };
  if (load) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong Error:404 ...</h1>;
  }

  return (
    <div className="App">
      <h1>Todo Add Using APi request</h1>
      <hr />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <hr />

      {posts.map((el) => (
        <div style={{ border: "1px solid red", margin: "20px" }}>
          <>
            <h3>ID: {el.id}</h3>
            <p> Title: {el.title}</p>
            <h6> Body: {el.body}</h6>
          </>
        </div>
      ))}
      <button disabled={page == 1} onClick={() => handleClick(-1)}>
        Previous
      </button>
      <button>{page}</button>
      <button onClick={() => handleClick(1)}>Next</button>
    </div>
  );
}