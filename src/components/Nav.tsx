import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";
import Icon from "./Icons";

const NavWrapper = styled.nav`
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
      width: 33.333333%;
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        color: #666;
        > .icon {
          width: 24px;
          height: 24px;
          fill: #666;
        }
        &.selected {
          color: skyblue;
          font-size: 18px;
          .icon {
            fill: skyblue;
            width: 26px;
            height: 26px;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money"  activeClassName="selected">
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags"  activeClassName="selected">
            <Icon name="tag" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
