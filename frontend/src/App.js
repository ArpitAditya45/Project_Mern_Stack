import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent";
function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateStudent />} />
          <Route path="/create-student" element={<CreateStudent />}></Route>
          <Route path="/student-list" element={<StudentList />}></Route>
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
