import { FormControl } from '@angular/forms';

export function regexPatternValidator(
  control: FormControl
): { [key: string]: unknown } | null {
  try {
    // Attempt to create a regex object with the provided pattern
    new RegExp(control.value);
  } catch (e) {
    // If an error occurs, the pattern is invalid
    return { regexPattern: true };
  }

  // The pattern is valid
  return null;
}
