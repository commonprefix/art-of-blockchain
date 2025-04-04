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
        'prerequisites/markdown/README',
        'prerequisites/markdown/chat-application-exercise',
        'prerequisites/editor',
        'prerequisites/interactive-blocks',
        'prerequisites/systems-design',
        'prerequisites/openapi',
        'prerequisites/integrations',
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

