import * as actionTypes from './actionTypes';

export interface IArticle {
    id: number;
    title: string;
}

type ArticleState = {
    articles: IArticle[];
};

const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: 'aaa',
        },
        {
            id: 2,
            title: 'adefra',
        },
    ],
};
