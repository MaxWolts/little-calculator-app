import {useState, useEffect} from 'react'
interface percent {
    percent: number
    setPercentSelected: React.Dispatch<React.SetStateAction<number>>
    valueSelected: number
}

const ButtonCheck = ({percent, setPercentSelected, valueSelected}:percent) => {
  const [checked, setChecked] = useState(false)
  const handdleChecked = () => {
    setPercentSelected(percent)
  }
  useEffect(()=> {
    if (valueSelected === percent) {
      setChecked(true)
    }else 
      setChecked(false)
    
  },[valueSelected])
  return (
    <>
      <button
        onClick={handdleChecked}
        className={`${checked? ' bg-[var(--secondary)] text-[var(--primary)]': 'bg-[var(--primary)]'} px-4 py-2 rounded w-full text-[var(--white)] font-bold text-2xl hover:text-[var(--primary)] hover:bg-[var(--light-secondary)] `}
      >{percent}%</button>
    </>)
}

export default ButtonCheck