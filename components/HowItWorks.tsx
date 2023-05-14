import React from 'react';

interface Step {
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      title: 'Step 1: Create a Campaign',
      description:
        'Start by creating a campaign for your cause. Provide details about your project, set a funding goal, and choose a duration for your campaign.',
    },
    {
      title: 'Step 2: Spread the Word',
      description:
        'Share your campaign with friends, family, and social media networks. Encourage others to support your cause and spread the word to reach a wider audience.',
    },
    {
      title: 'Step 3: Receive Donations',
      description:
        'As people learn about your campaign, they can make donations to support your cause. Keep track of the progress and thank your donors for their contributions.',
    },
    {
      title: 'Step 4: Reach Your Goal',
      description:
        'Work towards reaching your funding goal. Engage with your supporters, provide updates, and showcase the impact of their donations.',
    },
    {
      title: 'Step 5: Make a Difference',
      description:
        'Once your campaign is successfully funded, utilize the raised funds to make a positive impact and bring your project to life. Keep your donors informed about the progress and outcomes.',
    },
  ];

  return (
    <div>
      <h2>How It Works</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HowItWorks;
