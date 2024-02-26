import { CreateRequestModel } from "../../../abstracts/ResponseAbstracts";

export interface CreateQuestionOptionRequest extends CreateRequestModel {
    optionId: number;
    questionId?: number;
}
export interface CreatePoolQuestionRequest extends CreateRequestModel {
    poolId: number;
    questionId?: number;
}
export interface CreateOptionRequest extends CreateRequestModel {
    text: string;
}
export interface CreateQuestionRequest extends CreateRequestModel {
    imageUrl: string | null;
    sentence: string;
    correctOptionId: number;
    questionOptions: CreateQuestionOptionRequest[];
    poolQuestions?: CreatePoolQuestionRequest[] | null;
}
export interface UpdateQuestionRequest extends CreateRequestModel {
    imageUrl: string | null;
    sentence: string;
    correctOptionId: number;
    questionOptions?: CreateQuestionOptionRequest[];
    poolQuestions: CreatePoolQuestionRequest[] | null;
}
