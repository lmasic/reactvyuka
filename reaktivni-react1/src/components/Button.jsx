import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({
  children = 'Sem rozhodně neklikat',
  className,
  large = false,
  variant,
  onClick = () => { },
}) => (
  <button
    type="button"
    className={clsx('react-button', variant, large && 'large', className)}
    onClick={() => onClick(1)}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  large: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

export default Button;
