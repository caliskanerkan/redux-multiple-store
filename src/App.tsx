import { SubApp } from "./sub-1/SubApp"
import { SubApp2 } from "./sub-2/SubApp2"

export const App = () => {
  return (
    <>
      <SubApp2 />
      <SubApp /> 
    </>
  )
}
