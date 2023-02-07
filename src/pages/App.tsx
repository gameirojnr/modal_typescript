import "./App.css";

import { Link } from "react-router-dom";

import Layout from "../Component/Layout";
import useModal from "../hooks/useModal";

function App() {
  const { showSimpleModal } = useModal();

  return (
    <Layout>
      <h1>Welcome to Modal!</h1>
      <Link to="/longPage">scroll</Link>

      <button onClick={showSimpleModal}>Show Modal</button>
    </Layout>
  );
}

export default App;
