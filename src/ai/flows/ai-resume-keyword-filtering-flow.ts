'use server';
/**
 * @fileOverview A Genkit flow to automatically filter candidate resumes based on specified keywords and phrases.
 *
 * - aiResumeKeywordFiltering - A function that handles the AI-powered resume keyword filtering process.
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
  isQualified: z
    .boolean()
    .describe('True if the candidate\'s resume meets the specified criteria and keywords, false otherwise.'),
  reason: z
    .string()
    .describe('A brief explanation of why the candidate is qualified or unqualified, referencing the missing or present keywords/skills.'),
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
  prompt: `You are an expert HR recruiter assistant whose sole purpose is to evaluate candidate resumes against a job description.

Your task is to determine if a candidate is qualified for a job based on the critical keywords and phrases mentioned in the job description. Pay close attention to explicit requirements and essential skills.

Job Description:
{{{jobDescription}}}

Candidate Resume:
{{{candidateResume}}}

Based on the job description, does the candidate\'s resume meet the critical criteria and keywords to be considered qualified? Provide a boolean result for 'isQualified' and a 'reason' explaining your decision, highlighting specific keywords or phrases found or missing.`,
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
