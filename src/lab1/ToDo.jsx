import { useState } from "react";

export default function ToDo() {
    const [item, setItem] = useState(null);

    return<>
    <input type = 'text' value={item} onChange={(e) => {
    setItem(e.target.value);
    }}
    />
    <button
    onClick={() => {
        alert(`add ${item}`);
    }}
    > Add</button>
    </>

}