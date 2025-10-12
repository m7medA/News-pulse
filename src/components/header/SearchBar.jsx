import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  function onSubmit({ query }) {
    if (!query.trim()) {
      reset();
    } else {
      navigate(`/searchresultpage/${query}`);
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-3 w-full lg:w-[60%] px-4 py-2.5 
    bg-white border border-gray-200 rounded-xl 
    shadow-sm hover:shadow-md hover:border-[var(--primary-color)] 
    transition-all duration-300 ease-in-out"
    >
      <label htmlFor="search" className="flex items-center justify-center">
        <IoSearch
          className="text-[var(--primary-color)] opacity-90 hover:opacity-100 transition-all duration-200"
          size={22}
        />
      </label>

      <input
        type="text"
        id="search"
        {...register("query")}
        placeholder="Looking for something specific?"
        className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-700 text-sm md:text-base"
      />
    </form>
  );
}

export default SearchBar;
