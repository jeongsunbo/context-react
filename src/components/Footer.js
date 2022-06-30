import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const onClickDark = () => {
        setIsDark(!isDark)

    }
    return (
        <div className={isDark ? 'footer dark' : 'footer'}>
            <button onClick={onClickDark}>다크모드</button>
        </div>
    );
};

export default Footer;