function SideFilter({ filter, category, onClick }) {
  return (
    <div className="w-1/3 border p-5 rounded-lg shadow-2xl">
      <h6>Filter</h6>
      {category.map((item, index) => (
        <div className="flex items-center gap-2" key={index}>
          <input
            type="checkbox"
            value={item}
            checked={filter == item}
            onClick={onClick}
          />{" "}
          {item}
        </div>
      ))}
    </div>
  );
}

export default SideFilter;
