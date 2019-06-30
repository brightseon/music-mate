import React, { SFC } from 'react';

interface IProps {
    className : string;
    thumbnail? : string;
};

const Thumbnail : SFC<IProps> = ({ className, thumbnail }) => 
    <div className={ className } style={ thumbnail ? { backgroundImage : `url(${ thumbnail })` } : { backgroundColor : 'black' } } />

export default Thumbnail;