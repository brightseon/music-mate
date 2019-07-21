import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import Slider from '../Slider';
import MuteButton from '../../../images/buttons/muteButton.svg';
import ControlButton from '../../../images/buttons/controlButton.svg';
import SpeakerButton from '../../../images/buttons/speakerButton.svg';

interface IProps {
    volume : number;
    toggleMute : () => void;
    settingVolume : (volume : number) => void;
};

const buttonName = (volume : number) => {
    if(volume === 0) {
        return MuteButton;
    } else if(0 < volume && volume < 70) {
        return ControlButton;
    } else if(70 < volume) {
        return SpeakerButton;
    }
}

const VolumePresenter : SFC<IProps> = ({ volume, toggleMute, settingVolume }) => (
    <div className={ styles.volumeBox }>
        <Button className={ styles.volume } buttonName={ buttonName(volume) } clickEvent={ toggleMute } />
        <Slider className={ styles.volumeControl } volume={ volume } settingVolume={ settingVolume } />
    </div>
);

export default VolumePresenter;