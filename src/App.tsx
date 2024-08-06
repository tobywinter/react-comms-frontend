import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome/:userId" element={<Welcome />} />
      </Routes>
    </Router>
  );
}
export default App;
