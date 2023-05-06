import ToDoBar from "./ToDoBar"


const ToDoList = (
    {
        todos,
        callback
    }: { todos: any[]; callback: (type: string, id:number, str: string) => void;}
) => {
    return <div
        className='w-full flex flex-col items-center gap-y-2'
    >
        {todos.map((el, index) => {
            return <ToDoBar
                    key={index}
                    todo={el.todo} 
                    active={el.active}
                    id={el.id}
                    callback={callback}
                />
        })}
        
    </div>
}

export default ToDoList;