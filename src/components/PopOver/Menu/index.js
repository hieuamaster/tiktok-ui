import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopOverWrapper } from '~/components/PopOver';
import MenuItems from './MenuItems';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
    };
    return (
        <Tippy
            delay ={[0,700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopOverWrapper className={cx('menu-popover')}>{renderItems()}</PopOverWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
