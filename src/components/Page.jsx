import React, { createContext, useState } from 'react';
import Moon from '../assets/icon-moon.svg';
import Search from '../assets/icon-search.svg';
import LocaIcon from '../assets/icon-location.svg';
import TwtIcon from '../assets/icon-twitter.svg';
import WebIcon from '../assets/icon-website.svg';
import CompanyIcon from '../assets/icon-company.svg';
import "../Styles/page.css"



export const ThemeContext = createContext(null)

const Page = () => {
    const [theme, setTheme] = useState('ligth');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className='main' id={theme}>
                <div className="App">
                    <div className="header">
                        <div className='title-container'>
                            <h1 className="header-title">devfinder</h1>
                        </div>
                        <div className='dark-container'>
                            <p className="header-txt">DARK</p>
                            <img className='moon-icon' src={Moon} alt="Moon Icon" />
                        </div>
                    </div>

                    <div className='search-input'>
                        <img className='icon-search' src={Search} alt="Search Icon" />
                        <input type="text" placeholder='Search GitHub username...' />
                        <p className='btn-search'>Search</p>
                    </div>

                    <div className='card-profile'>
                        <div className='info-up'>
                            <div className='header-profile'>
                                <img className='img-profile' src="" alt="GitHub profile picture" />
                                <h1 className='title-profile'>The Octocat</h1>
                                <p className='date-profile'>Joined 25 Jan 2011</p>
                            </div>
                            <div className='body-profile'>
                                <h3 className='user-profile'>@octocat</h3>
                                <p className='bio-profile'>This profile has no bio</p>
                            </div>
                        </div>
                        <div className='info-center'>
                            <div className='title-date'>
                                <h4 className='date-first'>Repos</h4>
                                <h4 className='date-others'>Followers</h4>
                                <h4 className='date-others'>Following</h4>
                            </div>
                            <div className='numbers-date'>
                                <h2 className='number-repos'>8</h2>
                                <h2 className='number-followers'>3938</h2>
                                <h2 className='number-following'>9</h2>
                            </div>
                        </div>
                        <div className='info-down'>
                            <div className='ubi-profile'>
                                <img className='icon-ubi' src={LocaIcon} alt="Icon location" />
                                <h4 className='txt-ubi'>San Francisco</h4>
                            </div>
                            <div className='twt-profile'>
                                <img className='icon-twt' src={TwtIcon} alt="Icon Profile" />
                                <h4 className='txt-twt'>Not Available</h4>
                            </div>
                            <div className='web-profile'>
                                <img className='icon-web' src={WebIcon} alt="Icon Website" />
                                <h4 className='txt-web'>https://github.blog</h4>
                            </div>
                            <div className='compa-profile'>
                                <img className='icon-company' src={CompanyIcon} alt="Icon Company" />
                                <h4 className='txt-company'>@github</h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Page
