import React from 'react'
import '../Styles/page.css'
import Search from '../assets/icon-search.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchUserGitHub from '../redux/actions/SearchUser';


export const SearchBar = () => {

    const dispatch = useDispatch();
    const [username, setUserName] = useState('octocat');


    return (
        <div className='search-input'>
            <img className='icon-search' src={Search} alt="Search Icon" />
            <input
                className='txt-input'
                type="text"
                placeholder='Search GitHub username...'
                value={username}
                onChange={
                    (event) => {
                        setUserName(event.target.value);

                    }
                }

            />
            <p
                className='btn-search' onClick={
                    () => {
                        dispatch(fetchUserGitHub(username))


                    }}>Search</p>
        </div >
    )
}
