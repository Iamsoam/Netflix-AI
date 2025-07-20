import OpenAI from 'openai';
import { openAI } from './constants';

const client = new OpenAI({
  apiKey: openAI // This is the default and can be omitted
});