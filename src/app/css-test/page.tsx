export default function TestCSS() {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          CSS Test Page
        </h1>
        <p className="text-gray-700 text-xl">
          If you can see colors and styling, Tailwind CSS is working!
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Blue Button
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Green Button
          </button>
        </div>
      </div>
    </div>
  );
}
