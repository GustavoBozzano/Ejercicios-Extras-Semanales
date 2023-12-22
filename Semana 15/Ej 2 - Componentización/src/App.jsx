import CardImage from "../src/components/CardImage/CardImage";
import AddComments from "./components/AddComments/AddComments";
import CountLikes from "./components/CountLikes/CountLikes";
import ListPost from "./components/ListPost/ListPost";
import NavIcon from "./components/NavIcon/NavIcon";

function App() {
  return (
    <>
      <CardImage />
      <ListPost />
      <NavIcon />
      <CountLikes />
      <AddComments />
    </>
  );
}

export default App;
