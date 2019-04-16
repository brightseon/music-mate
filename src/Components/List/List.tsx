import React, { SFC } from 'react';
import styles from './styles.scss';
import Item from '../Item';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    musicList : [MusicType];
};

const List : SFC<IProps> = ({ musicList }) => (
    <div className={ styles.listBox }>
        <div className={ styles.list }>
            {
                musicList ? musicList.map(music => <Item key={ `${ music.id.videoId }` } title={ music.snippet.title } url={ music.snippet.thumbnails.default.url } />) : (
                    <>
                        <Item title={ '악동 뮤지션 - 오랜날 오랜밤' } url={ '' } />
                        <Item title={ '악동 뮤지션 - 오랜날 오랜밤' } url={ '' } />
                    </>
                )
            }
            <div className={ styles.listBackground }></div>
        </div>
    </div>
);

export default List;