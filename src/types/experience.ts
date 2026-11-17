/**
 * Type definitions for the Experience section
 * Validates Requirements 7.1, 7.2, 7.3
 */

/**
 * Type for experience entry - either work experience or education
 */
export type ExperienceType = 'work' | 'education';

/**
 * Interface for a single experience item in the timeline
 */
export interface ExperienceItem {
  /** Unique identifier for the experience item */
  id: string;
  
  /** Type of experience - work or education */
  type: ExperienceType;
  
  /** Job title or degree name */
  title: string;
  
  /** Company name or educational institution */
  organization: string;
  
  /** Location of the organization */
  location: string;
  
  /** Time period for the experience */
  period: {
    /** Start date in format "YYYY-MM" or "Month YYYY" */
    start: string;
    /** End date in format "YYYY-MM" or "Month YYYY", or "Present" for current */
    end: string | 'Present';
  };
  
  /** Description of responsibilities or achievements */
  description: string;
  
  /** Optional list of technologies used */
  technologies?: string[];
}

/**
 * Props interface for the Experience component
 */
export interface ExperienceProps {
  /** Array of experience items to display in the timeline */
  experiences: ExperienceItem[];
}
