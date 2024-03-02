import React from "react";
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { getAwards } from '../../Util/http';


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
