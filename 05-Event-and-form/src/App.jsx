import React from 'react'
import OnClick_01 from './assets/Event/OnClick_01'
import OnChange_02 from './assets/Event/OnChange_02'
import OnSubmit_03 from './assets/Event/OnSubmit_03'
import PassingArgument_04 from './assets/Event/PassingArgument_04'

const App = () => {
  return (
    <>
      <OnClick_01 />
      <br />
      <br />
      <br />
      <OnChange_02 />
      <br />
      <br />
      <br />
      <OnSubmit_03 />
      <br />
      <br />
      <br />
      <PassingArgument_04 name={"pratik"} />
    </>
  )
}

export default App