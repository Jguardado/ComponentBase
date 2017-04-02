import React from 'react';
import NewComponents from './newComponents';
import NewBlogs from './newBlogs';
import OtherProjects from './otherProjects';

const AdditionalInfo = () => {
  return (
    <div className="three-boxes">
      <NewComponents />
      <NewBlogs />
      <OtherProjects />
    </div>
  )
}

export default AdditionalInfo
