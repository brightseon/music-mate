import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    className : string;
    buttonName : SVGElement;
};

const Button : SFC<IProps> = ({ className, buttonName }) => (
    <div className={ className }>
        <img className={ styles.buttonImg } src={ `${ buttonName }` } />
    </div>
);

export default Button;