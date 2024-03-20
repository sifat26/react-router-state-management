import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <div >
            <p className="flex items-center gap-2"><FaCircleCheck/>{feature}</p>


            
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string,
  };

export default Feature;