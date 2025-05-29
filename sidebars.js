/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // Top-level intro pages
    'index',
    'how-to-read',

    // Prerequisites section
    {
      type: 'category',
      label: 'Prerequisites',
      collapsed: false,
      items: [
        'prerequisites/language-proficiency',
        'prerequisites/chat-application-exercise',
        'prerequisites/algorithms-and-data-structures',
        'prerequisites/programming-patterns',
        'prerequisites/systems-design',
        'prerequisites/git-knowledge',
        'prerequisites/database-knowledge',
        'prerequisites/queues',
        'prerequisites/basic-servers-knowledge',
        'prerequisites/basic-networks',
      ],
    },

    // Foundations section
    {
      type: 'category',
      label: 'Foundations',
      collapsed: false,
      items: [
        'foundations/blockchain-basics',
        'foundations/blockchain-foundations',
        'foundations/bitcoin',
        'foundations/ethereum',
        'foundations/defi',
        'foundations/cosmos-and-axelar',
        'foundations/internet-scale-consensus',
        'foundations/relayer-exercise',
      ],
    },

    // Specialization section
    {
      type: 'category',
      label: 'Specialization',
      collapsed: false,
      items: [
        'specialization/bitcoin',
        'specialization/ethereum',
        'specialization/axelar',
      ],
    },
  ],
};

module.exports = sidebars;

