const Search = () => {
  return (
    <div className="flex justify-center mt-5 relative">
      <input
        id="field"
        type="text"
        placeholder="Serch food here"
        className="input input-bordered w-full max-w-xs"
      />
      <button
        id="btn"
        className="btn bg-[#ff3811] text-gray-100 absolute ml-60"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
