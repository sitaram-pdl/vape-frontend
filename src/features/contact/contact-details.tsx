import { TwitterIcon } from 'lucide-react';

import { Typography } from '@/components/reusable';
import SRPandeyMap from '@/components/reusable/srpandeymap';
import Facebook from '@/components/svg/facebook';
import LinkedIn from '@/components/svg/linkedin';

const ContactDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-8">
      <div className="w-full space-y-4 border border-bluish-white px-12 py-6 ">
        <Typography variant="small" className="text-primary-blue">
          2nd Floor, House No. 2979/33
        </Typography>
        <br />
        <Typography variant="small" className="text-primary-blue">
          Nabil Galli, Maharajgunj
        </Typography>
        <br />
        <Typography variant="small" className="text-primary-blue">
          Post Box No. 2343
        </Typography>
        <br />
        <Typography variant="small" className="text-primary-blue">
          Kathmandu, Nepal
        </Typography>
        <br />
        <Typography variant="small" className="text-primary-blue">
          <a href="tel:977-1-4720983">Tel: +977-1-4720983</a>
        </Typography>
        <br />
        <Typography variant="small" className="text-primary-blue ">
          Email: <a href="mailto:info@srp.com.np">info@srp.com.np</a>
        </Typography>
        <div className="flex space-x-2 text-primary-blue">
          <div className="rounded-full bg-bluish-white p-2">
            <TwitterIcon size={16} fill="#015876" />
          </div>
          <div className="rounded-full bg-bluish-white p-2">
            <Facebook />
          </div>
          <div className="rounded-full bg-bluish-white p-2">
            <LinkedIn />
          </div>
        </div>
      </div>
      <SRPandeyMap height="450" />
    </div>
  );
};

export default ContactDetails;
