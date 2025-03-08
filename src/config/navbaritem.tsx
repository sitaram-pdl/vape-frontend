import {
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChartSpline,
  Construction,
  Factory,
  File,
  FileText,
  GlobeIcon,
  GraduationCap,
  HandHeart,
  Handshake,
  HeartPulse,
  Hotel,
  Images,
  MessageCircleDashed,
  MessageSquareDot,
  Milestone,
  PiggyBank,
  Search,
  Share2,
  Shield,
  TrendingUp,
  UserCircle,
  Users,
} from 'lucide-react';

export type NavItem = {
  title: string;
  link: string;
  subItems?: {
    title: string;
    icon?: React.ReactNode;
    listIcon?: React.ReactNode;
    description?: string;
    link: string;
  }[];
};

export const navItems: NavItem[] = [
  {
    title: 'About Us',
    subItems: [
      {
        title: 'Introduction',
        description:
          'S. R. Pandey & Co., Chartered Accountants is a Nepal based firm, located in Kathmandu.',
        icon: <UserCircle className="text-white" size={20} />,
        listIcon: <UserCircle className="text-primary-blue" size={30} />,
        link: '/aboutus/introduction',
      },
      {
        title: 'Vision, Mission and Values',
        description:
          'Our goal is to become the natural choice for accounting, advisory, and consultancy services across all sectors and industries.',
        icon: <Milestone className="text-white" size={20} />,
        listIcon: <Milestone className="text-primary-blue" size={30} />,
        link: '/aboutus/vision',
      },
      {
        title: 'Founding Partner Message',
        description:
          'Our unwavering commitment to excellence, integrity, and client success has positioned us as a leading firm in the industry.',
        icon: <MessageCircleDashed className="text-white" size={20} />,
        listIcon: (
          <MessageCircleDashed className="text-primary-blue" size={30} />
        ),
        link: '/aboutus/founding-partner',
      },
      {
        title: 'Our Leadership',
        description:
          'Our leaders drive success through experience, innovation, and integrity.',
        icon: <Users className="text-white" size={20} />,
        listIcon: <Users className="text-primary-blue" size={30} />,
        link: '/aboutus/ourteam',
      },
      {
        title: 'Our Gallery',
        description:
          'Our gallery inspires creativity through innovation, vision, and artistry.',
        icon: <Images className="text-white" size={20} />,
        listIcon: <Images className="text-primary-blue" size={30} />,
        link: '/aboutus/gallery',
      },
    ],
    link: '',
  },
  {
    title: 'Services',
    subItems: [
      {
        title: 'Audit and Assurance',
        description:
          'We provide audit and assurance services to enhance transparency, build stakeholder trust, and ensure regulatory compliance.',
        icon: <File className="text-white" size={20} />,
        listIcon: <File className="text-primary-blue" size={30} />,
        link: '/services/audit',
      },
      {
        title: 'Taxation Consultancy Services',
        description:
          'With 31 years of experience and leadership in Nepal’s tax system, we offer unmatched tax advisory and policy expertise.',
        icon: <ChartNoAxesCombined className="text-white" size={20} />,
        listIcon: (
          <ChartNoAxesCombined className="text-primary-blue" size={30} />
        ),
        link: '/services/taxation',
      },
      {
        title: 'Mergers and Acquisitions',
        description:
          'As pioneers in Mergers and Acquisitions, we have facilitated numerous successful transactions in Nepal.',
        icon: <Handshake className="text-white" size={20} />,
        listIcon: <Handshake className="text-primary-blue" size={30} />,
        link: '/services/mergers',
      },
      {
        title: 'Advisory Services',
        description:
          'Our growth is linked to our clients’ success, driving our commitment to strategic advisory services.',
        icon: <MessageSquareDot className="text-white" size={20} />,
        listIcon: <MessageSquareDot className="text-primary-blue" size={30} />,
        link: '/services/advisory',
      },
      {
        title: 'Business Support and Outsourcing',
        description:
          'We grow alongside our clients, providing strategic advisory services to help businesses adapt and achieve sustainable success.',
        icon: <HandHeart className="text-white" size={20} />,
        listIcon: <HandHeart className="text-primary-blue" size={30} />,
        link: '/services/business',
      },
      {
        title: 'NFRS/IFRS Implementation',
        description:
          'We have led financial reporting transformation, contributing to NFRS/IFRS adoption.',
        icon: <ChartSpline className="text-white" size={20} />,
        listIcon: <ChartSpline className="text-primary-blue" size={30} />,
        link: '/services/nfrs',
      },
      {
        title: 'Training and Seminar',
        description:
          'We provide expert training in taxation, financial reporting, business structuring, and compliance.',
        icon: <BrainCircuit className="text-white" size={20} />,
        listIcon: <BrainCircuit className="text-primary-blue" size={30} />,
        link: '/services/training-seminar',
      },
    ],
    link: '',
  },
  {
    title: 'Industries',
    subItems: [
      {
        title: 'Banks and Financial Institutions',
        icon: <PiggyBank className="text-white" size={20} />,
        listIcon: <PiggyBank className="text-primary-blue" size={30} />,
        link: '/industries/bank',
      },
      {
        title: 'Capital Market /Private Equity /Venture Capital',
        icon: <BriefcaseBusiness className="text-white" size={20} />,
        listIcon: <BriefcaseBusiness className="text-primary-blue" size={30} />,
        link: '/industries/capital',
      },
      {
        title: 'Service Sectors',
        icon: <GraduationCap className="text-white" size={20} />,
        listIcon: <GraduationCap className="text-primary-blue" size={30} />,
        link: '/industries/service-sectors',
      },
      {
        title: 'Trading Entities',
        icon: <TrendingUp className="text-white" size={20} />,
        listIcon: <TrendingUp className="text-primary-blue" size={30} />,
        link: '/industries/trading',
      },
      {
        title: 'Manufacturing Industries',
        icon: <Factory className="text-white" size={20} />,
        listIcon: <Factory className="text-primary-blue" size={30} />,
        link: '/industries/manufacture',
      },
      {
        title: 'Development Sectors',
        icon: <Construction className="text-white" size={20} />,
        listIcon: <Construction className="text-primary-blue" size={30} />,
        link: '/industries/development',
      },
      {
        title: 'Fintech',
        icon: <Shield className="text-white" size={20} />,
        listIcon: <Shield className="text-primary-blue" size={30} />,
        link: '/industries/fintech',
      },
      {
        title: 'Information, Communication and Technology',
        icon: <Hotel className="text-white" size={20} />,
        listIcon: <Hotel className="text-primary-blue" size={30} />,
        link: '/industries/ict',
      },
      {
        title: 'Startups',
        icon: <HeartPulse className="text-white" size={20} />,
        listIcon: <HeartPulse className="text-primary-blue" size={30} />,
        link: '/industries/startup',
      },
    ],
    link: '',
  },
  {
    title: 'Careers',
    subItems: [
      {
        title: 'CA Article',
        description: 'Resources and information for CA Articles',
        icon: <FileText className="text-white" size={20} />,
        link: '/careers/ca-article',
      },
      {
        title: 'CA Intern',
        description: 'Information for CA Internship programs',
        icon: <GraduationCap className="text-white" size={20} />,
        link: '/careers/ca-intern',
      },
      {
        title: 'Others',
        description: 'Additional CA-related resources and information',
        icon: <Users className="text-white" size={20} />,
        link: '/careers/others',
      },
    ],
    link: '',
  },
  { title: 'Contact Us', link: '/contactus' },
];

export const navTopItems = [
  { icon: GlobeIcon, label: 'Nepal' },
  { icon: Search, label: 'Search' },
  { icon: Share2, label: 'Share' },
];
