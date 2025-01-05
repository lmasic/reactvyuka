import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({
  children = 'Sem rozhodně neklikat',
  className,
  disabled = false,
  large = false,
  variant,
  onClick = () => { },
}) => (
  <button
    className={clsx('react-button', variant, large && 'large', className)}
    disabled={disabled}
    onClick={() => onClick(1)}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

export default Button;
