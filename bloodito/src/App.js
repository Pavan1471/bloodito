import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Request from "./pages/Request";
import Layout from "./pages/layout";
import Donate from "./pages/Donate";
import User from "./pages/User";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="request-blood" element={<Request />} />
          <Route path="donate-blood" element={<Donate />} />
          <Route path="user" element={<User/>} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
