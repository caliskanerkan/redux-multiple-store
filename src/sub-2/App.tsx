import { setCounter } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks"

export const App = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector(state => state.counter);
  return (
    <div>
      <button onClick={() => dispatch(setCounter())}> {counter} Sub-2 Redux </button>
    </div>
  )
}
