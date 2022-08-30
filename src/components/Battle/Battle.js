import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../reducers/counterSlice';

function Battle() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <p> value: {count}</p>
        </div>
    );
}
export default Battle;
//