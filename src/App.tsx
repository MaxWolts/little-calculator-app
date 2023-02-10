import './App.css'
import { useState, useEffect } from 'react'
import { BsFillPersonFill, BsCurrencyDollar } from "react-icons/bs";
import SelectPercent from './components/SelectPercent';
import Result from './components/Result';
import InputWithIcon from './components/InputWithIcon';

function App() {
  const [result, setResult] = useState({amount:0.00, total:0.00 })
  const [valueSelected, setValueSelected] = useState(0)
  const percents = [5, 10, 15, 25, 50]
  const [bill, setBill] = useState(-1)
  const [people, setPeople] = useState(-1)
  
  const saveBill = (val: number) => {
    setBill(val)
  }
  const savePeople = (val: number) => {
    setPeople(val)
  }
  const calculate = () => {
    let amount = ( bill * ( valueSelected/100 ) ) / people
    let total = (bill / people) + amount
    amount = parseFloat(amount.toFixed(2))
    total = parseFloat(total.toFixed(2))
    setResult({ amount, total })
  }
  const reset = () => {
    setValueSelected(0)
    setBill(-1)
    setPeople(-1)
    setResult({amount:0.00, total:0.00 })
  }
  useEffect(() => {
    if((valueSelected && bill && people) >0) {
      calculate()
    }
  },[valueSelected, bill, people])


  return (
    <div className="App h-screen bg-[var(--background)]">
      <h1 className='text-2xl text-[var(--black-gray)] text-center font-bold tracking-[0.3em]	py-8'>SPLI<br/>TTER</h1>
      <div className='p-8 md:py-9 md:px-8 bg-[var(--white)] rounded-3xl md:grid md:grid-cols-2 md:gap-8 md:max-w-5xl mx-auto'>
        <div className='grid gap-8 mb-9 md:mb-3'>
          <InputWithIcon text='Bill' saveValue={saveBill} value={bill} render={() => { return <BsCurrencyDollar className='icon' />; } } />
          <SelectPercent percents={percents} valueSelected={valueSelected} setValueSelected={setValueSelected}/>
          <InputWithIcon text='Number of People' value={people} saveValue={savePeople} render={()=> {return <BsFillPersonFill className='icon'/> }}/>
        </div>
        <Result result={result} reset={reset} values={ {bill, people, valueSelected} }/>
      </div>
    </div>
  )
}

export default App
