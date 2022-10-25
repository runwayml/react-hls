import React, { RefObject } from 'react';
export interface HlsPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    hlsConfig?: Object;
    playerRef: RefObject<HTMLVideoElement>;
    src: string;
}
declare function ReactHlsPlayer({ hlsConfig, playerRef, src, autoPlay, ...props }: HlsPlayerProps): JSX.Element;
export default ReactHlsPlayer;
