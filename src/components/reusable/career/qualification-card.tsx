import { Typography } from '@/components/reusable';

interface QualificationCardProps {
  title: string;
  data: {
    affiliation: string;
    passed_year: string;
    percentage: string;
  };
}

const QualificationCard: React.FC<QualificationCardProps> = ({
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
        <Typography variant="small">{data?.affiliation}</Typography>
      </div>
      <div className="flex justify-between rounded-md ">
        <Typography variant="small">Passed Year:</Typography>
        <Typography variant="small">{data?.affiliation}</Typography>
      </div>
      <div className="flex justify-between rounded-md ">
        <Typography variant="small">Percentage/Grade:</Typography>
        <Typography variant="small">{data?.percentage}</Typography>
      </div>
    </div>
  );
};

export default QualificationCard;
