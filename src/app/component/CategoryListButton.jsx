function CategoryListButton({ category }) {
  return (
    <ul
      className="flex max-w-full overflow-x-auto gap-4 overscroll-x-auto"
      style={{ scrollbarWidth: "none" }}
    >
      {category.map((item, index) => (
        <li
          key={index}
          className="border px-4 py-1 rounded-md min-w-fit scroll text-green-700 hover:bg-green-700 hover:text-white transition-all"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CategoryListButton;
