import React, { Component } from 'react';
import path from 'path';

import '../App.css';

const AudioPlayer = (props) => (
      <div>
            <audio controls>
                <source
                    src={props.source}
                    type={props.sourceType}
                />
                {/* Would be nice to have an .ogg file, as well, for Firefox */}
                Your browser doesn't support the audio element.
            </audio>
      </div>
);

export default AudioPlayer;
