import React, { SFC } from 'react';

interface IProps {
    className : string;
    thumbnail? : string;
};

const Thumbnail : SFC<IProps> = ({ className, thumbnail }) => 
    <div className={ className } style={{ backgroundImage : thumbnail ? `url(${ thumbnail })` : `url('https://t1.daumcdn.net/cfile/tistory/2532224058AEC15F07')` }} />

export default Thumbnail;