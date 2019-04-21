import React, { SFC } from 'react';

interface IProps {
    className : string;
    thumbnail? : string;
};

const Thumbnail : SFC<IProps> = ({ className, thumbnail = 'https://t1.daumcdn.net/cfile/tistory/2532224058AEC15F07' }) => 
    <div className={ className } style={{ backgroundImage : `url(${ thumbnail })` }} />

export default Thumbnail;