import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    className,
    disabled = false,
    login_small = false,
    login_big = false,
    follow = false,
    upload = false,
    get_app = false,
    leftIcon = false,
    rightIcon = false,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.to = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        login_small,
        login_big,
        follow,
        get_app,
        disabled,
        upload,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
