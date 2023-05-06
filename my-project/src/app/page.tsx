import TodoSect from '@/components/todo-sect'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm lg:flex">
        <p>
          <span className='font-bold text-xl'>In answer to question number 1: </span>
          <br />
          <br /> 
          <span>
            &nbsp;&nbsp;&nbsp;
            For a rather simple application likes a ToDo app, if the application is to store the data somewhere, then I would go with an easy to use database like firebase as this would also speed up the implementation of the code as firebase has a lot of functions that can be called that would could be made to fire when the user triggers an event that would make any of the CRUD operations appropriate.  I also would likely use Redux if this app was to be multiple paged, to reduce number of reads and so that once the initial read from the database has been made, all other state changes can be handled on the app with updates sent to the database.  But I will assume I will not be using either Redux or Firebase and will instead be making a one page app. 
            <br /> 
            <br /> 
            &nbsp;&nbsp;&nbsp;
            Aside from this, going into the actual architecture of the app I would have a state stored that holds all the todo objects in a list and then functions that would allow for the todolist to be updated or operated on.  I would handle the CRUD operations on the highest possible point of the component tree, as this allows for all the editing and managing of the state to be all in one place, which would allow for integration with a backend database to be easier, even though managing updates to the state will need to pass down functions down the component tree which is a drawback.  For my implementation I created a function similar to &lsquo;setDispatch&rsquo; from Redux to manage the state of the app.
          </span>
          <br /> 
            <br /> 
            &nbsp;&nbsp;&nbsp;
            How I would handle the <span className='font-bold'>CRUD</span> operations:
            <br />
            <br />
            <span className='font-semibold text-lg'>Create:</span> <br />
            The create functionality would require 3 parameters to work properly throughout the entire app: the todo itself (stored as string), and ID (will just be using a number here), and an active boolean to show if the todo has been completed or not.  I will then simply push this new object to the front of the array in state.
            <br /> 
            <br />
            <span className='font-semibold text-lg'>Read:</span> <br />
            The read of the data would be automatic via the &lsquo;map&rsquo; function on the array of todos, producing for each todo an appropriate element (in this case a bar) to show it and all available options.
            <br />
            <br />
            <span className='font-semibold text-lg'>Update:</span> <br />
            Updating the data would be down through the before mention function that would be passed down to the component.  I found it appropriate to update the state for changing of the todo&rsquo;s string, or marking it as complete or not.
            <br />
            <br />
            <span className='font-semibold text-lg'>Delete:</span> <br />
            The delete was also handled by the callback function on the bar component.  It simply deleted the entry of the object in state.
            <br />
            <br />
            All of the CRUD operations could easily be then reflected on firebase via appropriate functions by adding to the top level function &lsquo;changeTodo&rsquo;, once firebase has been initialised and added to the app.
        </p>
        <TodoSect />
      </div>
    </main>
  )
}
