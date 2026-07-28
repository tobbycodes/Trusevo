export type ProjectGoal = 'credibility' | 'leads' | 'growth' | 'design';

export type WebsiteStatus = 'none' | 'outdated' | 'ineffective';

export interface ProjectBrief {
  goal: ProjectGoal;
  status: WebsiteStatus;
  companyName: string;
  email: string;
  additionalInfo: string;
}

export interface NavItem {
  label: string;
  href: string;
}
