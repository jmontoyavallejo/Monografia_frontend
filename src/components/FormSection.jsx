import { FormSelect } from "./FormSelect";

export const FormSection = ({ category }) => {
  const { category_name, selects } = category;
  return (
    <>
      <section className="container px-10 mt-5">
        <h2 className="text-2xl font-bold mb-4">{category_name}</h2>
        <hr />
        <div className="container pt-2 pb-6">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 w-full">
            {
              selects.map(select => (
                <FormSelect select={select} key={select.key}/>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
