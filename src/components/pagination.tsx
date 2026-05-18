export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button className="px-3 py-2 border  bg-white hover:bg-gray-100">
        Prev
      </button>
      <button className="px-3 py-2 border  bg-amber-400 text-white">1</button>
      <button className="px-3 py-2 border  hover:bg-gray-100">2</button>
      <button className="px-3 py-2 border  hover:bg-gray-100">3</button>
      <button className="px-3 py-2 border  hover:bg-gray-100">4</button>
      <button className="px-3 py-2 border  hover:bg-gray-100">5</button>
      <button className="px-3 py-2 border  bg-white hover:bg-gray-100">
        Next
      </button>
    </div>
  );
}
