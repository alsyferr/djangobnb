"use client"
import useWebSocket, {ReadyState} from 'react-use-websocket';
import CustomButton from '../forms/CustomButton'
import { ConversationType } from '@/app/inbox/page'
import { useEffect, useState, useRef } from 'react';
import { MessageType } from '@/app/inbox/[id]/page';
import { UserType } from '@/app/inbox/page';

interface ConversationDetailProps {
  conversation: ConversationType;
  userId: string;
  token?: string;
  messages: MessageType[];
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({conversation, userId, token, messages}) => {
  const messagesDiv = useRef(null);
  const [newMessage, setNewMessage] = useState('');
  const  myUser = conversation.users?.find((user) => user.id !== userId);
  const otherUser = conversation.users?.find((user) => user.id !== userId);
  const [realTimeMessages, setRealTimeMessages] = useState<MessageType[]>([]);
  const [oldMessages, setOldMessages] = useState<MessageType[]>([]);

 const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`, {
        share: false,
        shouldReconnect: () => true,
      },
    )


  useEffect(() => {
    console.log('connection state:', readyState);
  }, [readyState]);

  useEffect(() => {
    if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'name' in lastJsonMessage && 'body' in lastJsonMessage) {
        const message: MessageType = {
          id: '',
          name: lastJsonMessage.name as string,
          body: lastJsonMessage.body as string,
          sent_to: otherUser as UserType,
          created_by: myUser as UserType,
          conversationId: conversation.id,
        }

        setRealTimeMessages((realTimeMessages) => [...realTimeMessages, message]);
    
    }
    scrollToBottom();
  }, [lastJsonMessage]);

  const sendMessage = async () => {
    console.log('sendMessage'),

    sendJsonMessage({
      event: "chat.message",
      data: {
        body: newMessage,
        name: myUser?.name,
        sent_to_id: otherUser?.id,
        conversation_id: conversation.id,
      }

    });
    setNewMessage('');

    setTimeout(() => {
     scrollToBottom();
    }, 50)
  }

  const scrollToBottom = () => {
     if (messagesDiv.current) {
        messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
      }
  }


  return (
    <>
      <div
        ref={messagesDiv} 
        className='max-h-[400] overflow-auto flex flex-col space-y-4'>
        {/* <div className='w-[80%] p-4 px-6  bg-gray-200 rounded-xl'>
          <p className="font-bold text-gray-500">John Doe</p>
          <p className='text-gray-700'>Hey! How are you doing today?</p>
        </div>

        <div className='w-[80%] ml-[20%] p-4 px-6  bg-blue-200 rounded-xl'>
          <p className="font-bold text-gray-500">Codest code</p>
          <p className='text-gray-700'>i am doing great</p> */}
        {/* </div> */}

        {messages.map((message, index) => (
        <div 
          key={index}
          className={`w-[80%] p-4 px-6 rounded-xl ${message.created_by.name === myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}>
        
          <p className="font-bold text-gray-500">{message.created_by.name}</p>
          <p className='text-gray-700'>{message.body}</p>

        </div>
       ))}

        {realTimeMessages.map((message, index) => (
        <div 
          key={index}
          className={`w-[80%] p-4 px-6 rounded-xl ${message.name === myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}>
        
          <p className="font-bold text-gray-500">{message.name}</p>
          <p className='text-gray-700'>{message.body}</p>

        </div>
       ))}
      </div>

      

      <div className='mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl'>
        <input
          type='text'
          placeholder='Type your message...'
          className='w-full p-2 bg-gray-200 rounded-xl'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <CustomButton 
          label="Send" 
          onClick={sendMessage} 
          className="w-[100px]"
        />
      </div>
    </>
  )
}

export default ConversationDetail