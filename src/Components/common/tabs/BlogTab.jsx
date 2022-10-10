import React from 'react';
import { TabPanel } from 'react-tabs';
import CommentsTab from './CommentsTab';
import CustomTab from './CustomTab';
import tabData from '../../../Core/services/Fake Service/BlogTabList';

const BlogTab = ({ onLike, onDisLike, onSendReply, comments }) => {
  return (
    <CustomTab tabs={tabData}>
      <TabPanel>
        <CommentsTab
          onLike={onLike}
          onDisLike={onDisLike}
          onSendReply={onSendReply}
          comments={comments}
        />
      </TabPanel>
    </CustomTab>
  );
};

export default BlogTab;
