import React, { Component } from "react";

import { Link } from "react-router-dom";

import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri"
import { AiOutlineGooglePlus } from "react-icons/ai"

import './SignInComponent.scss';

class SignInComponent extends Component {
  render() {

    return (

      <div className="SignInComponent">

        <div className="SignIn-Component">

          <h1 className="SignIn-logo">LOGO</h1>

          <div className="SignIn-frame">
            
            <div className="SignIn-list">

              <div className="SignIn-id">
                <h1 className="In-id">아이디</h1>
                <input type="text" className="In-id-form" placeholder="아이디를 입력하세요" />
              </div>

              <div className="SignIn-passwd">
                <h1 className="In-passwd">비밀번호</h1>
                <input type="text" className="In-passwd-form" placeholder="비밀번호를 입력하세요" />
              </div>    
              
              <div className="signin-fail">
                <span className="find-id">아이디 찾기 | </span>
                <span className="find-passwd">비밀번호 찾기 | </span>
                <span className="Goto-SignUp">회원가입</span>
              </div>
    

            </div>  

            <Link to="/"><button className="SignIn-btn"><h1 className="SignIn-btn-text">Sign In</h1></button></Link>

            <h1 className="SignIn-other">다른 방법으로 로그인 하기</h1>

            <div className="sns-icons">
              <AiOutlineGooglePlus className="google" />
              <RiKakaoTalkFill className="kakao" />
              <SiNaver className="naver" />
            </div>
            
          </div>

        </div>
      </div>

    )

  }

}

export default SignInComponent;