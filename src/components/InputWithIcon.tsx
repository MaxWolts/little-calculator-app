import React from 'react'
interface data {
    render: () => React.ReactNode,
    text: string,
    value: number,
    saveValue: (val:number) => void,
}

const InputWithIcon = ( {render, text, saveValue, value}:data ) => {
  const handdleInputValue = (ev:React.ChangeEvent<HTMLInputElement>) => {
    if(ev.target.value !== '') {
      if(parseFloat(ev.target.value) > 9999) {
          ev.target.value= '9999'
      }
      saveValue(parseFloat(ev.target.value))
    }
    let number= parseFloat(ev.target.value)
    saveValue(number)
  }
  return (
    <div >
      
      <label htmlFor="people" className="text-[var(--gray)] font-bold ">
        {text}
      </label>
      <div className="relative mt-1">
        {value == 0 && <label className='absolute right-0 top-[-28px] font-bold text-red-500'>Can't be zero</label>}
        <input
          type="number"
          name=""
          id="people"
          className="input-style border-2 border-white invalid:border-red-500 "
          placeholder={"0"}
          value={value === -1? '': value}
          min={1}
          step={text != 'Number of People'? "0.01": '1'}
          onChange={ handdleInputValue }
        />
        { render() }
      </div>
    </div>
  );
};

export default InputWithIcon;