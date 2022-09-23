import React from "react";

// require 一个目录或者叫文件夹

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name: string;
};

// name = money
// xlinkHref = '#money'
const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + props.name}></use>
    </svg>
  );
};

export default Icon;
