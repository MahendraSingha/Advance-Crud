import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddPage() {
    const [inputList, setInputList] = useState([])
    const [data, setData] = useState([])

    const navigate = useNavigate()

    const handleChange = (event, index) => {
        const arr = [...inputList]
        arr[index][event.target.name] = event.target.value
        setData([...arr])
    }
    const addRow = () => {
        setInputList([...inputList, { title: '', note: '' }])
    }
    const addInputData = () => {
        const allData = [...(JSON.parse(localStorage.getItem('dataKey')) || []), ...data]

        localStorage.setItem('dataKey', JSON.stringify(allData))
        navigate('/')
    }


    return (
        <div>
            <h2>Add page</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">TITLE</th>
                            <th scope="col">NOTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputList.map((x, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <input type='text' name='title' placeholder='enter title...' onChange={(e) => handleChange(e, i)} />
                                    </td>
                                    <td>
                                        <input type='text' name='note' placeholder='enter note...' onChange={(e) => handleChange(e, i)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <button className='btn btn-info' onClick={() => addRow()}>Add Row</button><br /><br />
            <button className='btn btn-success' onClick={() => addInputData()}>Add</button>

        </div>
    )
}

export default AddPage