import React, { SFC } from 'react';
import MusicPlayer from '../MusicPlayer';

interface IProps {
    className : string;
}

const Thumbnail : SFC<IProps> = ({ className }) => (
    <div className={ className } style={{ backgroundImage : `url('https://t1.daumcdn.net/cfile/tistory/2532224058AEC15F07')` }}>
        {/* <MusicPlayer /> */}
    </div>
);

export default Thumbnail;