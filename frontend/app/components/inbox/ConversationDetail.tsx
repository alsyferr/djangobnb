"use client"
import CustomButton from '../forms/CustomButton'

const ConversationDetail = () => {
  return (
    <>
      <div className='max-h-[400] overflow-auto flex flex-col space-y-4'>
        <div className='w-[80%] p-4 px-6  bg-gray-200 rounded-xl'>
          <p className="font-bold text-gray-500">John Doe</p>
          <p className='text-gray-700'>Hey! How are you doing today?</p>
        </div>

        <div className='w-[80%] ml-[20%] p-4 px-6  bg-blue-200 rounded-xl'>
          <p className="font-bold text-gray-500">Codest code</p>
          <p className='text-gray-700'>i am doing great</p>
        </div>
      </div>

      <div className='mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl'>
        <input
          type='text'
          placeholder='Type your message...'
          className='w-full p-2 bg-gray-200 rounded-xl'
        />
        <CustomButton 
          label="Send" 
          onClick={() => console.log('Clicked')} 
          className="w-[100px]"
        />
      </div>
    </>
  )
}

export default ConversationDetail