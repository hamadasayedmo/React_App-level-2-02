import React from 'react';
import "./mainContent.css";


const MainContent = ({pageName}) => {

  return (
    <div>
      <main style={ {color: '#fff'}}>
        {pageName} Page
      </main>
    </div>
  );
}

export default MainContent;
