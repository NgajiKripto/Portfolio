'use server';
/**
 * @fileOverview A Genkit flow to automatically score candidate resumes based on specified keywords and phrases.
 *
 * - aiResumeKeywordFiltering - A function that handles the AI-powered resume scoring process.
 * - AiResumeKeywordFilteringInput - The input type for the aiResumeKeywordFiltering function.
 * - AiResumeKeywordFilteringOutput - The return type for the aiResumeKeywordFiltering function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiResumeKeywordFilteringInputSchema = z.object({
  jobDescription: z
    .string()
    .describe(
      'The job description, including critical keywords and phrases that candidates must possess.'
    ),
  candidateResume: z
    .string()
    .describe('The full text content of the candidate\'s resume.'),
});
export type AiResumeKeywordFilteringInput = z.infer<
  typeof AiResumeKeywordFilteringInputSchema
>;

const AiResumeKeywordFilteringOutputSchema = z.object({
  score: z
    .number().min(0).max(100)
    .describe('A match score between 0 and 100 indicating how well the resume matches the job description.'),
  reason: z
    .string()
    .describe('A brief explanation for the given match score, highlighting key strengths or weaknesses.'),
});
export type AiResumeKeywordFilteringOutput = z.infer<
  typeof AiResumeKeywordFilteringOutputSchema
>;

export async function aiResumeKeywordFiltering(
  input: AiResumeKeywordFilteringInput
): Promise<AiResumeKeywordFilteringOutput> {
  return aiResumeKeywordFilteringFlow(input);
}

const aiResumeKeywordFilteringPrompt = ai.definePrompt({
  name: 'aiResumeKeywordFilteringPrompt',
  input: {schema: AiResumeKeywordFilteringInputSchema},
  output: {schema: AiResumeKeywordFilteringOutputSchema},
  prompt: `You are an expert HR recruiter assistant. Your task is to evaluate a candidate's resume against a given job description and provide a match score from 0 to 100, along with a brief explanation.

- A score of 0-69 means the candidate is not a good fit.
- A score of 70-84 means the candidate is a potential fit.
- A score of 85-100 means the candidate is a strong fit.

Base your score on the presence of required skills, years of experience, and overall relevance to the job description.

Job Description:
{{{jobDescription}}}

Candidate Resume:
{{{candidateResume}}}

Provide a 'score' and a 'reason' for your evaluation in a strict JSON format. Example: { "score": 85, "reason": "Sangat cocok dengan pengalaman React" }.`,
});

const aiResumeKeywordFilteringFlow = ai.defineFlow(
  {
    name: 'aiResumeKeywordFilteringFlow',
    inputSchema: AiResumeKeywordFilteringInputSchema,
    outputSchema: AiResumeKeywordFilteringOutputSchema,
  },
  async (input) => {
    const {output} = await aiResumeKeywordFilteringPrompt(input);
    return output!;
  }
);
