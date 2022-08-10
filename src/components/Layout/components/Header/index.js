import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';

import Button from '~/components/Button'
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopOverWrapper } from '../../../PopOver';
import AccountItems from '~/components/AccountItems';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopOverWrapper>
                                <div className={cx('search-title')}>Accounts</div>
                                <AccountItems></AccountItems>
                                <AccountItems></AccountItems>
                                <AccountItems></AccountItems>
                                <AccountItems></AccountItems>
                                <AccountItems></AccountItems>
                                <AccountItems></AccountItems>
                            </PopOverWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button> 
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button upload leftIcon={<FontAwesomeIcon  icon={faPlus} />}>Upload</Button>
                    <Button login_small >Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
