import persoPic from '../../../images/pic.png';
import './SideBarPersonInfo.css';

function SideBarPersonInfo() {
  return (
    <>
      <div className='user-info'>
        <div className='person-image'>
          <img src={persoPic} alt='Person Image' />
        </div>
        <h2 className='person-name'>Alaa Mohamed</h2>
      </div>

      <ul className='person-social'>
        <li>
          <a href='https://www.facebook.com/profile.php?id=100014358612772' target='_blank'> <i className="bi bi-facebook"></i></a>
        </li>
        <li>
          <a href='https://github.com/eng-AlaaMohamed' target='_blank'><i className="bi bi-github"></i></a>
        </li>
        <li>
          <a href='https://linkedin.com/in/alaa-mohamed-871ab82a2' target='_blank'><i className="bi bi-linkedin"></i></a>
        </li>
        <li>
          <a href='mailto:eng.a.mohamed.ali@gmail.com' target='_blank'><i className="bi bi-envelope"></i></a>
        </li>
      </ul>
    </>
  )
}

export default SideBarPersonInfo;
