import './SideBarList.css';


function SideBarList() {
  // Handel Click Menu
  function handelClickMenu() {
    document.querySelector('.siadBar').classList.toggle('openSideBar');
    document.querySelector('.menu i').classList.toggle('bi-x');
  };

  // Handel Click To Class Activ
  function handelClickToClassActiv(e) {
    // Remove Class List
    const navLinks = document.querySelectorAll('.list li a');
    navLinks.forEach(element => {
      element.classList.remove('activ');
    })
    // Add Class List
    e.target.classList.add('activ');
  };

  return (
    <div className='sideBar-list'>
      <ul className='list'>
        <li onClick={handelClickToClassActiv}> <a className='activ' onClick={handelClickMenu} href="#hero"><i className="bi bi-house-door"></i>Home</a> </li>
        <li onClick={handelClickToClassActiv}> <a onClick={handelClickMenu} href="#about"><i className="bi bi-person"></i>About</a> </li>
        <li onClick={handelClickToClassActiv}> <a onClick={handelClickMenu} href="#resume"><i className="bi bi-file-earmark"></i>Resume</a> </li>
        <li onClick={handelClickToClassActiv}> <a onClick={handelClickMenu} href="#portfolio"><i className="bi bi-columns"></i>Portfolio</a> </li>
        <li onClick={handelClickToClassActiv}> <a onClick={handelClickMenu} href="#services"><i className="bi bi-hdd-stack"></i>Services</a> </li>
        <li onClick={handelClickToClassActiv}> <a onClick={handelClickMenu} href="#contact"><i className="bi bi-envelope"></i>Contact</a> </li>
      </ul>
    </div>
  )
}

export default SideBarList;
