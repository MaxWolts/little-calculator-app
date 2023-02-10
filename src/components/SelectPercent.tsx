import ButtonCheck from  './ButtonCheck'
interface data {
    percents: number[],
    setValueSelected: React.Dispatch<React.SetStateAction<number>>,
    valueSelected: number
}

const SelectPercent = ({percents, valueSelected, setValueSelected}:data) => {

  const handdleInput = (ev:React.ChangeEvent<HTMLInputElement>) => {
    if(ev.target.value !== '') {
        if(parseFloat(ev.target.value) > 100) {
            ev.target.value= '100'
        }
        setValueSelected(parseFloat(ev.target.value))
    }
  }
  
  return (
    <div>
        <p className='text-[var(--gray)] font-bold'>Select Tip %</p>
        <div className='grid gap-4 grid-cols-2 justify-items-center mt-4 md:grid-cols-3'>
            {percents.map((percent) => {
            return <ButtonCheck percent={percent} key={percent} setPercentSelected={setValueSelected} valueSelected={valueSelected}/>
            })}
            <input type="number" name="" id=""  min={1} max={100} placeholder={'Custom'} className='input-style invalid:border-red-500 border-2 border-white' onChange={handdleInput}/>
        </div>
    </div>
  )
}

export default SelectPercent