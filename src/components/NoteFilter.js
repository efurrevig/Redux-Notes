import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const NoteFilter = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <input 
                type='radio' 
                name='filter' 
                onChange={() => dispatch(filterChange('ALL'))} 
            /> all
            <input
                type='radio'
                name='filter'
                onChange={() => dispatch(filterChange('IMPORTANT'))}
            /> important
            <input
                type='radio'
                name='filter'
                onChange={() => dispatch(filterChange('NOT IMPORTANT'))}
            /> not important
        </div>
    )
}

export default NoteFilter