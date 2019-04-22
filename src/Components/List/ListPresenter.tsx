import React, { SFC } from 'react';
import styles from './styles.scss';
import Item from '../Item';
import Loading from '../Loading';
import { MusicType, IDType } from '../../redux/modules/music/types';

interface IProps {
    searchMusicList : [MusicType];
    musicList : [MusicType];
    isSearching : boolean;
    addMusic : (music : MusicType) => void;
    isLoading : boolean;
};

const returnId = (idObj : IDType) : string => {
    if(idObj.videoId) return idObj.videoId;

    if(idObj.channelId) return idObj.channelId;

    if(idObj.playlistId) return idObj.playlistId;
};

const ListPresenter : SFC<IProps> = ({ searchMusicList, musicList, isSearching, addMusic, isLoading }) => (
    <div className={ styles.listBox }>
        <div className={ styles.list }>
            {
                isLoading ? <Loading /> : (
                    isSearching ? (
                        searchMusicList.map((music, idx) => {
                                console.log('ListPresetner.tsx searchMusicList music : ', music);
                                return <Item key={ `${ returnId(music.id) }` } title={ music.snippet.title } url={ music.snippet.thumbnails.default.url && music.snippet.thumbnails.default.url } addMusic={ () => addMusic(music) } />
                            }
                        )
                    ) : (
                        // <>
                        //     <Item title={ '악동 뮤지션 - 오랜날 오랜밤' } url={ '' } />
                        //     <Item title={ '악동 뮤지션 - 오랜날 오랜밤' } url={ '' } />
                        // </>
                        musicList.map(music => 
                            <Item key={ returnId(music.id) } title={ music.snippet.title } url={ music.snippet.thumbnails.default.url } />
                        )
                    )
                )
            }
            <div className={ styles.listBackground }></div>
        </div>
    </div>
);

export default ListPresenter;