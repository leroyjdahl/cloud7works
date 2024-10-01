import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page Not Found</p>
      <Link to={'/lorem/donec'}><Button className='bg-black text-white'>Go to Form</Button></Link>

    </div>
  );
};

export default NotFound;