import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./assets/pages/todo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
