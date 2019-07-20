import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import MuteButton from '../../../images/buttons/muteButton.svg';
import ControlButton from '../../../images/buttons/controlButton.svg';
import SpeakerButton from '../../../images/buttons/speakerButton.svg';
import VolumeControl from '../Volume';
import { OFF, REPEAT_ALL, REPEAT_ONE } from '../../types/commonTypes';
import RepeatButton from '../../../images/buttons/repeatButton.svg';
import RepeatActiveButton from '../../../images/buttons/repeatActiveButton.svg';
import RepeatOneButton from '../../../images/buttons/repeatOneButton.svg';
import RandomButton from '../../../images/buttons/randomPlay.svg';
import RandomActiveButton from '../../../images/buttons/randomPlayActiveButton.svg';

interface IProps {
    volumeControl : (e : any) => void;
    volume : number;
    player : any;
    progress : number;
};

const ProgressBarPresenter : SFC<IProps> = ({ volumeControl, volume, progress }) => (
    <div className={ styles.progressBar }>
        <div>
            {/* {
                repeatState === OFF && (
                    <Button className={ styles.repeatButton } buttonName={ RepeatButton } /* clickEvent={ changeRepeatState } />
                )
            } */}
            {/* {
                repeatState === REPEAT_ALL && (
                    <Button className={ styles.repeatButton } buttonName={ RepeatActiveButton } clickEvent={ changeRepeatState } />
                )
            }
            {
                repeatState === REPEAT_ONE && (
                    <Button className={ styles.repeatButton } buttonName={ RepeatOneButton } clickEvent={ changeRepeatState } />
                )
            } */}
        </div>
        <div className={ styles.line }>
            <div className={ styles.progress } style={{ width : `${ progress }%` }}></div>
        </div>
        {/* <div className={ styles.buttonBox }>
            <Button className={ styles.randomButton } buttonName={ isRandom ? RandomActiveButton : RandomButton } /* clickEvent={ toggleIsRandom } />
        </div> */}
        {/* <div className={ styles.volumeBox }>
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
            <VolumeControl />
        </div> */}
    </div>
);

export default ProgressBarPresenter;