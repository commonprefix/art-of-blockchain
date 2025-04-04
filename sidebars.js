module.exports = {
  tutorialSidebar: [
    // Top-level intro pages
{
      type: 'doc',
      id: 'index',
      label: 'The Art of Blockchain Programming',
    },
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

