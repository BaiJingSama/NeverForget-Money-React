import { useEffect, useState } from "react";
import useUpdate from "./useUpdate";

export type RecordItem = {
  tagIds: number[];
  note: string;
  category: "+" | "-";
  amount: number;
  createdAt: string; // ISO 8601
};

type newRecordItem = Omit<RecordItem, "createdAt">;
// 这个函数的意思是 第一个参数为类型，第二个参数为舍弃的某一项
// 连在一起就是忽略第一个参数类型里的第二个参数的这一项，然后把剩余参数作为新的类型
// 如果有多个需要舍弃的项目 用 | 隔开即可
const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      alert("请输入金额");
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      window.alert("请选择标签");
      return false;
    }
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    setRecords([...records, record]);
    return true;
  };

  return { records, addRecord };
};

export default useRecords;
