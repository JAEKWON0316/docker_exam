import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import { MdNavigateNext } from "react-icons/md";
import { RiGithubFill, RiInstagramFill, RiKakaoTalkFill, RiGoogleFill  } from "react-icons/ri";

const Navigation = () => {

    //변수 선언 및 초기화
    const [ actItem, setActItem ] = useState('about');
    const handleClick = (navItem) => {
        setActItem(navItem);
    }

  return (
     //actItem이 about이면 action해주고 아니면 null해준다. onClick 함수 호출할 땐 매개변수 안에 담아줘야한다 onClick ={() => }
    <div className="navi">
        <img src={Logo} className="logo" alt="logo" />
        <h4 className="hello">Hello, Associate Developer<br /> jack's Page</h4>
        <div className="navbox">
            <a href="#about" className={`nav-tems ${actItem === 'about' ? 'action' : ''}`}
                        onClick={() => handleClick('about')}> 
                <span /><MdNavigateNext /> about me 
            </a>
            <a href="#experience" className={`nav-tems ${actItem === 'experience' ? 'action' : ''}`}
                        onClick={() => handleClick('experience')}>  
                <span /><MdNavigateNext /> my experience
            </a>
            <a href="#history" className={`nav-tems ${actItem === 'history' ? 'action' : ''}`}
                        onClick={() => handleClick('history')}>
                <span /><MdNavigateNext /> my history
            </a>
            <a href="#projects" className={`nav-tems ${actItem === 'projects' ? 'action' : ''}`}
                        onClick={() => handleClick('projects')}>
                <span /><MdNavigateNext /> my projects
            </a>
        </div>
        <div className="text-center mt-5 mb-4">
            <img src="images/left-background.png" className="img-fluid" />
        </div>
        <div className="text-center snsbox">
            <a href="#" className="github"><RiGithubFill /></a>
            <a href="#" className="insta"><RiInstagramFill /></a>
            <a href="#" className="kakao"><RiKakaoTalkFill /></a>
            <a href="#" className="google"><RiGoogleFill /></a>
        </div>
    </div>
  )
}

export default Navigation