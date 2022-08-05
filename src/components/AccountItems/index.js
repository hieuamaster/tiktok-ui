import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8dc676096a0f89fe7845508f9c5b607a~c5_300x300.webp?x-expires=1659855600&x-signature=ztPM6AjlSZ1JcwRS3zi86AdYRd0%3D" alt="Hieuamaster"></img>
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
