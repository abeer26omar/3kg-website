import { getHomeServices } from "../../Util/http";
import { useQuery } from "@tanstack/react-query";

const OurServices = () => {
  const { data: ourServices } = useQuery({
    queryKey: ["ourServices"],
    queryFn: () => getHomeServices(),
  });

  return (
    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 justify-content-center">
      {ourServices?.map((item, index) => {
        return (
          <div
            className="col d-flex flex-column justify-content-center align-items-center text-center system"
            key={index}
          >
            <div className="icon_box mb-3">
              <div className="inner_box">
                <img src={item.icon} alt={item.title} />
              </div>
            </div>
            <h2>{item.title}</h2>
            <p className="mt-5" style={{ minHeight: "210px" }}>
              {item.brief}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default OurServices;
