import React, { SFC, Ref } from 'react';
import styles from './styles.scss';
import Item from '../Item';
import Loading from '../Loading';
import { MusicType, IDType } from '../../redux/modules/music/types';

interface IProps {
    searchMusicList : [MusicType];
    musicList : [MusicType];
    isSearching : boolean;
    addMusic : (music : MusicType) => void;
    listBoxRef : Ref<HTMLDivElement>;
    listRef : Ref<HTMLDivElement>;
    playMusic : (music : MusicType) => void;
};

const returnId = (idObj : IDType) : string => {
    if(idObj.videoId) return idObj.videoId;

    if(idObj.channelId) return idObj.channelId;

    if(idObj.playlistId) return idObj.playlistId;
};

const ListPresenter : SFC<IProps> = ({ searchMusicList, musicList, isSearching, addMusic, listBoxRef, listRef, playMusic }) => (
    <div className={ styles.listBox } ref={ listBoxRef }>
        <div className={ styles.list } ref={ listRef }>
            {
                isSearching ? (
                    <>
                        {
                            searchMusicList.map(music => 
                                <Item key={ `${ music.snippet.channelId }_${ returnId(music.id) }` } idx={ returnId(music.id) } title={ music.snippet.title } 
                                    url={ music.snippet.thumbnails.medium.url ? music.snippet.thumbnails.medium.url : music.snippet.thumbnails.default.url } 
                                    addMusic={ () => addMusic(music) } />
                            )
                        }
                        <Loading />
                    </>
                ) : (
                    musicList.length > 0 ? (
                        musicList.map(music => 
                            <Item key={ returnId(music.id) } idx={ returnId(music.id) } title={ music.snippet.title } url={ music.snippet.thumbnails.medium.url }
                                musicStarted={ () => playMusic(music) } playMusic={ playMusic } />
                        )
                    ) : (
                        <div className={ styles.emptyMusicListBox }>
                            <span>재생 가능한 노래가 없습니다.</span>
                            <span className={ styles.last }>검색을 통해 노래를 추가해 주세요.</span>
                        </div>
                    )
                )
            }
            <div className={ styles.listBackground }></div>
        </div>
    </div>
);

export default ListPresenter;