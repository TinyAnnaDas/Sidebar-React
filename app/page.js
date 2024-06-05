import Sidebar, { SidebarItem } from "./components/Sidebar";
import { faChartLine, faGauge, faUser, faReceipt, faCartShopping, faProcedures } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
      <Sidebar>

        <SidebarItem icon={<FontAwesomeIcon icon={faGauge}/>} text="Dashboard" active alert/>
        <SidebarItem icon={<FontAwesomeIcon icon={faChartLine}/>} text="Statistics" />
        <SidebarItem icon={<FontAwesomeIcon icon={faUser}/>} text="Users" />
        <SidebarItem icon={<FontAwesomeIcon icon={faProcedures}/>} text="Inventory" />
        <SidebarItem icon={<FontAwesomeIcon icon={faCartShopping}/>} text="Orders"  alert/>
        <SidebarItem icon={<FontAwesomeIcon icon={faReceipt}/>} text="Billing" />
      </Sidebar>
  );
}
