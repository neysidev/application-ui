import React from 'react'

const Header = () => {
  return (
    <header className="py-3 mx-5">
      <h1 className="text-5xl font-bold py-3 dark:text-white">
        Application UI
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Hi guys, I decided to create different user interfaces <br />
        to learn better{' '}
        <a
          className="font-semibold text-indigo-500 dark:text-indigo-400 border-b dark:border-gray-700 dark:hover:border-indigo-400 hover:border-indigo-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>
      </p>
    </header>
  )
}

export default Header
