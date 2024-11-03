'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type CardType = {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
  superscript?: string;
  variant: 'compact' | 'wide';
  className?: string;
};

type TabType = 'Our products' | 'Calculators' | 'Guides & FAQs';

const tabsData: Record<TabType, CardType[]> = {
    'Our products': [
      {
        title: 'Buying your first home with Better',
        variant: 'compact',
        image: {
          src: '/first-home.webp',
          alt: 'House with grey roof and beautiful garden',
          className: 'rounded-lg w-full h-48 object-cover mt-4'
        },
        className: 'col-span-1'
      },
      {
        title: 'One Day Mortgage',
        description: 'Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.',
        superscript: '1',
        variant: 'wide',
        image: {
          src: '/one-day-mortgage.webp',
          alt: 'One Day Mortgage logo',
          className: 'w-80 h-80 bg-emerald-50 rounded-lg'
        },
        className: 'col-span-2'
      },
      {
        title: 'Better HELOC',
        description: 'Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days³',
        variant: 'wide',
        image: {
          src: '/better-heloc.webp',
          alt: 'Happy couple looking at laptop',
          className: 'rounded-lg w-80 h-80 object-cover'
        },
        className: 'col-span-2'
      },
      {
        title: 'Insurance',
        variant: 'compact',
        image: {
          src: '/insurance.webp',
          alt: 'Happy family smiling',
          className: 'rounded-lg w-full h-48 object-cover mt-4'
        },
        className: 'col-span-1'
      }
    ],
    'Calculators': [
      {
        title: 'Mortgage calculator',
        description: '',
        variant: 'compact',
        image: {
          src: '/mortgage-calculator.webp',
          alt: 'Colorful chart representing mortgage distribution',
          className: 'rounded-lg w-full h-48 object-cover mt-4'
        },
        className: 'col-span-1'
      },
      {
        title: 'Affordability calculator',
        description: 'Our affordability calculator estimates the maximum home you can afford.',
        variant: 'wide',
        image: {
          src: '/affordability-calculator.webp',
          alt: 'Pie chart showing total monthly payments distribution',
          className: 'rounded-lg w-80 h-80 object-cover'
        },
        className: 'col-span-2'
      },
      {
        title: 'HELOC calculator',
        description: 'Quickly see how much equity you can borrow from your home and what your monthly payments might be.',
        variant: 'wide',
        image: {
          src: '/heloc-calculator.webp',
          alt: 'Percentage chart showing 70% and 30% distribution',
          className: 'rounded-lg w-80 h-80 object-cover mt-4'
        },
        className: 'col-span-2'
      },
      {
        title: 'Fixed-rate loan comparison calculator',
        description: '',
        variant: 'compact',
        image: {
          src: '/fixed-rate-calculator.webp',
          alt: 'Bar chart showing fixed-rate loan comparison',
          className: 'rounded-lg w-full h-48 object-cover mt-4'
        },
        className: 'col-span-1'
      }
    ],
    'Guides & FAQs': [
      {
        title: 'What is a good debt-to-income ratio for a home loan?',
        description: '',
        variant: 'compact',
        image: {
          src: '/good-dti.webp',
          alt: 'Dollar sign with arrows indicating debt ratios',
          className: 'rounded-lg w-full h-48 object-cover mt-4'
        },
        className: 'col-span-1'
      },
      {
        title: 'Buying a house without realtor',
        description: 'Thinking about buying a house without a real estate agent? Read this first.',
        variant: 'wide',
        image: {
          src: '/buy-house-without-realtor.webp',
          alt: 'Traditional house with a well-kept lawn',
          className: 'rounded-lg w-80 h-80 object-cover'
        },
        className: 'col-span-2'
      },
      {
        title: 'Timeline for homebuying process',
        description: 'We broke down the process of buying a home into 8 easy steps.',
        variant: 'wide',
        image: {
          src: '/loan-timeline.webp',
          alt: 'Illustration with circles showing process timeline',
          className: 'rounded-lg w-80 h-80 object-cover mt-4'
        },
        className: 'col-span-2'
      },
      {
        title: 'Conventional loan requirements',
        description: '',
        variant: 'compact',
        image: {
          src: '/conventional-loan.webp',
          alt: 'Person holding a book on conventional loans',
          className: 'rounded-lg w-full h-48 object-cover mt-4'
        },
        className: 'col-span-1'
      }
    ]
  };
  

// Separate Card components for each variant
const CompactCard: React.FC<{ data: CardType }> = ({ data }) => {
  return (
    <div className="bg-green-50 rounded-2xl shadow-sm flex flex-col h-full">
      <div className="p-6">
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold">{data.title}</h3>
          <button className="rounded-full p-2 mt-4 border-[1px] border-gray-400 hover:bg-emerald-900 hover:text-white  transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      {data.image && (
        <div className="px-6 pb-6 mt-auto">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className={data.image.className}
          />
        </div>
      )}
    </div>
  );
};

const WideCard: React.FC<{ data: CardType }> = ({ data }) => {
  return (
    <div className="bg-green-50 p-8 rounded-2xl h-full">
      <div className="flex justify-between flex-row items-start">
        <div className='py-3 px-6'>
          <h3 className="text-2xl font-semibold">
            {data.title}
            {data.superscript && (
              <sup className="text-sm ml-0.5">{data.superscript}</sup>
            )}
          </h3>
          {data.description && (
            <p className="text-gray-600 mt-4 max-w-2xl text-md leading-relaxed">
              {data.description}
            </p>
          )}
          <button className="rounded-full p-2 my-4 border-[1px] border-gray-400 hover:bg-emerald-900 hover:text-white transition-colors">
          <ArrowRight className="w-6 h-6" />
        </button>
        </div>
        {data.image && (
        <div className="mt-auto">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className={data.image.className}
          />
        </div>
      )}
      </div>
    </div>
  );
};

const Card: React.FC<{ data: CardType }> = ({ data }) => {
  const CardComponent = data.variant === 'compact' ? CompactCard : WideCard;
  return (
    <div className={data.className}>
      <CardComponent data={data} />
    </div>
  );
};

const Bento = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Our products');

  return (
    <div className="w-screen mx-auto px-20 py-8 bg-white text-black">
        <div className='flex justify-between items-end'>
            <div className="mb-12">
                <h1 className="text-5xl font-semibold mb-2">Got questions?</h1>
                <h2 className="text-5xl font-semibold">We've got answers</h2>
            </div>

            <div className="flex gap-4 mb-12 font-semibold">
                {(['Our products', 'Calculators', 'Guides & FAQs'] as TabType[]).map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-base transition-colors
                    ${activeTab === tab
                        ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-700'
                        : 'bg-white border-2 border-gray-200 text-gray-600 hover:bg-green-50 hover:border-emerald-900'
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>
        </div>

      <div className="grid grid-cols-3 gap-6">
        {tabsData[activeTab].map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Bento;