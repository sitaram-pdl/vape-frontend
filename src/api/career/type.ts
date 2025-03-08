export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export type AuthResponse = {
  token: string;
  user: User;
};

export type PostApiResponse = {
  message: string;
  data: object;
};

type AcademicQualification = {
  slc_see: {
    affiliation: string;
    passed_year: string;
    percentage: string;
  };
  plus_two: {
    affiliation: string;
    passed_year: string;
    percentage: string;
  };
  bachelor: {
    affiliation: string;
    passed_year: string;
    percentage: string;
  };
  masters: {
    affiliation: string;
    passed_year: string;
    percentage: string;
  };
};

type ProfessionalQualification = {
  attempt: string;
  passed_year: string;
  percentage: string;
};

export type UserProfile = {
  _id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  permanentAddress: string;
  currentAddress: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  nationality: string;
  language: string[];
  resume: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  academic_qualification: AcademicQualification;
  status: string;
};

export interface GetCareerArticleType extends UserProfile {
  professional_qualification: {
    cap_one: ProfessionalQualification;
    cap_two: ProfessionalQualification;
  };
}

export interface GetCareerInternType extends UserProfile {
  professional_qualification: {
    instituition_name: string;
    passed_year: string;
    percentage: string;
  };
}

export interface GetCareerOthersType extends UserProfile {
  professional_qualification: {
    field: string;
    institution_name: string;
    passed_year: string;
    percentage: string;
  };
}

type Meta = {
  totalPages: number;
  currentPage: number;
  total: number;
  pageSize: number;
};

export type GetAllCareerArticleApiResponse = {
  message: string;
  data: UserProfile[];
  meta: Meta;
};

export type GetCareerArticleByIdResponse = {
  message: string;
  data: GetCareerArticleType;
};

export type GetCareerInternByIdResponse = {
  message: string;
  data: GetCareerInternType;
};

export type GetCareerOthersByIdResponse = {
  message: string;
  data: GetCareerOthersType;
};

export type GetAllCareerParamType = Partial<{
  page: number;
  rowsPerPage: number;
  search: string;
}>;
