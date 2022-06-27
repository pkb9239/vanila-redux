import React, { useState } from "react";

function Home() {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    }
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button style={{marginLeft: 5}}>ADD</button>

            </form>
            <ul></ul>
        </div>
    )
};

export default Home;