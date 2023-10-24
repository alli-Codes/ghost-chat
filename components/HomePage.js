export default function HomePage(prop) {
  return (
    <div className=" flex flex-col items-center">
      <div className="bg-gray-100 px-5 py-1 flex items-center gap-2 rounded-full relative">
        <b>{prop.username}</b>
        <div className="h-10 w-10 bg-black rounded-full"></div>
      </div>
    </div>
  );
}
