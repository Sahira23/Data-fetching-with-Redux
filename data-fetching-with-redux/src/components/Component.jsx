import React from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_value, fetch_photos, decrease_value } from '../state/actions/actions';
import "../assets/Component.css"

const Component = () => {
    const pagenum = useSelector(state => state.photo.num);
    const photodata = useSelector(state => state.photo.data);
    const dispatch = useDispatch();
    const [inputValue,setInputValue]=useState("")
    const changeHandler = (e) => {
       setInputValue(e.target.value)
    }
    const find=()=>{
        dispatch(fetch_photos(pagenum,inputValue))
    }
    return (
        <div className='photo-container'>
            <div className="con">
                <label className='label-text'>
                    PAGE NUMBER:
                    <button className="btn btn-success" onClick={()=>{dispatch(add_value())}}>
                        +
                    </button>
                    {pagenum}
                    <button className="btn btn-success mt-2" onClick={()=>{dispatch(decrease_value())}}>
                        -
                    </button>
                </label>
                <label className='label-text'>
                    Limit of pictures
                    <input type="number" value={inputValue} onChange={changeHandler} />
                </label>
                <button type='button' className='btn btn-info h-50' onClick={find}>Find</button>
            </div>
            <div className="photos">
                {photodata?.map(item => {
                    return (
                        <img src={item.download_url} width={300} height={300} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Component