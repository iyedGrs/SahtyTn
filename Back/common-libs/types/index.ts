// Common types that can be shared across all services
export interface IApiError {
  message: string;
  statusCode: number;
}

export interface IApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: IApiError;
}

export interface IBaseEntity {
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface IPaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
