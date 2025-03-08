import { FileTextIcon } from 'lucide-react';
import { useState } from 'react';

import { GetCareerOthersType } from '@/api/career';
import { Typography } from '@/components/reusable';
import QualificationCard from '@/components/reusable/career/qualification-card';
import PdfViewer from '@/components/reusable/career/viewer';

interface CareerOthersProps {
  articledata: GetCareerOthersType | undefined;
}

const CareerOthersSingle: React.FC<CareerOthersProps> = ({ articledata }) => {
  const [visible, setVisible] = useState(false);
  const pdf = articledata?.resume;
  const openViewer = () => {
    setVisible(true);
  };

  const closeViewer = () => {
    setVisible(false);
  };

  const lastElement = articledata?.resume.split('/').pop();

  return (
    <>
      <div className="flex gap-4">
        <div className="basis-1/2">
          <div className="mb-3 flex flex-col gap-4 rounded-md bg-white p-3">
            <Typography
              variant="h5"
              className="font-bold"
            >{`${articledata?.firstName} ${articledata?.middleName ? articledata.middleName : ''} ${articledata?.lastName}`}</Typography>
            <div className="flex gap-3">
              <div className="rounded bg-primary-blue/80 px-2 py-1 text-white">
                <Typography variant="small" className="font-semibold">
                  CA Others
                </Typography>
              </div>
              <div className="rounded bg-primary px-2 py-1 text-white ">
                <Typography
                  variant="small"
                  className="font-semibold capitalize"
                >
                  {articledata?.status}
                </Typography>
              </div>
            </div>
            <div className="flex justify-between rounded-md bg-gray-100 p-2">
              <Typography variant="small">{articledata?.email}</Typography>
              <Typography variant="small">
                {articledata?.permanentAddress}
              </Typography>
            </div>
            <div className="flex flex-col gap-3 rounded-md bg-gray-100 p-3">
              <div className="flex items-center justify-between">
                <Typography variant="small" className="font-semibold">
                  D.O.B:
                </Typography>
                <Typography variant="small">
                  {articledata?.dateOfBirth}
                </Typography>
              </div>
              <div className="flex items-center justify-between">
                <Typography variant="small" className="font-semibold">
                  Gender:
                </Typography>
                <Typography variant="small">{articledata?.gender}</Typography>
              </div>
              <div className="flex items-center justify-between">
                <Typography variant="small" className="font-semibold">
                  Nationality:
                </Typography>
                <Typography variant="small">
                  {articledata?.nationality}
                </Typography>
              </div>
              <div className="flex items-center justify-between">
                <Typography variant="small" className="font-semibold">
                  Language Proficiency:
                </Typography>
                <Typography variant="small">
                  {articledata &&
                    articledata?.language?.length > 0 &&
                    articledata?.language?.join(', ')}
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-md bg-white p-3">
            <Typography
              variant="small"
              className="font-semibold text-primary-blue"
            >
              Academic Qualification
            </Typography>
            {articledata?.academic_qualification.slc_see && (
              <QualificationCard
                title="SLC/SEE"
                data={articledata?.academic_qualification.slc_see}
              />
            )}
            {articledata?.academic_qualification.plus_two && (
              <QualificationCard
                title="+2"
                data={articledata?.academic_qualification.plus_two}
              />
            )}
            {articledata?.academic_qualification.bachelor &&
              articledata?.academic_qualification.bachelor?.affiliation !==
                '' && (
                <QualificationCard
                  title="Bachelors"
                  data={articledata?.academic_qualification.bachelor}
                />
              )}
            {articledata?.academic_qualification.masters &&
              articledata?.academic_qualification.masters?.affiliation !==
                '' && (
                <QualificationCard
                  title="Masters"
                  data={articledata?.academic_qualification.masters}
                />
              )}
          </div>
        </div>
        <div className="basis-1/2">
          <div className="mb-3 flex flex-col gap-4 rounded-md bg-white p-3">
            <Typography
              variant="small"
              className="font-semibold text-primary-blue"
            >
              Professional Qualification
            </Typography>
            <div className="flex flex-col gap-3 bg-gray-100 p-3">
              <div className="flex justify-between rounded-md ">
                <Typography variant="small">Field:</Typography>
                <Typography variant="small">
                  {articledata?.professional_qualification.field}
                </Typography>
              </div>
              <div className="flex justify-between rounded-md ">
                <Typography variant="small">Instituition Name:</Typography>
                <Typography variant="small">
                  {articledata?.professional_qualification.institution_name}
                </Typography>
              </div>
              <div className="flex justify-between rounded-md ">
                <Typography variant="small">Passed Year:</Typography>
                <Typography variant="small">
                  {articledata?.professional_qualification.passed_year}
                </Typography>
              </div>
              <div className="flex justify-between rounded-md ">
                <Typography variant="small">Percentage/Grade:</Typography>
                <Typography variant="small">
                  {articledata?.professional_qualification.percentage}
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-md bg-white p-3">
            <Typography
              variant="small"
              className="font-semibold text-primary-blue"
            >
              Attachment
            </Typography>
            <div className="flex items-center gap-2 rounded bg-gray-100 p-3">
              <button
                onClick={() => openViewer()}
                className="w-full items-center text-primary-blue hover:underline"
              >
                <FileTextIcon size={36} />
              </button>
              <Typography variant="small">
                <a
                  href={`${articledata?.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary-blue"
                >
                  {lastElement}
                </a>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {visible && pdf && (
        <PdfViewer currentResume={pdf} closeViewer={closeViewer} />
      )}
    </>
  );
};

export default CareerOthersSingle;
