import EmergencyTab from "../components/emergency";
import HomeHeader from "../components/homeheader";
import Navbar from "../components/nav";
import { useState } from "react";
const HomeLayout = (props) =>{
    const [isEmergencyTabVisible, setEmergencyTabVisible] = useState(false);

    const toggleEmergencyTab = () => {
        setEmergencyTabVisible(!isEmergencyTabVisible);
    }
    return(
        <main className="h-[100vh] px-[5px]">
            <HomeHeader/>
            <h1>Hey User</h1>
            {props.children}
            <Navbar toggleEmergencyTab={toggleEmergencyTab} />
            <EmergencyTab isVisible={isEmergencyTabVisible} />

        </main>
    )
}
export default HomeLayout