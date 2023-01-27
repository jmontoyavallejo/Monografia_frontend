
export const FormSelect = ({ select }) => {
  const { key, options,name } = select;
  let flag = options.length === 2 && typeof(options[0]) === 'number';
  return (
    <>
      <div className="flex justify-between px-5 pt-2">
        <label htmlFor={key}>{name}</label>
        <select name={key} className="w-60 border bg-gray-100 rounded-md text-gray-700">
          <option value="" disabled>Select</option>

          {
            flag === true ? 
            (
              <>
                <option value="1.0">Yes</option>
                <option value="0.0">No</option>
              </>
            )
            :
            options.map( option => (
              <option key={option} value={option}>{option}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}
