export interface CreateFieldInput {
  name: string;
  key: string;
  description?: string;
  isTranslatable: boolean;
  isHidden: boolean;
  type: string;
  config: Record<string, unknown>;
}
