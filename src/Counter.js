import React, {useState} from 'react';
const Counter=()=>{
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    const [value, setValue] = useState("type here!");
    const onTextChange=(event) => {
        setValue(event.target.value);
    }
    return (<>
        <div
            onClick={e => console.log('onClick')}
            onMouseEnter={e => console.log('onMouseEnter')}
            onMouseOver={e => console.log('onMouseOver')}
            onMouseDown={e => console.log('onMouseDown')}
            onMouseUp={e => console.log('onMouseUp')}
            onMouseLeave={e => console.log('onMouseLeave')}
        >Test Mouse Event here</div>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        <p>You Click {count} times</p>

        <input
            type="text"
            value={value}
            onChange={event => onTextChange(event)}
        />
        <h3>{value.length}</h3>

        <button onClick={() => setShow(!show)}>
            show/hide
        </button>
        {(show)?"Hello":" "}
    </>);
}
export default Counter;