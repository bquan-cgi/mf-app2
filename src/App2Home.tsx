import CounterButton from "mainApp/CounterButton";
import { GroupuiInput, GroupuiButton } from "@group-ui/group-ui-react";

export default function App2Home() {
  return (
    <div className="app2 p-5 bg-blue-500">
      <h1>App2 Home</h1>
      <CounterButton></CounterButton>

      <GroupuiInput placeholder="Your Name"></GroupuiInput>
      <GroupuiButton onClick={() => console.log("Clicked")}>
        Click Me!
      </GroupuiButton>

      <a href="app2content">go to app2 content</a>
    </div>
  );
}
