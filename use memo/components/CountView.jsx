import PropTypes from 'prop-types';

const CountView = ({ count = 0 }) => (
  <div className="view">
    {`Počet kliknutí:${count}`}
  </div>

);

CountView.propTypes = {
  count: PropTypes.number,
};
export default CountView;
