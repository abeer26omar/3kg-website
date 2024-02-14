import React from "react";
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { getAwards } from '../../Util/http';

const awardContent = [
  {
    date: "2021",
    img: "logo-4",
    delayAnimation: "0",
    awardList: [
      {
        title: "POTY 2021",
        subTitle: "SPA Brand Redesign",
      },
      {
        title: "Design Inspiration #5",
        subTitle: "MNX Business Card",
      },
    ],
  },
  {
    date: "2020",
    img: "logo-2",
    delayAnimation: "100",
    awardList: [
      {
        title: "Websites Of The Year 2020",
        subTitle: "Lewis Studio",
      },
      {
        title: "Websites Of The Month, August 2020",
        subTitle: "Liarch Architecture Firm Website",
      },
      {
        title: "Best 20 Websites Favourite 2020",
        subTitle: "Bauhaus Arc Site",
      },
    ],
  },
  {
    date: "2019",
    img: "logo-3",
    delayAnimation: "200",
    awardList: [
      {
        title: "1st Winner Portfolio Review US 2019",
        subTitle: "Designer Logan Cee",
      },
    ],
  },
];

const Award = () => {
  
  const { data: awards } = useQuery({
    queryKey: ['awards'],
    queryFn: () => getAwards(1)
  });

  return (
    <ul
      className="ptf-rewards-list ptf-rewards-list--small"
      style={{
        "--ptf-border-width": "2px",
        "--ptf-border-color": "var(--ptf-color-black)",
      }}
    >
      {awards && awards?.items.map((val, i) => (
        <li
          className="ptf-rewards-item gap-3"
          data-aos="fade"
          data-aos-delay={(i * 100).toString()}
          key={i}
        >
          <div className="ptf-rewards-item__date">{moment(val.timestamp).format('YYYY')}</div>
          <div className="ptf-rewards-item__logo">
            <img
              src={`${val.logo}`}
              alt="brand"
              loading="lazy"
            />
          </div>
          <div className="ptf-rewards-item__content">
              <div className="ptf-rewards-project">
                <div className="ptf-rewards-project__content">
                  <h5>
                    {val.title}
                  </h5>
                  <span>{val.subtitle}</span>
                </div>
              </div>
            {/* End .ptf-rewards-project */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Award;
