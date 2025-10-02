function FormRow({
  children,
  id,
  type,
  register,
  error,
  placeholder,
  element = "input",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`text-sm font-medium  capitalize ${
          error ? "third-color" : "text-[#3E445A]"
        }`}
      >
        {children || type}
      </label>

      {element === "input" ? (
        <input
          id={id}
          type={type}
          {...register}
          className={`bg-[#ECECF0] rounded-md px-4 py-2 outline-none focus:ring-2 ${
            error ? "focus:ring-[var(--third-color)]" : "focus:ring-black"
          } transition-all duration-300 shadow-sm`}
          placeholder={placeholder}
        />
      ) : (
        <select
          id={id}
          {...register}
          className={`border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2  w-fit`}
        >
          <option value={"Author"}>Author</option>
          <option value="Editor">Editor</option>
        </select>
      )}

      {error && (
        <span className="text-xs font-bold w-max px-2 py-1 third-color bg-red-100 rounded-md ">
          {error.message}
        </span>
      )}
    </div>
  );
}

export default FormRow;
