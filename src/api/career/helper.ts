import { z } from 'zod';

import { CAArticleSchema } from '@/schema/ca-article.schema';
import { CAInternSchema } from '@/schema/ca-intern.schema';
import { CAOtherSchema } from '@/schema/ca-other.schema';

type CareerArticleInput = z.infer<typeof CAArticleSchema>;
type CareerInternInput = z.infer<typeof CAInternSchema>;
type CareerOtherInput = z.infer<typeof CAOtherSchema>;

export const createCareerFormData = (data: CareerArticleInput): FormData => {
  const formData = new FormData();

  formData.append('firstName', data.firstName);
  data.middleName && formData.append('middleName', data.middleName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('permanentAddress', data.permanentAddress);
  data.currentAddress && formData.append('currentAddress', data.currentAddress);
  formData.append('dateOfBirth', data.dateOfBirth);
  formData.append('gender', data.gender);
  formData.append('nationality', data.nationality);
  formData.append('phone', data.phone);

  if (data.language && data.language.length > 0) {
    data.language.forEach((lang, index) => {
      formData.append(`language[${index}]`, lang);
    });
  }

  const academic = data.academic_qualification;
  formData.append(
    'academic_qualification[slc_see][affiliation]',
    academic.slc_see.affiliation,
  );
  formData.append(
    'academic_qualification[slc_see][passed_year]',
    academic.slc_see.passed_year,
  );
  formData.append(
    'academic_qualification[slc_see][percentage]',
    String(academic.slc_see.percentage),
  );

  formData.append(
    'academic_qualification[plus_two][affiliation]',
    academic.plus_two.affiliation,
  );
  formData.append(
    'academic_qualification[plus_two][passed_year]',
    academic.plus_two.passed_year,
  );
  formData.append(
    'academic_qualification[plus_two][percentage]',
    String(academic.plus_two.percentage),
  );

  if (academic.bachelor) {
    academic.bachelor.affiliation &&
      formData.append(
        'academic_qualification[bachelor][affiliation]',
        academic.bachelor.affiliation,
      );
    academic.bachelor.passed_year &&
      formData.append(
        'academic_qualification[bachelor][passed_year]',
        academic.bachelor.passed_year,
      );
    academic.bachelor.percentage &&
      formData.append(
        'academic_qualification[bachelor][percentage]',
        String(academic.bachelor.percentage),
      );
  }

  if (academic.masters) {
    academic.masters.affiliation &&
      formData.append(
        'academic_qualification[masters][affiliation]',
        academic.masters.affiliation,
      );
    academic.masters.passed_year &&
      formData.append(
        'academic_qualification[masters][passed_year]',
        academic.masters.passed_year,
      );
    academic.masters.percentage &&
      formData.append(
        'academic_qualification[masters][percentage]',
        String(academic.masters.percentage),
      );
  }

  const professional = data.professional_qualification;
  formData.append(
    'professional_qualification[cap_one][passed_year]',
    professional.cap_one.passed_year,
  );
  formData.append(
    'professional_qualification[cap_one][percentage]',
    String(professional.cap_one.percentage),
  );
  formData.append(
    'professional_qualification[cap_one][attempt]',
    String(professional.cap_one.attempt),
  );

  formData.append(
    'professional_qualification[cap_two][passed_year]',
    professional.cap_two.passed_year,
  );
  formData.append(
    'professional_qualification[cap_two][percentage]',
    String(professional.cap_two.percentage),
  );
  formData.append(
    'professional_qualification[cap_two][attempt]',
    String(professional.cap_two.attempt),
  );

  if (data.resume instanceof File) {
    formData.append('resume', data.resume);
  }

  return formData;
};

export const createCareerInternFormData = (
  data: CareerInternInput,
): FormData => {
  const formData = new FormData();

  formData.append('firstName', data.firstName);
  data.middleName && formData.append('middleName', data.middleName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('permanentAddress', data.permanentAddress);
  formData.append('dateOfBirth', data.dateOfBirth);
  formData.append('gender', data.gender);
  formData.append('nationality', data.nationality);
  formData.append('phone', data.phone);

  const academic = data.academic_qualification;
  formData.append(
    'academic_qualification[slc_see][affiliation]',
    academic.slc_see.affiliation,
  );
  formData.append(
    'academic_qualification[slc_see][passed_year]',
    academic.slc_see.passed_year,
  );
  formData.append(
    'academic_qualification[slc_see][percentage]',
    String(academic.slc_see.percentage),
  );

  formData.append(
    'academic_qualification[plus_two][affiliation]',
    academic.plus_two.affiliation,
  );
  formData.append(
    'academic_qualification[plus_two][passed_year]',
    academic.plus_two.passed_year,
  );
  formData.append(
    'academic_qualification[plus_two][percentage]',
    String(academic.plus_two.percentage),
  );

  if (academic.bachelor) {
    formData.append(
      'academic_qualification[bachelor][affiliation]',
      academic.bachelor.affiliation || '',
    );
    formData.append(
      'academic_qualification[bachelor][passed_year]',
      academic.bachelor.passed_year || '',
    );
    formData.append(
      'academic_qualification[bachelor][percentage]',
      String(academic.bachelor.percentage || ''),
    );
  }

  if (academic.masters) {
    formData.append(
      'academic_qualification[masters][affiliation]',
      academic.masters.affiliation || '',
    );
    formData.append(
      'academic_qualification[masters][passed_year]',
      academic.masters.passed_year || '',
    );
    formData.append(
      'academic_qualification[masters][percentage]',
      String(academic.masters.percentage || ''),
    );
  }

  if (data.professional_qualification) {
    const professional = data.professional_qualification;
    formData.append(
      'professional_qualification[instituition_name]',
      professional.instituition_name,
    );
    formData.append(
      'professional_qualification[passed_year]',
      professional.passed_year,
    );
    formData.append(
      'professional_qualification[percentage]',
      String(professional.percentage),
    );
  }

  if (data.resume && data.resume.path) {
    const file = new File([data.resume.path], 'resume.pdf', {
      type: 'application/pdf',
    });
    formData.append('resume', file);
  }

  return formData;
};

export const createCareerOtherFormData = (data: CareerOtherInput): FormData => {
  const formData = new FormData();

  formData.append('firstName', data.firstName);
  data.middleName && formData.append('middleName', data.middleName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('permanentAddress', data.permanentAddress);
  formData.append('dateOfBirth', data.dateOfBirth);
  formData.append('gender', data.gender);
  formData.append('nationality', data.nationality);
  formData.append('phone', data.phone);

  const academic = data.academic_qualification;
  formData.append(
    'academic_qualification[slc_see][affiliation]',
    academic.slc_see.affiliation,
  );
  formData.append(
    'academic_qualification[slc_see][passed_year]',
    academic.slc_see.passed_year,
  );
  formData.append(
    'academic_qualification[slc_see][percentage]',
    String(academic.slc_see.percentage),
  );

  formData.append(
    'academic_qualification[plus_two][affiliation]',
    academic.plus_two.affiliation,
  );
  formData.append(
    'academic_qualification[plus_two][passed_year]',
    academic.plus_two.passed_year,
  );
  formData.append(
    'academic_qualification[plus_two][percentage]',
    String(academic.plus_two.percentage),
  );

  if (academic.bachelor) {
    formData.append(
      'academic_qualification[bachelor][affiliation]',
      academic.bachelor.affiliation || '',
    );
    formData.append(
      'academic_qualification[bachelor][passed_year]',
      academic.bachelor.passed_year || '',
    );
    formData.append(
      'academic_qualification[bachelor][percentage]',
      String(academic.bachelor.percentage || ''),
    );
  }

  if (academic.masters) {
    formData.append(
      'academic_qualification[masters][affiliation]',
      academic.masters.affiliation || '',
    );
    formData.append(
      'academic_qualification[masters][passed_year]',
      academic.masters.passed_year || '',
    );
    formData.append(
      'academic_qualification[masters][percentage]',
      String(academic.masters.percentage || ''),
    );
  }

  if (data.professional_qualification) {
    const professional = data.professional_qualification;
    formData.append(
      'professional_qualification[institution_name]',
      professional.institution_name,
    );
    formData.append('professional_qualification[field]', professional.field);
    formData.append(
      'professional_qualification[passed_year]',
      professional.passed_year,
    );
    formData.append(
      'professional_qualification[percentage]',
      String(professional.percentage),
    );
  }

  if (data.resume) {
    formData.append('resume', data.resume);
  }

  return formData;
};
