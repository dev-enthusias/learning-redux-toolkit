import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { decrement, incrementAsync } from '../state/counter/counterSlice';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const loading = useSelector((state: RootState) => state.counter.loading);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Counter: {loading ? 'loading' : count}</h2>
      <button className='btn' onClick={() => dispatch(incrementAsync(10))}>
        Increment
      </button>
      <button className='btn' onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
