import { ExperienceItem } from '@/types/experience';
import { Service } from '@/types/service';

/**
 * Validates and filters an array of experiences.
 * Removes experiences missing required fields or having invalid data types.
 * @param experiences Array of experiences to validate
 * @returns Filtered array of valid experiences
 */
export function validateExperiences(experiences: ExperienceItem[] | undefined | null): ExperienceItem[] {
  if (!experiences || !Array.isArray(experiences)) {
    return [];
  }

  return experiences.filter(exp => {
    // Check if exp is an object
    if (!exp || typeof exp !== 'object') return false;

    // Check required string fields
    const requiredStrings = ['id', 'title', 'organization', 'location', 'description'] as const;
    for (const field of requiredStrings) {
      const value = exp[field as keyof ExperienceItem];
      if (typeof value !== 'string' || !value.trim()) {
        return false;
      }
    }

    // Check type
    if (exp.type !== 'work' && exp.type !== 'education') {
      return false;
    }

    // Check period
    if (!exp.period || typeof exp.period !== 'object') {
      return false;
    }
    
    if (typeof exp.period.start !== 'string' || !exp.period.start.trim()) {
      return false;
    }
    
    if (typeof exp.period.end !== 'string' || !exp.period.end.trim()) {
      return false;
    }

    // Check technologies if provided
    if (exp.technologies !== undefined) {
      if (!Array.isArray(exp.technologies) || !exp.technologies.every(t => typeof t === 'string')) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Validates and filters an array of services.
 * Removes services missing required fields or having invalid data types.
 * @param services Array of services to validate
 * @returns Filtered array of valid services
 */
export function validateServices(services: Service[] | undefined | null): Service[] {
  if (!services || !Array.isArray(services)) {
    return [];
  }

  return services.filter(service => {
    if (!service || typeof service !== 'object') return false;

    const requiredStrings = ['id', 'title', 'description', 'iconName'] as const;
    for (const field of requiredStrings) {
      const value = service[field as keyof Service];
      if (typeof value !== 'string' || !value.trim()) {
        return false;
      }
    }

    if (!Array.isArray(service.technologies) || !service.technologies.every(t => typeof t === 'string')) {
      return false;
    }

    if (!Array.isArray(service.features) || !service.features.every(f => typeof f === 'string')) {
      return false;
    }

    return true;
  });
}
