import Layout from "components/Layout";
import React from "react";
import useTags from "useTags";
import styled from "styled-components";
import Icons from "components/Icons";
import { Link } from "react-router-dom";

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;

    margin: 0 16px;
    > a {
      display: flex;
      padding: 12px 0;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background: skyblue;
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Space = styled.div`
  height: 16px;
`;

function Tags() {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>
            <Link to={"/tags/ " + tag}>
              <span>{tag}</span>
              <Icons name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
