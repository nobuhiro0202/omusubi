import { useState } from 'react';


export const useInput = (initialValue?: string) => {
  const [ value, setValue ] = useState(initialValue);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
};