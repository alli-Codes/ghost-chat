import MessageList from "./MessageList";

export default function InboxPage() {
  return (
    <div className="h-screen w-screen py-10 flex flex-col overflow-hidden">
      <div className="overflow-scroll">
        <MessageList />
        <MessageList />
        <MessageList />
        <MessageList />
        <MessageList />
        <MessageList />
        <MessageList />
        <MessageList />
        <MessageList />
        <MessageList />
      </div>
    </div>
  );
}
