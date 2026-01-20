

const Input = ({type, name, id, borderColor, value, onChange}) => {
const colorMap = {
  blue: "focus:border-blue-500 peer-focus:text-blue-500 peer-valid:text-blue-500",
  pink: "focus:border-pink-500 peer-focus:text-pink-500 peer-valid:text-pink-500",
  green: "focus:border-green-500 peer-focus:text-green-500 peer-valid:text-green-500",
  yellow: "focus:border-yellow-500 peer-focus:text-yellow-500 peer-valid:text-yellow-500"
};

  return (
    <div className="relative mb-6">
  <input
    type={type}
    id={id}
    name={name}
    placeholder=""
    value={value}
    onChange={onChange}
    required

    className={`peer w-full border-b-2 border-gray-300 outline-0 p-2 transition-all duration-300 ${colorMap[borderColor]}`}
  />
  <label
    htmlFor={name}
    className={`cursor-pointer absolute left-2 top-2 text-gray-500 transition-all duration-300
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400
               peer-focus:-top-2 peer-valid:-top-2 ${colorMap[borderColor]}`}
  >
   Enter your {name.charAt(0).toUpperCase()+name.slice(1)}
  </label>
</div>
  )
}

export default Input