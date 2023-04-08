import "./App.css";
import GetAPI from "./Components/GetAPI";
import PostAPI from "./Components/PostAPI";
import Delete from "./Components/Delete";
import Stories from "./HN-API/Stories";
import Axios_fetch from "./Components/Axios_fetch";

function App() {
  return (
    <>
      {/* <GetAPI/> */}
      {/* <PostAPI /> */}
      {/* <Delete /> */}
      <Axios_fetch />
      {/* <Stories /> */}
    </>
  );
}

export default App;
