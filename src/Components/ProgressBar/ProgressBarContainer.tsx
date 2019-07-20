import React, { SFC, useState, useEffect } from 'react';
import ProgressBarPresenter from './ProgressBarPresenter';

interface IProps {
    player : any;
    progress : number;
};

const ProgressBarContainer : SFC<IProps> = ({ player, progress }) => {
    return (
        <ProgressBarPresenter player={ player } progress={ progress } />
    );
};

export default ProgressBarContainer;