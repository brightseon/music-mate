import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import Duration from '../Duration';
import MuteButton from '../../../images/buttons/muteButton.svg';
import ControlButton from '../../../images/buttons/controlButton.svg';
import SpeakerButton from '../../../images/buttons/speakerButton.svg';
import VolumeControl from '../Volume';

interface IProps {
    player : any;
    repeatState : string;
    changeRepeatState : () => void;
    isRandom : boolean;
    toggleIsRandom : () => void;
};

const MusicOptionPresenter : SFC<IProps> = ({ player, repeatState, changeRepeatState, isRandom, toggleIsRandom }) => (
    <div className={ styles.musicOption }>
        {/* <div className={ styles.volumeBox }>
            {
                volume > 70 && (
                    <Button className={ styles.volume } buttonName={ SpeakerButton } />
                )
            }
            {
                (volume > 0 && volume < 70) && (
                    <Button className={ styles.volume } buttonName={ ControlButton }  />
                )
            }
            {
                volume === 0 && (
                    <Button className={ styles.volume } buttonName={ MuteButton } />
                )
            }
            <VolumeControl />
        </div> */}
        <Duration player={ player } />
    </div>
);

export default MusicOptionPresenter;