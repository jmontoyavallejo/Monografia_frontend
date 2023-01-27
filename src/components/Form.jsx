import { useEffect } from "react"
import { clearForm, data, handleSubmit, randomizeValues } from "../helpers"
import { FormSection } from "./FormSection"

export const Form = () => {

  useEffect(() => {
    clearForm()
  }, [])
  

  return (
    <>
      <div className="container mx-auto py-4">
        <form className="pb-4" onSubmit={handleSubmit}>
          <div className="flex justify-around">
            <button className="bg-transparent hover:bg-[#cf3420] text-[#cf3420] font-semibold hover:text-white py-2 px-4 border border-[#cf3420] hover:border-transparent rounded" type="submit">Predecir C.A.C</button>
            <button className="bg-transparent hover:bg-[#cf3420] text-[#cf3420] font-semibold hover:text-white py-2 px-4 border border-[#cf3420] hover:border-transparent rounded" type="button" onClick={() => randomizeValues()}>Ingresar datos aleatorios</button>
            <button className="bg-transparent hover:bg-[#cf3420] text-[#cf3420] font-semibold hover:text-white py-2 px-4 border border-[#cf3420] hover:border-transparent rounded" type="button" onClick={clearForm}>Limpiar datos</button>
          </div>
          {
            data.categories.map(category => (
              <FormSection category={category} key={category.category_name} />
            ))
          }
        </form>
      </div>
    </>
  )
}
