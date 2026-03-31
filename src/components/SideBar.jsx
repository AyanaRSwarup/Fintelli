import React from 'react'
import { BookText, HandCoins, BanknoteArrowDown, ChartNoAxesCombined, Settings, Menu } from 'lucide-react'
import { useLocation, Outlet } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    const path = location.pathname;
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
    <div >
        <div className={`bg-secondary z-10 w-70 h-screen fixed left-0 top-0 px-6 py-10 flex-col items-center gap-10 transition-transform duration-300 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div>
                <h1 className='text-3xl text-white tracking-tighter'>Fintelli</h1>
                <p className='text-primary tracking-widest text-sm'>WEALTH MANAGEMENT</p>
            </div>
            <div className='pt-15 flex flex-col gap-4 text-neutral focus:primary'>
                <div className={`flex gap-4 p-3 rounded-xl transition-all duration-300 ${path === "/dashboard" ? "bg-neutral/50 text-primary" : "hover:bg-neutral/50 hover:text-primary transition-colors"}`}>
                    <BookText />
                    <a href='/dashboard' className='text-md font-medium'>Overview</a>
                </div>
                <div className={`flex gap-4 p-3 rounded-xl transition-all duration-300 ${path === "/savings" ? "bg-neutral/50 text-primary" : "hover:bg-neutral/50 hover:text-primary transition-colors"}`}>
                    <HandCoins />
                    <a href='/savings' className='text-md font-medium'>Savings</a>
                </div>
                <div className={`flex gap-4 p-3 rounded-xl transition-all duration-300 ${path === "/debts" ? "bg-neutral/50 text-primary" : "hover:bg-neutral/50 hover:text-primary transition-colors"}`}>
                    <BanknoteArrowDown />
                    <a href='/debts' className='text-md font-medium'>Debts</a>
                </div>
                <div className={`flex gap-4 p-3 rounded-xl transition-all duration-300 ${path === "/optimize" ? "bg-neutral/50 text-primary" : "hover:bg-neutral/50 hover:text-primary transition-colors"}`}>
                    <ChartNoAxesCombined />
                    <a href='/optimize' className='text-md font-medium'>Optimize</a>
                </div>
                <div className={`flex gap-4 p-3 rounded-xl transition-all duration-300 ${path === "/settings" ? "bg-neutral/50 text-primary" : "hover:bg-neutral/50 hover:text-primary transition-colors"}`}>
                    <Settings />
                    <a href='/settings' className='text-md font-medium'>Settings</a>
                </div>
            </div>
            
        </div>
        <div className='bg-white shadow-md h-15 md:ml-70 '>
            <button className='pt-5 pl-5 md:hidden' onClick={() => setIsOpen(true)}>
                <Menu />
            </button>
        </div>
        <div className={`inset-0 bg-black/50 transition-all duration-300 ${isOpen ? "fixed" : "hidden"}`} onClick={()=>{setIsOpen(false)}}>

        </div>
        <div className='md:ml-70'>  {/* same margin as navbar */}
            <Outlet />
        </div>
    </div>
    </>
  )
}

export default SideBar