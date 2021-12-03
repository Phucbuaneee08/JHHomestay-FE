import React from 'react';
import HomestayCard from './HomestayCard';

const Posts = ({posts, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>;
      }
    return (
    <ul className='container mb-16 grid grid-cols-4 gap-10 mt-5 justify-between mx-auto'>
        {posts.map(props => (     
          <HomestayCard detail={props}/>       
      ))}
    </ul>
  );
};

export default Posts;