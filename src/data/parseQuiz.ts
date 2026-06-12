import rawData from './firstaid.json';
import { QuizQuestion } from '../components/quizScreen';

export const firstAidQuestions: QuizQuestion[] = rawData.map((item, idx) => ({
  id: `fa_${idx}`,
  question: item.question,
  options: item.options,
  correctIndex: item.options.indexOf(item.correctAnswer),
}));
