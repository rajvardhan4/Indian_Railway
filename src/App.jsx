import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Loader from "./Loader";
import AddVoice from "./AddVoice";
import Latest from "./Latest";
import All from "./ALL";
import Header from "./Header";
import Human from "./Human";
import Denoise from "./Denoise";
import Transcription from "./Transcription";
import Analysis from "./Analysis";
import ThreeLineGraph from "./ThreeLineGraph";

// import ProgressBar from "./ProgressBar";
// Define fake data
const Railway_Data = [
  {
    id: 1,
    date: "2024-08-01",
    section: "North",
    trainNo: "12345",
    locNo: "67890",
    from: "Station A",
    to: "Station B",
    sNo: "1",
    lpNameId: "LP001",
    apNameId: "AP001",
    time: "10:00 AM",
    totalTime: "02:00 hrs",
  },
  {
    id: 2,
    date: "2024-08-02",
    section: "South",
    trainNo: "54321",
    locNo: "09876",
    from: "Station B",
    to: "Station C",
    sNo: "2",
    lpNameId: "LP002",
    apNameId: "AP002",
    time: "11:00 AM",
    totalTime: "03:10 hrs",
  },
  {
    id: 3,
    date: "2024-08-03",
    section: "West",
    trainNo: "67890",
    locNo: "12345",
    from: "Station C",
    to: "Station D",
    sNo: "3",
    lpNameId: "LP003",
    apNameId: "AP003",
    time: "12:00 AM",
    totalTime: "01:25 hrs",
  },
];

// console.log(Railway_Data);


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-voice" element={<AddVoice />} />
        <Route path="/Loader" element={<Loader />} />
        <Route path="/All" element={<All data={Railway_Data} />} />
        <Route path="/Latest" element={<Latest/>} />
        <Route path="/Human" element={<Human/>} />
        {/* <Route path="/ProgressBar" element={<ProgressBar/>} /> */}
        <Route path="/Denoise" element={<Denoise/>} />
        <Route path="/Analysis" element={<Analysis/>} />
        <Route path="/Transcription" element={<Transcription/>} />
        <Route path="/ThreeLineGraph" element={<ThreeLineGraph/>} />

      </Routes>
    </Router>
  );
}

export default App;
