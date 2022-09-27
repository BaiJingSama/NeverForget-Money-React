import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import TagsSection from "./Money/TagsSection";
import NotesSection from "./Money/NotesSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = "-" | "+";

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });

  const onChange = (obj: Partial<typeof selected>) => {
    // 可以通过partial传入一个类型得到一个新的类型 这个类型是之前类型的部分类型
    //可以用typeof获取一个值的类型
    setSelected({
      ...selected,
      ...obj,
    });
  };
  return (
    <MyLayout>
      {selected.note}
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NotesSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={() => {}}
      />
    </MyLayout>
  );
}

export default Money;
