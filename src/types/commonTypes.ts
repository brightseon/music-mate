export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const OFF = 'OFF';
export const REPEAT_ALL = 'REPEAT_ALL';
export const REPEAT_ONE = 'REPEAT_ONE';

export type MOVE_MUSIC_TYPE = typeof NEXT | typeof PREV;
export type REPEAT_STATE_TYPE = typeof OFF | typeof REPEAT_ALL | typeof REPEAT_ONE;