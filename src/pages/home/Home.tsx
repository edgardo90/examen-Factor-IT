import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_BY_AMOUNT, DECREMENT_COUNTER_BY_AMOUNT } from '../../redux/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux/store'


export const Home = () => {
    const count = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Página principal (Home)</h1>
            <br />
            <div className="min-h-10 max-w-6xl flex justify-center items-center bg-gray-100">
                <button
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-2xl active:scale-75"
                    type='button'
                    onClick={() => dispatch(INCREMENT_COUNTER(1))}
                >
                    +1
                </button>
                <button
                    className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-2xl active:scale-75 ml-2"
                    type='button'
                    onClick={() => dispatch(DECREMENT_COUNTER(1))}
                >
                    -1
                </button>
                <button
                    className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl active:scale-75 ml-2"
                    type='button'
                    onClick={() => dispatch(INCREMENT_COUNTER_BY_AMOUNT(5))}
                >
                    +5
                </button>
                <button
                    className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-2xl active:scale-75 ml-2"
                    type='button'
                    onClick={() => dispatch(DECREMENT_COUNTER_BY_AMOUNT(10))}
                >
                    -10
                </button>
            </div>
            <h1>Vite + React + Redux</h1>
            <div className="card">
                <span>Redux count is <b>{count.value}</b></span>
            </div>
        </>
    )
}