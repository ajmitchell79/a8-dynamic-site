export interface AppFrameworkData {
  Title: string;
  OntologyTypes: OntologyType[];
}

export class OntologyType {
  Label: string;
  Name: string;
  ConceptItems: ConceptItem[];
}

export interface ConceptItem {
  Name: string;
}
