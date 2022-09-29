import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import TagsSection from "./Money/TagsSection";
import NotesSection from "./Money/NotesSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";
import useRecords from "hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = "-" | "+";

const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const { addRecord } = useRecords();

  const onChange = (obj: Partial<typeof selected>) => {
    // 可以通过partial传入一个类型得到一个新的类型 这个类型是之前类型的部分类型
    //可以用typeof获取一个值的类型
    setSelected({
      ...selected,
      ...obj,
    });
  };

  const submit = () => {
    addRecord(selected);
    window.alert("保存成功");
    setSelected(defaultFormData);
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
        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;
