import { Button } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Blank: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <Link to={'/lorem/donec'}><Button className='bg-black text-white'>Form</Button></Link>
        </div>
    );
};

export default Blank;
