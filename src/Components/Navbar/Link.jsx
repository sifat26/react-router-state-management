import PropTypes from 'prop-types'
const Link = ({route}) => {
  return (
    <li className="lg:mr-14 px-4 py-2 hover:bg-slate-300 rounded-md ">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.proptypes={
    route:PropTypes.object
}

export default Link;
