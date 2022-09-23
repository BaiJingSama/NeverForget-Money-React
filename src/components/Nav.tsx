import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
require("icons/money.svg");
require("icons/tag.svg");
require("icons/chart.svg");

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
      width: 33.333333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 4px; 0;
      justify-content: center;
      align-items: center;
      > .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const X = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg fill="skyblue" className="icon">
            <use xlinkHref="#tag"></use>
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg fill="skyblue" className="icon">
            <use xlinkHref="#money"></use>
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg fill="skyblue" className="icon">
            <use xlinkHref="#chart"></use>
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default X;
