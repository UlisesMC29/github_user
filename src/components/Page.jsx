import React, { createContext, useEffect, useState } from 'react';
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';
import LocaIcon from '../assets/icon-location.svg';
import TwtIcon from '../assets/icon-twitter.svg';
import WebIcon from '../assets/icon-website.svg';
import CompanyIcon from '../assets/icon-company.svg';
import { SearchBar } from './SearchBar';
import "../Styles/page.css"
import { useSelector } from 'react-redux';
// import Searcher from '../redux/reducers/buscadorReducer';



export const ThemeContext = createContext(null)

const Page = () => {

    // const Searcher = useSelector((state) => state.Searcher)

    //Sección para el uso del tema dark/light-----------------------
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };
    //-------------------------------------------------------------



    // const Searcher = useSelector((state) => state.Searcher)

    const Searcher = useSelector((state) => state.Searcher)


    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className='main' id={theme}>
                <div className="App">
                    <div className="header">
                        <div className='title-container'>
                            <h1 className="header-title">devfinder</h1>
                        </div>
                        <div onClick={toggleTheme} className='dark-container'>
                            <p className="header-txt">{theme === 'light' ? 'DARK' : 'LIGHT'}</p>
                            <img className='moon-icon' src={theme === 'light' ? Moon : Sun} alt="Moon Icon" />
                        </div>
                    </div>

                    <SearchBar />

                    <div className='card-profile'>
                        <div className='info-up'>
                            <div className='header-profile'>
                                <img className='img-profile' src={Searcher.user[0].avatar_url} alt="GitHub profile picture" />
                                <h1 className='title-profile'>{Searcher.user[0].name}</h1>
                                <p className='date-profile'>Joined {Searcher.user[0].created_at}</p>
                            </div>
                            <div className='body-profile'>
                                <h3 className='user-profile'>@{Searcher.user[0].login}</h3>
                                <p className='bio-profile'>{Searcher.user[0].bio === null ? 'This profile has no bio' : Searcher.user[0].bio}</p>
                            </div>
                        </div>
                        <div className='info-center'>
                            <div className='title-date'>
                                <h4 className='date-first'>Repos</h4>
                                <h4 className='date-others'>Followers</h4>
                                <h4 className='date-others'>Following</h4>
                            </div>
                            <div className='numbers-date'>
                                <h2 className='number-repos'>{Searcher.user[0].public_repos}</h2>
                                <h2 className='number-followers'>{Searcher.user[0].followers}</h2>
                                <h2 className='number-following'>{Searcher.user[0].following}</h2>
                            </div>
                        </div>
                        <div className='info-down'>
                            <div className='ubi-profile'>
                                <img className='icon-ubi' src={LocaIcon} alt="Icon location" />
                                <h4 className='txt-ubi'>{Searcher.user[0].location}</h4>
                            </div>
                            <div className='twt-profile'>
                                <img className='icon-twt' src={TwtIcon} alt="Icon Profile" />
                                <h4 className='txt-twt'>{Searcher.user[0].twitter_username === null ? 'Not Available' : Searcher.user[0].twitter_username}</h4>
                            </div>
                            <div className='web-profile'>
                                <img className='icon-web' src={WebIcon} alt="Icon Website" />
                                <h4 className='txt-web'>{Searcher.user[0].blog}</h4>
                            </div>
                            <div className='compa-profile'>
                                <img className='icon-company' src={CompanyIcon} alt="Icon Company" />
                                <h4 className='txt-company'>{Searcher.user[0].company}</h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Page
