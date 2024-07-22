import React,{useState} from 'react'

export default function CreateList() {

    const [data, setdata] = useState("0 ")
    const [list, setlist] = useState([])

    const handelclick = () => {
        console.log("Clicked");
        setlist([...list, data])
        console.log("list");

    }
    return (
        <div>
            <input type="text" placeholder='Enter Name' onChange={(e) => setdata(e.target.value)} />
            <button onClick={handelclick}>Click</button>
            {
                list.map((e, i) => {
                    return <li key={i}>{e}</li>
                })
            }

        </div>
    )
}
