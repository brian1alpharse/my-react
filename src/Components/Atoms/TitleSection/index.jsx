import React from "react";
import { Link } from "react-router-dom";

export default function TitleSection(props) {
  const { title, titleMore, lihatSemua } = props;

  return (
    <div className="flex items-center pt-10 pb-5 flex-row">
      <h1 className="text-lg text-blue-900 font-bold">{title}</h1>
      <p className="ml-2 text-sm text-blue-500 cursor-pointer" to="/products"
        onClick={lihatSemua}
      >
        {titleMore}
      </p>
    </div>
  );
}
