/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Milestone {
  number: string;
  label: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  keyOfferings: string[];
  imageUrl: string;
}

export interface TrustPillar {
  title: string;
  icon: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface Executive {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ContactData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
