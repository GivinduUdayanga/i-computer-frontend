import { Routes, Route , Link} from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";

export default function AdminPage() {
    return (
        <div className="w-full h-full max-h-full flex bg-accent ">
            <div class="w-[300px] h-full bg-accent">

                <div className="w-full h-[100px] flex  justify-center items-center text-primary">
                    <img src="/logo2.png" className="h-full"/>
                    <h1 className="text-2xl">Admin</h1>
                </div>
                <div className="w-full h-[400px] text-primary flex flex-col ">
                    
                    <Link to="/admin"className="w-full h-[40px] gap-[10px] flex items-center"> <LuClipboardList /> Orders</Link>
                    <Link to="/admin/products"className="w-full h-[40px] gap-[10px] flex items-center"> <LuBoxes /> Products</Link>
                    <Link to="/admin/users"className="w-full h-[40px] gap-[10px] flex items-center"> <FiUsers /> Users</Link>
                    <Link to="/admin/reviews"className="w-full h-[40px] gap-[10px] flex items-center"> <MdOutlineRateReview /> Reviews</Link>
                
                </div>

            </div>
            
            <div className="w-[calc(100%-300px)] h-full max-h-full border-[5px] rounded-2xl bg-primary border-accent overflow-y-scroll">
                
                <Routes>
                    <Route path="/" element={<h1>Orders</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                </Routes>

            </div>
            

        </div>
    )
}