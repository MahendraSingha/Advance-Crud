import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditPage() {
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem('dataKey')) || [])
    // console.log(info, '098')
    const navigate = useNavigate()


    const handleChange = (e, i) => {
        const arr = [...info]

        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                arr[i].isChecked = 'yes'

            } else {
                arr[i].isChecked = 'no'
            }
        } else {
            arr[i][e.target.name] = e.target.value
        }
        setInfo([...arr])
    }


    const handleUpdate = (e) => {
        // console.log(info, 'info')
        let oldArr = JSON.parse(localStorage.getItem('dataKey'))
        info.map((elem, index) => {
            // console.log(elem.isChecked, '0000')
            if (elem.isChecked === 'yes' || elem.isChecked === undefined) {
                let keys = Object.keys(oldArr[index])
                // console.log(keys, 'keys000')
                keys.map((elem) => {
                    oldArr[index][elem] = info[index][elem]
                })
            }

        })

        // console.log(oldArr, 'oldArr')
        localStorage.setItem('dataKey', JSON.stringify(oldArr))
        navigate('/')
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">SERIAL NO</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">NOTE</th>
                        <th scope="col">CHECKS</th>
                    </tr>
                </thead>
                <tbody>
                    {info &&
                        info.map((elem, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <input type='text' name='title' value={elem.title} onChange={(e) => handleChange(e, i)} />
                                    </td>
                                    <td>
                                        <input type='text' name='note' value={elem.note} onChange={(e) => handleChange(e, i)} />
                                    </td>
                                    <td>
                                        <input className="form-check-input" type="checkbox" id="flexCheckIndeterminate" defaultChecked onChange={(e) => handleChange(e, i)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={(e) => handleUpdate(e)} className='btn btn-success'>Update</button>
        </div>
    )
}

export default EditPage