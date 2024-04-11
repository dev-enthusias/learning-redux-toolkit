import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { decrement, incrementByAmount } from '../state/counter/counterSlice';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className='btn' onClick={() => dispatch(incrementByAmount(10))}>
        Increment
      </button>
      <button className='btn' onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
