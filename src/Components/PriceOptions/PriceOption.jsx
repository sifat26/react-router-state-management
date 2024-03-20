import PropTypes from "prop-types";
import Feature from "./Feature";
const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="  bg-[#F2F2F2] p-4 rounded-md shadow-lg text-center space-y-4 flex flex-col">
      <h2>
        <span className="text-7xl font-bold">{price}$</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-2xl">{name}</h4>
      <div className="pl-6 flex-grow">
        {
            features.map((feature,idx) =><Feature 
            key={idx} feature={feature}></Feature>)
        }
      </div>
        <button  className=" font-bold rounded-md py-2 w-full shadow-lg bg-green-400 hover:bg-gray-200 ">Buy Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
