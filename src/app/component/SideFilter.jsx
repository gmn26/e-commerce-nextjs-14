function SideFilter() {
  return (
    <div className="w-1/3 border p-5 rounded-lg shadow-2xl">
      <h6>Filter</h6>
      <div className="flex items-center gap-2">
        <input type="checkbox" /> All
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" /> Elektronik
      </div>
    </div>
  );
}

export default SideFilter;
