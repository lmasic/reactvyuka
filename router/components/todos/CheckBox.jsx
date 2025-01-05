import PropTypes from 'prop-types';

const CheckBox = ({ checked = false, onChange }) => {
  console.log('🚀 ~ file: CheckBox.jsx:4 ~ CheckBox ~ checked:', checked);
  return (
    <input type="checkbox" checked={checked} onChange={onChange} />
  );
};
CheckBox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
