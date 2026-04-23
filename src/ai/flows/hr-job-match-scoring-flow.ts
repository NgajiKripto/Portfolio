'use server';
/**
 * @fileOverview This file implements a Genkit flow for HR job match scoring.
 * It takes a job description and a list of candidate resumes as input,
 * and returns an AI-generated match score and explanation for each candidate.
 *
 * - hrJobMatchScoring - A function that handles the job match scoring process.
 * - HrJobMatchScoringInput - The input type for the hrJobMatchScoring function.
 * - HrJobMatchScoringOutput - The return type for the hrJobMatchScoring function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const HrJobMatchScoringInputSchema = z.object({
  jobDescription: z.string().describe('The detailed job description against which candidates will be evaluated.'),
  candidateResumes: z.array(z.string()).describe('An array of candidate resume texts, each to be scored against the job description.'),
});
export type HrJobMatchScoringInput = z.infer<typeof HrJobMatchScoringInputSchema>;

const MatchResultSchema = z.object({
  candidateResume: z.string().describe('The resume text that was scored.'),
  matchScore: z.number().min(0).max(100).describe('An AI-generated match score (0-100) indicating how well the candidate fits the job description.'),
  explanation: z.string().describe('A brief explanation for the given match score, highlighting key strengths or weaknesses.'),
});

const HrJobMatchScoringOutputSchema = z.object({
  matchResults: z.array(MatchResultSchema).describe('A list of match results, one for each candidate resume provided.'),
});
export type HrJobMatchScoringOutput = z.infer<typeof HrJobMatchScoringOutputSchema>;

export async function hrJobMatchScoring(input: HrJobMatchScoringInput): Promise<HrJobMatchScoringOutput> {
  return hrJobMatchScoringFlow(input);
}

const candidateMatchPrompt = ai.definePrompt({
  name: 'candidateMatchPrompt',
  input: {
    schema: z.object({
      jobDescription: z.string(),
      candidateResume: z.string(),
    }),
  },
  output: {
    schema: MatchResultSchema,
  },
  prompt: `You are an expert HR recruiter.

Your task is to evaluate a candidate's resume against a given job description and provide a match score from 0 to 100, along with a brief explanation.

The higher the score, the better the candidate matches the job requirements.

Job Description:
{{{jobDescription}}}

Candidate Resume:
{{{candidateResume}}}

Provide the response in JSON format, strictly adhering to the following schema, including the original candidateResume text:
${JSON.stringify(MatchResultSchema.shape, null, 2)}
`,
});

const hrJobMatchScoringFlow = ai.defineFlow(
  {
    name: 'hrJobMatchScoringFlow',
    inputSchema: HrJobMatchScoringInputSchema,
    outputSchema: HrJobMatchScoringOutputSchema,
  },
  async (input) => {
    const matchResults: z.infer<typeof MatchResultSchema>[] = [];

    for (const resume of input.candidateResumes) {
      const { output } = await candidateMatchPrompt({
        jobDescription: input.jobDescription,
        candidateResume: resume,
      });
      if (output) {
        matchResults.push(output);
      }
    }

    return { matchResults };
  }
);
