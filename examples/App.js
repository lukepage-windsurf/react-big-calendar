import React from 'react';
import Api from './Api';
// import Intro from './Intro.md';
import cn from 'classnames';
import { createRoot } from 'react-dom/client';

import localizer from 'react-big-calendar/localizers/globalize';
import globalize from 'globalize';

localizer(globalize);

import 'react-big-calendar/less/styles.less';
import './styles.less';
import './prism.less';


class Example extends React.Component {
  state = {
    selected: 'selectable',
  };

  render() {
    let selected = this.state.selected;
    let Current = {
      // basic: require('./demos/basic').default,
      elation: require('./demos/elation').default,
      selectable: require('./demos/selectable').default,
      cultures: require('./demos/cultures').default,
      popup: require('./demos/popup').default,
      rendering: require('./demos/rendering').default,
      customView: require('./demos/customView').default,
      timeslots: require('./demos/timeslots').default,
      dnd: require('./demos/dnd').default
    }[selected];

    return (
      <div className='app'>
        <div className='examples'>
          <header className="contain">
            <ul className='nav nav-pills'>
              {/*
              <li className={cn({active: selected === 'basic' })}>
                <a href='#' onClick={this.select.bind(null, 'basic')}>Basic</a>
              </li>
              */}
              <li className={cn({active: selected === 'elation' })}>
                <a href='#' onClick={this.select.bind(null, 'elation')}>Elation</a>
              </li>
              <li className={cn({active: selected === 'selectable' })}>
                <a href='#' onClick={this.select.bind(null, 'selectable')}>Selectable</a>
              </li>
              <li className={cn({active: selected === 'cultures' })}>
                <a href='#' onClick={this.select.bind(null, 'cultures')}>I18n and Locales</a>
              </li>
              <li className={cn({active: selected === 'popup' })}>
                <a href='#' onClick={this.select.bind(null, 'popup')}>Popup</a>
              </li>
              <li className={cn({active: selected === 'timeslots' })}>
                <a href='#' onClick={this.select.bind(null, 'timeslots')}>Timeslots</a>
              </li>
              <li className={cn({active: selected === 'rendering' })}>
                <a href='#' onClick={this.select.bind(null, 'rendering')}>Custom rendering</a>
              </li>
              {/* temporary hide link to documentation
              <li className={cn({active: selected === 'customView' })}>
                <a href='#' onClick={this.select.bind(null, 'customView')}>Custom View</a>
              </li>
              */}
              <li className={cn({active: selected === 'dnd' })}>
                <a href='#' onClick={this.select.bind(null, 'dnd')}>Drag and Drop</a>
              </li>
            </ul>
          </header>
          <div className='example'>
            <Current className='demo' />
          </div>
        </div>
        <div className='docs'>
          <div className='contain section'>
            <h1>React Big Calendar Examples</h1>
            <p>This is the React Big Calendar component library migrated to React 19.</p>
          </div>
          <Api className='contain section' />
        </div>
      </div>
    );
  }

  select = (selected, e) => {
    e.preventDefault();
    this.setState({ selected })
  };
}

const root = createRoot(document.getElementById('root'));
root.render(<Example/>);
