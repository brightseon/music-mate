import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    className : string;
}

const Thumbnail : SFC<IProps> = ({ className }) => 
    <div className={ className } style={{ backgroundImage : `url('https://t1.daumcdn.net/cfile/tistory/2532224058AEC15F07')` }} />

export default Thumbnail;