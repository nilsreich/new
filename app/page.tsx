"use client";
import { SyntheticEvent, useState } from "react";
import { useQuery, useMutation } from "../convex/_generated/react";
import { Id } from "../convex/_generated/dataModel";

export default function Home() {
  const tasks = useQuery("todos:getAllTodo");
  const addtask = useMutation("todos:addTodo");
  const toggletask = useMutation("todos:toggleTodo");
  const [value, setValue] = useState("");

  const addHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    addtask({ task: value });
    setValue("");
  };
  const toggleHandler = (_id: Id<"todos">) => {
    toggletask({ id: _id });
  };

  return (
    <div>
      hallo
      {tasks?.map(({ _id, task, completed }) => (
        <div key={_id.toString()} onClick={() => toggleHandler(_id)} style={{color:completed?'red':'black'}}>{task}</div>
      ))}
      <form onSubmit={(e) => addHandler(e)}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  );
}
