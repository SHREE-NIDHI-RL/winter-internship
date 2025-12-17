import { useLocation } from "react-router-dom";

import Props from "./Props"; 
import State from "./State";
import Task from "./Task";       
import Events from "./Event";
import UseState from "./Hooks/UseState"; 
import UseEffect from "./Hooks/UseEffect";  
import UseEffectAPI from "./Hooks/UseEffectAPI";
import UseRef from "./Hooks/UseRef";
import FakeImageAPI from "./Hooks/FakeImageAPI";   
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";  

const LearningReact = () => {

  const location = useLocation();
  const topic = location.state?.topic;

  return (
    <div>
      <h1>Learning Page</h1>
      <hr />

      {!topic && (
        <p>Please select a topic from the Learning React dropdown.</p>
      )}

      {topic === "props" && (
        <Props hi="Welcome Props" grade="12" age="18" img="/vite.svg" />
      )}

      {topic === "task" && (
        <Task item="Welcome to Task" />
      )}

      {topic === "state" && <State />}

      {topic === "events" && <Events />}

      {topic === "usestate" && <UseState />}
      {topic === "useeffect" && <UseEffect />}
      {topic === "useeffectapi" && <UseEffectAPI />}
      {topic === "useref" && <UseRef />}
      {topic === "fakeapi" && <FakeImageAPI />}
      {topic === "usememo" && <UseMemo />}
      {topic === "usecallback" && <UseCallback />}
    </div>
  );
};

export default LearningReact;
