import logo from "../assets/images/logo.svg"
import NavigationSvgs from "./NavigationSvgs";
import avatar from "../assets/images/image-avatar.png"
import { motion } from "framer-motion"

function Header() {
    return (
        <motion.header
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="bg-headerBg py-[20px]  rounded-[8px] xl:h-[90vh] xl:w-[100px] xl:mt-[40px]  ">
            <div className="container xl:px-[0%]">
                <nav className="flex justify-between items-center xl:flex-col xl:h-[80vh] ">
                    <div><img className="w-[30px] h-[25px] cursor-pointer" src={logo} alt="" /></div>
                    <NavigationSvgs />
                    <div><img className="w-[30px] cursor-pointer rounded-[50%] border border-[#FFF] border-solid" src={avatar} alt="" /></div>
                </nav>
            </div>
        </motion.header>
    );
}

export default Header;
