import { request, makeOptions } from './utils';
import { QUESTION_URL } from './config';

interface IQuestionModel {
  title: string;
  content: string;
  emoji: string;
}

const createQuestion = async (questionInfo: IQuestionModel): Promise<any> => {
  try {
    const url = QUESTION_URL;
    const body = {
      ...questionInfo,
    };
    const options = await makeOptions('GET', body);
    const data = await request(url, options);
    return data;
  } catch (e) {
    console.error(e);
    return e.message;
  }
};

export {
  createQuestion,
};
