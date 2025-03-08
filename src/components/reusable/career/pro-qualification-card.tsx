import { Typography } from '@/components/reusable';

interface QualificationCardProps {
  title: string;
  data: {
    passed_year: string;
    percentage: string;
    attempt: string;
  };
}

const ProQualificationCard: React.FC<QualificationCardProps> = ({
  title,
  data,
}) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-100 p-3">
      <Typography variant="p" className="font-semibold">
        {title}
      </Typography>
      <div className="flex justify-between rounded-md ">
        <Typography variant="small">Affiliation:</Typography>
        <Typography variant="small">{data?.passed_year}</Typography>
      </div>
      <div className="flex justify-between rounded-md ">
        <Typography variant="small">Passed Year:</Typography>
        <Typography variant="small">{data?.percentage}</Typography>
      </div>
      <div className="flex justify-between rounded-md ">
        <Typography variant="small">Percentage/Grade:</Typography>
        <Typography variant="small">{data?.attempt}</Typography>
      </div>
    </div>
  );
};

export default ProQualificationCard;
