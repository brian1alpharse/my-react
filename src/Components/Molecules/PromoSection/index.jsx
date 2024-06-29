import React from "react";
import { Card, TitleSection, Banner } from "../../Atoms";
import { useNavigate } from "react-router-dom";

export default function PromoSection(props) {
  const { titleSection, titleMore, data, clickMore } = props;

  let navigate = useNavigate();

  return (
    <div>
      <TitleSection
        title={titleSection}
        titleMore={titleMore}
        lihatSemua={clickMore}
      />

      <div className="flex justify-between">
        <Banner
          title="Jangan Sampai Kehabisan!"
          sub="Promo hingga akhir bulan"
        />

        {data.map((item, index) => (
          <Card
            key={index}
            item={item}
            className="w-[16%]"
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
