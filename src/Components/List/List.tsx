import React, { SFC } from 'react';
import styles from './styles.scss';
import Item from '../Item';
import { MusicType, IDType } from '../../redux/modules/music/types';

interface IProps {
    searchMusicList : [MusicType];
    musicList : [MusicType];
    isSearching : boolean;
};

const returnId = (idObj : IDType) : string => {
    if(idObj.videoId) return idObj.videoId;

    if(idObj.channelId) return idObj.channelId;

    if(idObj.playlistId) return idObj.playlistId;
};

const List : SFC<IProps> = ({ searchMusicList, musicList, isSearching }) => {
    console.log('List.tsx searchMusicList : ', searchMusicList);
    return (
        <div className={ styles.listBox }>
            <div className={ styles.list }>
                {
                    isSearching ? searchMusicList.map(({ id, snippet }, idx) => {console.log('id, snippet : ', idx, id, snippet); return <Item key={ `${ returnId(id) }` } title={ snippet.title } url={ snippet.thumbnails.default.url && snippet.thumbnails.default.url } />}) : (
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
}

export default List;