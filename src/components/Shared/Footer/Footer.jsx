import moment from "moment";

const Footer = () => {
  return (
    <div className="py-5 border-t-2">
      <div className="container mx-auto">
        <p className="text-center">
          Copyright
          <span className="px-1">&#169;</span>
          {moment().format("YYYY")} All right reserved by PriorityPulse
        </p>
      </div>
    </div>
  );
};

export default Footer;
