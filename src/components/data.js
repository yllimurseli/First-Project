
import { FiShield, FiKey, FiUser, FiLock } from 'react-icons/fi';

// Your data using FiShield here, or remove the import if not used.
import { FiFlag, FiShield } from 'react-icons/fi'
import { FaPlane } from 'react-icons/fa'
import { RiCustomerServiceFill } from 'react-icons/ri'

export const Data = [
  {
    icon: <FiFlag />,
    title: 'HostPassword Scanner',
    description: 'Receive alerts for compromised websites and vulnerable passwords',
  },
  {
    icon: <RiCustomerServiceFill />,
    title: 'Digital Wallet',
    description: 'Securely store credit and debit cards, online banking information',
  },
  {
    icon: <RiCustomerServiceFill />,
    title: 'Advanced Encryption',
    description: 'Our security recipe starts with AES-256 bit encryption and uses multi-layered security features.',
  },
  {
    icon: <FaPlane />,
    title: 'Travel Mode',
    description: 'Remove sensitive data from your devices when you cross borders, and restore it with a click when you return.',
  },
];
export const FooterData = [
    {
      category: 'About',
      links: [
        { link: 'Pricing & Packaging', to: '/pricing' },
        { link: 'Contact Us', to: '/contact' },
        { link: 'Software Companies', to: '/software' },
        { link: 'SaaS Companies', to: '/saas' },
        { link: 'Startups', to: '/startups' },
        { link: 'Games', to: '/games' },
        { link: 'Application', to: '/application' },
        { link: 'Ecommerce', to: '/ecommerce' },
      ],
    },
    {
      category: 'Company',
      links: [
        { link: 'Help', to: '/help' },
        { link: 'Contact Us', to: '/contact' },
        { link: 'Privacy', to: '/privacy' },
        { link: 'Check', to: '/check' },
        { link: 'World', to: '/world' },
        { link: 'Press', to: '/press' },
        { link: 'App', to: '/app' },
        { link: 'Blog', to: '/blog' },
      ],
    },
    
  ];
  
