import React from 'react';

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag">
        {data.date}
      </span>
      <time>{data.text}</time>
      <p>{data.title}</p>
      { data.link && (
        <a
          href={data.link.url}
          rel="noopener noreferrer"
          target="_blank"
        >{data.link.text}</a>
      )}
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;
