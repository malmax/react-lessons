import { CREATE_ARTICLE } from '../constants/articles';

export function createArticle(article) {
    return {
        type: CREATE_ARTICLE, //обязательное поле, с обозначение типа операции
        payload: article //поле с обозначением данных, связанных с операцией
    };
}