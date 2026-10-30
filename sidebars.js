// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  
  tutorialSidebar: [
    'Introduction',
    
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'Getting Started/index',
        'Getting Started/creating-an-account',
        'Getting Started/logging-in',
      ],
    },

    {
      type: 'category',
      label: 'Using Phorum',
      items: [
        'Using Phorum/index',
        'Using Phorum/navigating-phorum',
        'Using Phorum/creating-a-post',
        'Using Phorum/liking-a-post',
        'Using Phorum/editing-a-post',
        'Using Phorum/deleting-a-post',
        'Using Phorum/commenting-on-a-post',
        'Using Phorum/liking-a-comment',
        'Using Phorum/editing-a-comment',
        'Using Phorum/deleting-a-comment',
        'Using Phorum/replying-to-a-comment',
      ],
    },

    {
      type: 'category',
      label: 'Account Management',
      items: [
        'Account Management/index',
        'Account Management/managing-your-profile',
        'Account Management/forgot-password',
      ],
    },
  ],
};

export default sidebars;
