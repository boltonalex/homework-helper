// Enums for YearGroup, KeyStage, and Subject
enum YearGroup {
  Year1 = "Year 1",
  Year2 = "Year 2",
  Year3 = "Year 3",
  Year4 = "Year 4",
  // Add more as needed
}

enum KeyStage {
  KS1 = "KS1",
  KS2 = "KS2",
  // Add more if necessary
}

enum Subject {
  Science = "Science",
  Math = "Math",
  English = "English",
  // Add other subjects as needed
}

// Main Interface for Educational Content
export interface EducationalContent {
  year_group: YearGroup; // Uses the YearGroup enum
  key_stage: KeyStage; // Uses the KeyStage enum
  subject: Subject; // Uses the Subject enum
  topic_title: string; // e.g., "Plants"
  method_explanation: string; // Explanation of the topic or method
  image_generated_by_dalle: string; // URL or description of the generated image
  interactive_activities: string[]; // List of activity descriptions
}
