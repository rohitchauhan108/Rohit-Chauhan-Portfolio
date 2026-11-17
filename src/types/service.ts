/**
 * Type definitions for the Services section
 * Validates Requirements 8.1, 8.2
 */

import { ComponentType } from 'react';

/**
 * Interface for a single service offering
 */
export interface Service {
  /** Unique identifier for the service */
  id: string;
  
  /** Service title (e.g., "Next.js Development") */
  title: string;
  
  /** Description of the service offering */
  description: string;
  
  /** Name of the icon to display */
  iconName: string;
  
  /** List of technologies used in this service */
  technologies: string[];
  
  /** List of key features or capabilities of this service */
  features: string[];
}

/**
 * Props interface for the Services component
 */
export interface ServicesProps {
  /** Array of service offerings to display in the grid */
  services: Service[];
}
