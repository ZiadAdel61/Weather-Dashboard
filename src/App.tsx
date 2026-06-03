import { useMemo, useRef } from "react"
import useTasks from "./hooks/useTasks"

function App() {
  const {Tasks,setTasks} = useTasks();
  const newTaskRef = useRef<HTMLInputElement>(null)
  const remainingTasks = useMemo(() => Tasks.filter((task) => !task.completed).length, [Tasks])

  const handleAddTask = () => {
    const text = newTaskRef.current?.value;

    if (!text) return;
setTasks(prev=> [...prev,{id:prev.length+1 , completed:false ,text}]);
newTaskRef.current!.value = "";
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  }

  const handleTaskCompletion = (id: number) => {
    const newTasks=[...Tasks];
    const task =newTasks.find(task=>task.id===id);
    if(!task) return;
    task.completed=!task.completed;    
    setTasks(newTasks);
  }

  const handleDeleteTask = (id: number) => {
    let newTasks=[...Tasks];
    newTasks=newTasks.filter(task=>task.id!==id);
    setTasks(newTasks);
  }
    
  return (
    <div className="bg-indigo-900 min-h-screen flex justify-center items-center">
      <div className="min-w-md mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold mb-4 text-center font-mono">TODO LIST</h1>
          <div className="flex justify-center items-center">
            <input onKeyDown={handleKeyDown} ref={newTaskRef} type="text" placeholder="Add a new task" className="border border-gray-300 rounded-4xl py-4 px-5 bg-gray-200 border-e-none rounded-e-none w-full"/>
            <button onClick={handleAddTask} className="border border-orange-500 rounded-4xl py-4 px-5 bg-orange-500 cursor-pointer hover:bg-orange-600 rounded-s-none font-bold text-white text-md text-center">+</button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {Tasks.map((task) => (
            <div key={task.id} className="border-b-2 border-gray-300 p-2  flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" className={`w-5 h-4 cursor-pointer`} checked={task.completed} onChange={()=>handleTaskCompletion(task.id)} />
                <span className={`text-lg font-medium ${task.completed ? "line-through text-gray-500" : ""}`}>{task.text}</span>
              </div>
              <button className="text-red-500 hover:text-red-600 font-bold text-lg cursor-pointer" onClick={()=>handleDeleteTask(task.id)}>X</button>
            </div>
          ))}
          <div>Remaining tasks:{remainingTasks}</div>
        </div>
      </div>

    </div>

  )
}

export default App
