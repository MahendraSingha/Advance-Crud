import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import swal from 'sweetalert'


function IndexPage() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('dataKey')) || [])
    const navigate = useNavigate()
    // console.log(data)


    const addHandler = () => {
        navigate('/add')

    }

    const handleRemove = (elem, i) => {
        const items = data.filter((elem, index) => index !== i)
        // console.log(items, 'items')
        localStorage.setItem('dataKey', JSON.stringify(items))
        setData(items)
    }



    return (
        <div>
            <div style={{ margin: '30px' }}>
                <button className='btn btn-primary' onClick={() => addHandler()}>Add</button>
                <span style={{ margin: '10px' }}></span>
                <button className='btn btn-warning' onClick={() => navigate('/edit')}>Edit</button>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">SERIAL NO</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">NOTE</th>
                            <th scope="col">REMOVE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data?.map((elem, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{elem.title}</td>
                                        <td>{elem.note}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={(e) => handleRemove(elem, i)}>Remove</button>

                                        </td>

                                    </tr>
                                )
                            })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IndexPage