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
};

const ProgressBarPresenter : SFC<IProps> = ({ volumeControl, volume }) => (
    <div className={ styles.progressBar }>
        <div className={ styles.line }>
            <div className={ styles.circle }></div>
        </div>
        <div className={ styles.volumeBox }>
            {
                volume > 70 && (
                    <Button className={ '' } buttonName={ SpeakerButton } clickEvent={ volumeControl } />
                )
            }
            {
                (volume > 0 && volume < 70) && (
                    <Button className={ '' } buttonName={ ControlButton } clickEvent={ volumeControl } />
                )
            }
            {
                volume === 0 && (
                    <Button className={ '' } buttonName={ MuteButton } clickEvent={ volumeControl } />
                )
            }
        </div>
    </div>
);

export default ProgressBarPresenter;