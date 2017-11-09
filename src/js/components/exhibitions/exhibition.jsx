import React from 'react';

const Exhibition = ({exhibition}) => {
  return (
    <div className='col-lg-3 col-md-6 text-center'>
      <div className='service-box'>
          <h3 className='exhibition-title'>{exhibition.title}</h3>
          <a title={exhibition.urlTitle} href={exhibition.url}>{exhibition.urlTitle}</a>
          <p className='text-muted exhibition-text'>{exhibition.date}</p>
          
          {
            exhibition.text ? renderText(exhibition.text): null
          }

      </div>
    </div>
  )
};

function renderText(texts) {
  let textArray = [];
  for (let prop in texts) {
    // console.log(`texts.${prop} = ${texts[prop]}`);
    textArray.push(texts[prop]);
  }

  return (
    <div>
      {
        textArray.map(render)
      }
    </div>
  )
};

function render(record, index){
  return(
    <p key={index} className='exhibition-text'>{record}</p>
  )
}

export default Exhibition;