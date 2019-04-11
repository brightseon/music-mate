import React, { SFC } from 'react';
import MusicPlayer from '../MusicPlayer';

interface IProps {
    className : string;
}

const Thumbnail : SFC<IProps> = ({ className }) => (
    <div className={ className }>
        <MusicPlayer />
    </div>
);

export default Thumbnail;