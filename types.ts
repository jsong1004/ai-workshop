
export enum AIExperienceLevel {
  NO_EXPERIENCE = "No experience",
  BEGINNER = "Beginner (tried a bit)",
  FREQUENT_USER = "Use frequently",
  DAILY_EXPERT = "Use daily for everything",
}

export interface RegistrationData {
  name: string;
  email: string;
  experience: AIExperienceLevel;
  usage: string;
}
