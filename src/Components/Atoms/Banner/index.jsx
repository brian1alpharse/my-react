import React from "react";

export default function Banner(props) {
  const { title, sub} = props;

  return (
    <div
      className={[
        `group h-60 w-2/5 mr-3 overflow-hidden p-4 border rounded-lg`,
      ]}
    >
      <div className="pt-2">
        <p className="text-lg text-black">{title}</p>
        <p className="text-sm">{sub}</p>
      </div>
    </div>
  );
}
