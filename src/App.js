import { Typography } from "@mui/material";
import { MakeForm } from "./Components/MakeForm";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Typography variant="h4">Dynamic Form</Typography>
      <MakeForm />
    </div>
  );
}
