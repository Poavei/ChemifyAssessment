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
            Aside from this, going into the actual architecture of the app I would have a state stored that holds all the todo objects in a list and then functions that would allow for the todolist to be updated or operated on.  I would handle the CRUD operations on the highest possible point of the component tree, as this allows for all the editing and managing of the state to be all in one place, which would allow for integration with a backend database to be easier, even though managing updates to the state will need to pass down functions down the component tree which is a drawback.
          </span>
        </p>
        <TodoSect />
      </div>
    </main>
  )
}
