import { setCounter } from "./redux/features/subCounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks"

export const App = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector(state => state.counterSub);
  return (
    <div>
      <button onClick={() => dispatch(setCounter())}> {counter} Sub-1 Redux </button>
    </div>
  )
}
