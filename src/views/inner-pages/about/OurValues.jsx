import audio from "../../../assets/img/audio-essential-volume-svgrepo-com.svg";
import video from "../../../assets/img/video-svgrepo-com.svg";
import graphics from "../../../assets/img/image-04-svgrepo-com.svg";
import educ from "../../../assets/img/book-open-svgrepo-com.svg";
import { useQuery } from "@tanstack/react-query";
import { getValues } from "../../../Util/http";

const OurValues = () => {
  const { data: values } = useQuery({
    queryKey: ["our-values"],
    queryFn: () => getValues(),
  });

  return (
    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
      {values?.map((item, index) => {
        return (
          <div
            className="col d-flex flex-column justify-content-center align-items-center text-center system values"
            key={index}
          >
            <div className="icon_box mb-3">
              <div className="inner_box" style={{ backgroundColor: "#ffffff" }}>
                <img src={item.icon} alt={item.title} />
              </div>
            </div>
            <h2 className="mb-5">{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default OurValues;
