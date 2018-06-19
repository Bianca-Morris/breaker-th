import React, { Component } from 'react';
import path from 'path';

import EpTag from './EpTag';

import '../App.css';

const NowPlaying = (props) => (
      <div className="Now-playing">
          <h3>{props.show.name}</h3>
          <p>{props.show.artist_name}</p>
          <img src={props.show.image_url} />
          <p>
              {props.show.stripped_description}
          </p>
          <div>
              <i>Tags</i>:
              <EpTag
                  text={props.show.frequency}
                  c1={`#${props.show.primary_color}`}
                  c2={`#${props.show.secondary_color}`}
                  link={null}
              />
              <EpTag
                  text={props.show.explicit ? 'Explicit' : 'Not explicit'}
                  c1={`#${props.show.primary_color}`}
                  c2={`#${props.show.secondary_color}`}
                  link={null}
              />
              <EpTag
                  text={`Lang-${props.show.language}`}
                  c1={`#${props.show.primary_color}`}
                  c2={`#${props.show.secondary_color}`}
                  link={null}
              />

          </div>
          <div className="Stats">
              <button>
                  {props.show.episodes_count}
                  <i className="fa fa-podcast" />
              </button>
              <button>
                  {props.show.subscriptions_count}
                  <i className="fa fa-heart" />
              </button>
              <button>
                  {props.show.episodes_comments_count ?
                      props.show.episodes_comments_count : '0' }
                  <i className="fa fa-comments" />
              </button>
          </div>
      </div>
);

export default NowPlaying;
