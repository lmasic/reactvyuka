import clsx from 'clsx';
import PropTypes from 'prop-types';

const DataRow = ({
  text = '', strike = false, updated = false, onChange,
}) => (
  <div className={clsx('data-row', strike && 'strike')}>
    {updated
      ? (
        <input
          type="text"
          value={text}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      )
      : text}
  </div>
);

DataRow.propTypes = {
  text: PropTypes.string,
  strike: PropTypes.bool,
  updated: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default DataRow;
