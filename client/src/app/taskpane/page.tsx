"use client";

export default function Taskpane() {
  const handleClick = () => {
    Office.context.mailbox.item?.notificationMessages.replaceAsync("myMessage", {
      type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
      message: "⚠️ Đây là email đáng ngờ (phishing test)!", 
      icon: "icon16", 
      persistent: true 
    });
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Kiểm tra email
      </button>
    </div>
  );
}

