import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';




const users = [
  // Please add in alphabetical order of title.
  {
    title: 'Social Memory Game',
    description: 'Built my own version of the classic memory game using JavaScript',
    preview: require('./showcase/social-memory-game.png'),
    website: 'https://www.mohdabdelnasser.live/social-memory-game/',
    source: 'https://github.com/mohamedsgap/social-memory-game',
  },
  {
    title: 'Quotations Generator',
    description: 'Built quotations generator app in Vanilla JS and React',
    preview: require('./showcase/quotes-generator.png'),
    website: 'https://www.mohdabdelnasser.live/quotations-generator/',
    source: 'https://github.com/mohamedsgap/quotations-generator',
  },
  {
    title: '2048 Game',
    description: "2048 is a single-player sliding block puzzle game. The game's objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.",
    preview: require('./showcase/2048-game.png'),
    website: 'https://www.mohdabdelnasser.live/2048-game/',
    source: 'https://github.com/mohamedsgap/2048-game',
  },
  {
    title: 'Flashcards',
    description: 'Flashcards is a React Native app for iOS and Android that allows users to create decks, add cards and quiz themselves.',
    preview: require('./showcase/flash-mini.png'),
    //website: '',
    source: 'https://github.com/mohamedsgap/flashcards-app',
  },
  {
    title: 'Fitness',
    description: 'Fitness App is a Triathlon Tracking App for iOS and Android built with React Native.',
    preview: require('./showcase/fitness-mini.png'),
    //website: '',
    source: 'https://github.com/mohamedsgap/fitness-app',
  },
  {
    title: 'Arcade Game Frogger',
    description: 'This is a basic "Frogger" style game where the goal is to reach a certain destination while avoding a fleet of enemies that cross the screen.',
    preview: require('./showcase/arcade-mini.png'),
    website: 'https://www.mohdabdelnasser.live/classic-arcade-game/',
    source: 'https://github.com/mohamedsgap/classic-arcade-game',
  },
 
];



const TITLE = 'Projects by Mohamed';

function Showcase() {
  return (
    <Layout title={TITLE} >
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
        </div>
        <div className="row">
          {users.map(user => (
            <div key={user.title} className="col col--4 margin-bottom--lg">
              <div className={classnames('card', styles.showcaseUser)}>
                <div className="card__image">
                  <Image img={user.preview} alt={user.title} />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{user.title}</h4>
                      <small className="avatar__subtitle">
                        {user.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(user.website || user.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {user.website && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.website}
                          target="_blank"
                          rel="noreferrer noopener">
                          Website
                        </a>
                      )}
                      {user.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={user.source}
                          target="_blank"
                          rel="noreferrer noopener">
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
