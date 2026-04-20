import { useState } from "react";
import "./App.css";

function App() {
  const [post, SetPost] = useState([]);

  const getData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

    return fetch(url).then((res) => res.json());
  };

  const fetchandUpadteData = async () => {
    try {
      const data = await getData();
      SetPost(data);
      console.log(post);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Todo App</h1>
        <hr />
        <button onClick={fetchandUpadteData}>Get Todo</button>

        {post.map((el) => {
          return (
            <div className="box">
              <div>{el.id}</div>
              <div>{el.title}</div>
              <div>{el.body}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
