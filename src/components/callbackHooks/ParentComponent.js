import React, { useState, useCallback } from 'react'
import Button from '../callbackHooks/Button'
import Count from '../callbackHooks/Count'
import Title from '../callbackHooks/Title'

function ParentComponent() {
  const [age, setAge] = useState(25)
  const [salari, setSalari] = useState(50000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalari = useCallback(() => {
    setSalari(salari + 1000)
  }, [salari])

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salari} />
      <Button handleClick={incrementSalari}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
