import { useState } from "react";
import { asideBarConfig } from "../../siteconfig";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from '../components/ui/button'
import useMediaQuery from "../utilitis/useMediaQuery";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [toggleSubMenu, setToggleSubMenu] = useState(null)
  const [toggleSub, setToggleSub] = useState(null)
  const [smMenu, setSmMenu] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  // console.log(isMobile);
  return (
    <div className="fixed mt-16" >




      {
        isMobile && (
          <Button variant='ghost' className='text-base m-2 hover:bg-transparent text-gray-500 hover:text-gray-700'>
            <p className="flex justify-center items-center" onClick={() => setSmMenu(!smMenu)}>
              {smMenu ? <ChevronDown className="mr-2" /> : <ChevronRight className="mr-2" />} Menu
            </p>
          </Button>
        )
      }

      <aside className={
        isMobile ? "md:hidden w-full relative" : 'relative p-4 w-64 h-[100vh] hidden md:block '
      }>
        <div className="w-[1px] h-[100vh] absolute top-0 right-0 bg-gray-200 hover:bg-gray-300 hover:w-[2px] hover:cursor-e-resize" />
        <ul className='menu flex flex-col'>
          {
            asideBarConfig.map((item, iIdx) => (
              <li key={item + iIdx} className=' py-2 hover:cursor-pointer' >
                {/* need to Link tag here */}
                {/* to={item.path} */}
                <Link className={`flex justify-between font-semibold antialiased text-sm pl-1 text-left items-center ${toggleSubMenu === iIdx ? 'text-blue-500' : 'text-gray-500'} hover:text-gray-700`} onClick={(e) => {

                  e.stopPropagation()
                  toggleSubMenu === iIdx ? setToggleSubMenu(null) : setToggleSubMenu(iIdx)
                }} to={'/react-fundamentals'}>
                  <p className='h-6'> {item.title}</p>
                  {
                    item.submenu.length > 0 && (toggleSubMenu === iIdx ? <ChevronDown className=' w-4 h-4' /> : <ChevronRight className=' w-4 h-4' />)

                  }
                </Link>



                {
                  (toggleSubMenu === iIdx) && (item.submenu.length > 0) && (
                    <ul className='submenu ml-4 border-l border-l-gray-200'>
                      {
                        item.submenu.map((subItem, subIdx) => (
                          <li className={`pl-4 py-1 ${toggleSub === subIdx ? 'text-blue-400 border-l border-l-blue-500' : 'text-gray-500'} hover:text-gray-700`} key={subItem + subIdx} onClick={(e) => {

                            e.stopPropagation()
                            toggleSub === subIdx ? setToggleSub(null) : setToggleSub(subIdx)
                          }}>
                            {/* need to add Link com  */}
                            <Link to={subItem.path}>{subItem.title}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))
          }
        </ul>
      </aside>

    </div>
  );
};

export default Sidebar;
