import NewNote from './components/NewNote'
import Notes from './components/Notes'
import NoteFilter from './components/NoteFilter'

const App = () => {
  return (
    <div>
      <NewNote />
      <NoteFilter />
      <Notes  />
    </div>
  )
}

export default App