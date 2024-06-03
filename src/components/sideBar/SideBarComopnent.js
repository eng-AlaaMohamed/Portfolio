import { SideBarList, SideBarPersonInfo } from '../ComponentRoute';
import SideBarFooter  from './sideBarFooter';
import './SiadBarStyle.css';

function SideBarComopnent() {
  return (
    <div className='siadBar'>
      <SideBarPersonInfo />
      <SideBarList />
      <SideBarFooter />
    </div>
  )
}

export default SideBarComopnent;
