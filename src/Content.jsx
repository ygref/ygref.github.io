export function Content() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-gray-500 p-1">
      <h1 className="text-shadow text-black-500 font-bold text-3xl font-serif">Summary</h1>
      <div className="flex flex-wrap justify-between">
        <div className="w-1/2">
          <p className="font-serif font-bold text-lg mt-2">Languages:</p>
          <p className="italic text-lg mt-1">Ruby, JavaScript, HTML, CSS, SQL</p>
        </div>
        <div className="w-1/2">
          <p className="font-serif font-bold text-lg mt-2">Frameworks/Libraries:</p>
          <p className="italic text-lg mt-1">Ruby on Rails, React.js, Bootstrap, Tailwind, Puppeteer</p>
        </div>
        <div className="w-1/2">
          <p className="font-serif font-bold text-lg mt-2">Databases/Tools:</p>
          <p className="italic text-lg mt-1">Postgres, APIs, Node/npm, Git, GitHub, CLI</p>
        </div>
      </div>
    </div>
  );
}
export default Content;
