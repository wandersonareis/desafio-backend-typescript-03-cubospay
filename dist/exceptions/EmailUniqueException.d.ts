import { IErrorResponse } from '@/common/inferfaces/error-response.interface';
export declare class EmailUniqueException implements IErrorResponse {
    statusCode: number;
    success: boolean;
    message: string;
    error: Record<string, string[]>;
}
