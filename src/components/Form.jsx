import Logo from "./Logo";

function Form({ children, handleSubmit, withLogo = true }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full p-6 bg-white rounded-xl shadow-lg text-base md:text-lg text-[#3E445A]"
    >
      {withLogo && (
        <div className="w-fit mx-auto">
          <Logo />
        </div>
      )}

      {children}
    </form>
  );
}

export default Form;
