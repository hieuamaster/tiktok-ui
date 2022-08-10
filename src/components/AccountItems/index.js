import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3fda2cca3e9257c62e6fb3b8e9710184~c5_100x100.jpeg?x-expires=1660269600&x-signature=dVkVfTr1AvQUJqWUH9%2FSQmNOaZs%3D" alt="Hieuamaster"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('desc')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

export default AccountItems;
