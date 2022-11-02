import * as actionTypes from './actionTypes';
import { IArticle } from './reducer';

type ArticleAction = {
    type: string;
    article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;

export function addArticle(article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article,
    };

    return simulateRequest(action);
}

export function simulateRequest(action: ArticleAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 500);
    };
}
