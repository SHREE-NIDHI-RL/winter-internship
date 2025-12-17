import { useMemo, useState } from 'react';

const slowFnuc = (num) => {
    console.log('Calling Slow Function');
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2;
};

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(true);

    const styling = {
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black',
        padding: '10px',
        marginTop: '10px'
    };

    // Memoized value — runs slowFnuc ONLY when number changes
    const doubleNumber = useMemo(() => {
        return slowFnuc(number);
    }, [number]);

    return (
        <div style={styling}>
            <h3>UseMemo Example</h3>

            <input
                type='number'
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />

            <button onClick={() => setNumber(number + 1)}>+</button>

            <h4>Number is {doubleNumber}</h4>

            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
        </div>
    );
};

export default UseMemo;
