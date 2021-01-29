import React from 'react';

import Head from 'next/head';

import db from '../../../db.json'

export default Header => (<div><Head><meta property="og:image" content={db.bg} ></meta></Head></div>);
