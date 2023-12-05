import React, { useState } from 'react'

function Calculator() {
    const [value,setValue]=useState('')

    const handlerChange = (e)=>{
        setValue(e.target.value);
    }
  return (
      <div className="container">
        <div className="text">
        <form action="">
            <div className="search">
            <input type="text" name="search" id="search" value={value} onChange={handlerChange} />
            </div>
            <div className="line1">
            <input type="button" value="AC" onClick={e=>setValue('')} />
            <input type="button" value="Del" onClick={e=> setValue(String(value).slice(0,-1))} />
            <input type="button" value="."  className='dot' onClick={e=>setValue(value+e.target.value)} />
            <input type="button" value="*" onClick={e=>setValue(value+e.target.value)} />
        </div>
        <div className="line2">
            <input type="button" value="7" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="8" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="9" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="+" onClick={e => setValue(value+ e.target.value)} />
        </div>
        <div className="line3">
            <input type="button" value="4" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="5" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="6" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="-" onClick={e => setValue(value+ e.target.value)} />
        </div>
        <div className="line4">
            <input type="button" value="1" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="2" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="3" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="/" onClick={e => setValue(value+ e.target.value)} />
        </div>
        <div className="line5">
            <input type="button" value="0" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="00" onClick={e => setValue(value+ e.target.value)} />
            <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))} />
        </div>
        </form>
        </div>
      </div>
  )
}

export default Calculator
