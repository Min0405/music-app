import React, { Component } from "react";
import { Link } from "react-router-dom";

import './SignUpComponent.scss';

class SignUpComponent extends Component {
  render() {

    return (

      <div className="SignUpComponent">

        <div className="SignUp-Component">

          <h1 className="SignUp-logo">LOGO</h1>

          <div className="SignUp-frame">
            
            <div className="SignUp-list">

              <div className="SignUp-email">
                <h1 className="email">이메일</h1>
                <input type="text" className="email-form" placeholder="이메일을 입력하세요" />
              </div>

              <div className="SignUp-id">
                <h1 className="id">아이디</h1>
                <input type="text" className="id-form" placeholder="아이디를 입력하세요" />
              </div>

              <div className="SignUp-passwd">
                <h1 className="passwd">비밀번호</h1>
                <input type="text" className="passwd-form" placeholder="비밀번호를 입력하세요" />
              </div>      

              <div className="SignUp-passwd-check">
                <h1 className="passwd-check">비밀번호 확인</h1>
                <input type="text" className="passwd-check-form" placeholder="비밀번호를 다시 입력하세요" />
              </div>   

            </div>  

            <Link to="/signin"><button className="SignUp-btn"><h1 className="SignUp-btn-text">Sign Up</h1></button></Link>
            
          </div>

        </div>

      </div>

    )

  }

}

export default SignUpComponent;