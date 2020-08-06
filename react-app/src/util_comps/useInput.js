import {useState} from "react";


function useInput(initVal) {
  const [value ,setValue] = useState(initVal);
  const reset = () => {
    setValue(initVal)
  }

  const bind = {
    value,
    onChange:e => {
      setValue(e.target.value)
    }
  }

  return [value,bind,reset]
}

export default useInput;