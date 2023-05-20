import { useEffect } from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import NoteFilter from './components/NoteFilter'
import noteService from './services/notes'
import { setNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        noteService
            .getAll().then(notes => dispatch(setNotes(notes)))
    }, [dispatch])

    return (
        <div>
            <NewNote />
            <NoteFilter />
            <Notes  />
        </div>
    )
}

export default App