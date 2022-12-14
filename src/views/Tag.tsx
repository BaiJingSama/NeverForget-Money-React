import Button from "components/Button";
import Icon from "components/Icons";
import Layout from "components/Layout";
import React from "react";
import { useParams,useHistory } from "react-router-dom";
import styled from "styled-components";
import useTags from "hooks/useTags";
import Input from "components/Input";
import Center from "components/Center";
import Space from "components/Space";

type Params = {
  id: string;
};

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags();
  let { id: idString } = useParams<Params>();

  const tag = findTag(parseInt(idString));

  const history = useHistory()
  const onClickBack = () => {
    // window.history.back();
    history.goBack()
  };

  return (
    <Layout>
      <Topbar>
        <Icon name="left" className="jack" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag ? (
        <div>
          <InputWrapper>
            <Input
              label="标签名"
              type="text"
              placeholder="标签名"
              value={tag.name}
              onChange={(e) => {
                updateTag(tag.id, { name: e.target.value });
              }}
            />
          </InputWrapper>
          <Center>
            <Space />
            <Space />
            <Space />
            <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
          </Center>
        </div>
      ) : (
        <Center>当前标签不存在</Center>
      )}
    </Layout>
  );
};

export default Tag;
