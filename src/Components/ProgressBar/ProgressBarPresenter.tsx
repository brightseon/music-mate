import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import MuteButton from '../../../images/buttons/muteButton.svg';
import ControlButton from '../../../images/buttons/controlButton.svg';
import SpeakerButton from '../../../images/buttons/speakerButton.svg';

interface IProps {
    volumeControl : (e : any) => void;
    volume : number;
    player : any;
    progress : number;
};

const ProgressBarPresenter : SFC<IProps> = ({ volumeControl, volume, progress }) => (
    <div className={ styles.progressBar }>
        <div className={ styles.line }>
            <div className={ styles.progress } style={{ width : `${ progress }%` }}></div>
        </div>
        <div className={ styles.volumeBox }>
            {
                volume > 70 && (
                    <Button className={ styles.volume } buttonName={ SpeakerButton } clickEvent={ volumeControl } />
                )
            }
            {
                (volume > 0 && volume < 70) && (
                    <Button className={ styles.volume } buttonName={ ControlButton } clickEvent={ volumeControl } />
                )
            }
            {
                volume === 0 && (
                    <Button className={ styles.volume } buttonName={ MuteButton } clickEvent={ volumeControl } />
                )
            }
        </div>
    </div>
);

export default ProgressBarPresenter;