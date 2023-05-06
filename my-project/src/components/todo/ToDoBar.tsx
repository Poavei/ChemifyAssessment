import { useState } from "react";


const ToDoBar = (
    {
        todo,
        active,
        id,
        callback
    }: {todo: string; active: boolean; id: number; callback: (type: string, id:number, str: string) => void;}
) => {
    const [editing, setEditing] = useState(false);
    const [str, setStr] = useState(todo);
    return <div
        className='w-full rounded py-3 px-8 shadow-md border font-semibold flex flex-row justify-between items-center'
        style={{
            backgroundColor: editing ? '#f3f3f3' : 'white'
        }}
    >
        {editing ? <input
                        type='text'
                        value={str}
                        onChange={e => setStr(e.target.value)}
                        className="border rounded px-2 py-1 grow mr-2"
                    />
            :
            <span
                className='px-2'
            >{todo}</span>}
        <div
            className='w-max flex flex-row items-center gap-x-2'
        >
            {active && <> <button
                    className='font-bold text-md py-1 px-2 bg-black text-white rounded'
                    onClick={() => {
                        if(editing){
                            callback('update', id, str)
                        }
                        setEditing((prev) => !prev);
                    }}
                >
                    {!editing ? 'Edit' : 'Save'}
                </button>
                <button
                    className='font-bold text-md py-1 px-2 bg-black text-white rounded'
                    onClick={() => {
                        if(editing) {
                            setStr(todo);
                            setEditing(false);
                        } else {
                            callback('delete', id, '');
                        }
                    }}
                >
                    {editing ? 'Cancel' : 'Delete'}
                </button>
            </>
            }
            <button
                onClick={() => {
                    if(active){
                        callback('complete', id, '');
                    } else {
                        callback('undo', id, '');
                    }
                }}
                className='font-bold text-md py-1 px-2 bg-black text-white rounded'
            >{active ? 'Complete' : 'Undo'}</button>

        </div>
    </div>
}

export default ToDoBar;