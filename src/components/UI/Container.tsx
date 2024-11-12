import React from 'react'

interface ContainerProps {
  title: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({title, children}) => {
  return (
    <div className='lg:col-span-2'>
      <div className="sm:rounded-lg bg-gray-800 p-4 lg:p-6 space-y-4 group">

        {/* Component Title */}
        <h2 className="text-white font-bold leading-4 m-0">
          {title}
        </h2>
        
        {children}
      </div>
    </div>
  )
}

export default Container