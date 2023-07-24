import React, { useState } from 'react'

function App() {

  const [roll, setRoll] = useState(true)

  const [skips, setSkips] = useState([])

  let skipper = [];
  const [btns, setBtns] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])


  const [number, setNumber] = useState()

  function randomize() {
    let changed = [];

    for (let index = 0; index < 10; index++) {
      let checked = 0;
      skips.forEach(element => {
        if (element == index) {
          checked++;
        }
      });
      if (checked == 0) {
        btns[index] = Math.ceil(Math.random() * 5)
      }
      changed.push(btns[index])
    }
    setBtns([])
    setBtns(changed)
    if(!roll){
      window.location.reload()
    }
  }

  function chooseNumb(p, i) {
    if (!number) {
      setNumber(p.target.innerText)
    }
    if (p.target.innerText == number) {
      skipper = skips
      skipper.push(i);
      p.target.classList.add('bg-[#59E391]')
      p.target.classList.add('hover:bg-[#59E391]')
      setSkips(skipper)
    } else {
      setSkips(skips)
    }
    if (skips.length == 10) {
      setRoll(false)
    }
  }


  return (
    <div className='flex justify-center items-center pt-10'>
      <div className='w-[80%] md:w-[40%] border-[40px] border-[#0B2434] text-center p-5'>
        <h1 className='text-4xl md:text-6xl font-bold'>Tenzies</h1>
        <h1 className='text-1xl md:text-3xl font-bold'>{number ? `Your number is ${number}` : null}</h1>
        <p className='text-1xl md:text-2xl mb-8'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className='grid grid-cols-5 text-center gap-5'>
          {btns.map((p, i) => <div key={i} value={i} onClick={(e) => { chooseNumb(e, i) }} className='shadow p-[10px_10px] w-[80%] h-max text-1xl font-bold hover:bg-slate-400 transition cursor-pointer rounded-md '>{p}</div>)}
        </div>
        <button  className={`bg-[#5035FF] text-white p-[10px_20px] mt-9 rounded-lg  ${!roll && 'bg-green-500 shadow-lg'}`}  onClick={randomize}>{roll ? 'ROLL' : "You Win  , tap to play again"} </button>
      </div>
    </div>
  )
}

export default App