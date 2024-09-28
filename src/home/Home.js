import { ContentComponent, SideBarComopnent } from '../components/ComponentRoute';
import { useRef } from 'react';
import './Home.css';



function Home() {

    const icon = useRef();

    // Handel Click Menu
    function handelClickMenu() {
        document.querySelector('.siadBar').classList.toggle('openSideBar');
        icon.current.classList.toggle('bi-x');
    };

    return (
        <div className='home'>
            <span className='overlay'></span>
            <div onClick={handelClickMenu} className='menu'>
                <i ref={icon} className="bi bi-list"></i>
            </div>
            <div className='home-content'>
                <SideBarComopnent />
                <ContentComponent />
            </div>
        </div>

    )
}

export default Home
