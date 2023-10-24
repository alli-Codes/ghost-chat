export default function MessageList() {
  return (
    <div className="py-4 px-4 flex justify-between items-center border-b border-1 active:bg-gray-100">
      {/* Message Icon */}
      <div className="flex items-center gap-4">
        <div className="bg-blue-400 h-16 w-16 rounded-2xl"></div>
        {/* Message info goes here */}
        <div className="flex flex-col">
          <p className="font-bold text-lg">I miss you so much!</p>
          <p className="text-gray-800">a day ago</p>
        </div>
      </div>
      {/* Arrow Icon */}
      <div className="bg-gray-300 h-10 w-5"></div>
    </div>
  );
}
