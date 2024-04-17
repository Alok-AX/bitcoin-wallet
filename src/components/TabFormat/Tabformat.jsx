
import React, { useState } from 'react';
import TabInner from './TabInner';

const Tabformat = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Day", "Week", "Month", "Year"];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='tab_format_main_wrapper'>
      <div className="tab_format_wrapper_row">
        {tabs.map((tab, index) => (
          <button 
            key={index} 
            onClick={() => handleTabClick(index)} 
            className={activeTab === index ? 'active' : ''}>
            {tab}
          </button>
        ))}
      </div>
      <div className="graph_section_wrpper">
        {tabs.map((tab, index) => (
          <div 
            key={index} 
            className={`graph_wrap ${activeTab === index ? 'active' : ''}`}
            style={{ display: activeTab === index ? 'block' : 'none' }}>
              <TabInner/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabformat;

