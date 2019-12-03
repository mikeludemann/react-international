import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import {I18n} from 'react-polyglot';
import axios from 'axios';

import LocaleContext from './contexts/locale';
import Message from './components/messages';
import ChangeLanguage from './components/changeLanguage';

import logo from './logo.svg';
import './App.css';

function App() {
  const [locale, setLocale] = useState('en');

  const [messages, setMessages] = useState({});

  useEffect(
    () => {
      async function fetchData() {
        const result = await axios.get(`/translations/${locale}.json`);

        setMessages(result.data);
      }
      fetchData();
    },
    [locale]
  );

	return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <I18n locale={locale} messages={messages}>
        <>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <section className="content">
              <ChangeLanguage/>
              <Message name="John Doe" messageCount={1} />
              <Message name="Jimmy Doe" messageCount={99} />
            </section>
            <footer className="App-footer">
              (c) Copyright - Mike Ludemann
            </footer>
          </div>
        </>
      </I18n>
    </LocaleContext.Provider>
	);
}

export default App;
