import React, { SFC, MouseEvent } from 'react';
import styles from './styles.scss';

interface IProps {
    className : string;
    buttonName : SVGElement;
    clickEvent? : (e : MouseEvent<HTMLDivElement>) => void;
};

const Button : SFC<IProps> = ({ className, buttonName, clickEvent }) => (
    <div className={ className } onClick={ clickEvent }>
        <img className={ styles.buttonImg } src={ `${ buttonName }` } />
    </div>
);

export default Button;