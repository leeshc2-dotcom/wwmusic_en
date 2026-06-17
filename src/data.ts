/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink, Milestone, ServiceDetail, TrustPillar, Executive } from "./types";

export const brandName = "WorldWide Music";
export const brandSlogan = "Maximizing Repertoire Value. Absolute Transparency. Local Integration.";

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "trust", label: "Our Approach", href: "#trust" },
  { id: "contact", label: "Connect", href: "#contact" }
];

export const milestones: Milestone[] = [
  {
    number: "PROVEN",
    label: "Local Copyright Administration",
    description: "Equipped with comprehensive industry expertise leading local copyright administration and collection services."
  },
  {
    number: "LOCAL",
    label: "Maximizing International Repertoire",
    description: "Uniquely specialized in representing global publications and navigating South Korea's highly dynamic music market."
  },
  {
    number: "SECURE",
    label: "Transparent Royalty Reporting",
    description: "Committed to supplying auditable reports and rapid accounting interfaces to safeguard independent catalogs."
  },
  {
    number: "DIRECT",
    label: "Efficient Administrative Infrastructure",
    description: "Eliminating cross-border delays with direct local collective management organization (CMO) integration."
  }
];

export const services: ServiceDetail[] = [
  {
    id: "sync",
    title: "Sync Licensing Representation",
    icon: "Tv2",
    shortDesc: "Actively pitch catalogs to public and cable broadcasters for premium TV dramas, unscripted shows, and commercial campaigns.",
    fullDesc: "We actively pitch your catalog to South Korea's top-tier broadcasting networks and cable channels, securing lucrative sync placements for TV dramas, reality shows, and commercial spots. Through our deep production partnerships, we expand your licensing horizon in the global K-Drama wave.",
    keyOfferings: [
      "Terrestrial public and commercial channels (KBS, SBS, MBC)",
      "Cable systems dominating K-Drama (tvN, JTBC)",
      "Sync synergy with entertainment giants (CJ ENM)",
      "Proactive one-stop representation for master and publishing rights"
    ],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sub-pub",
    title: "Copyright Administration & Collection",
    icon: "Music2",
    shortDesc: "Comprehensive registration, tracking, and collection of mechanical and performance royalties.",
    fullDesc: "We ensure no revenue is left behind by directly monitoring, claiming, and collecting your mechanical and performance royalties through Korea's established copyright societies. We register your musical works locally to accelerate distribution.",
    keyOfferings: [
      "Korea Music Copyright Association (KOMCA) direct registration",
      "Federation of Korean Music Performers (FKMP) neighboring rights claiming",
      "Sound recording producer collections",
      "Local language metadata alignment to claim unallocated black box royalties"
    ],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "royalty",
    title: "Digital Streaming Licensing",
    icon: "PiggyBank",
    shortDesc: "Enhancing digital footprint and rights administration across localized domestic DSPs.",
    fullDesc: "We maximize your digital footprint and streaming revenue across South Korea's highly localized and lucrative domestic digital service providers (DSPs). Our direct publisher pipelines ensure clean metadata ingestion.",
    keyOfferings: [
      "Direct royalty collection focus with Korean market leader Melon",
      "Integration with telecom-backed platforms Genie Music & FLO",
      "Playlisting and pitching to premium services Bugs & VIBE",
      "Micro-penny royalty tracking from local DSP databases"
    ],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  }
];

export const trustPillars: TrustPillar[] = [
  {
    title: "Sub-Publishing Representation",
    icon: "ShieldCheck",
    description: "We operate on an exclusive or territory-specific basis, safeguarding your rights and maximizing your catalog's potential in the local market.",
    metric: "EXCLUSIVE",
    metricLabel: "Territory-specific safeguards"
  },
  {
    title: "Writer & Publisher Share Protection",
    icon: "Zap",
    description: "We maintain full respect for creators' approval rights, thoroughly protecting your copyright and commercial assets.",
    metric: "PROTECTED",
    metricLabel: "Sync fee and licensing approval rights"
  },
  {
    title: "Transparent Accounting & Remittance",
    icon: "Languages",
    description: "We provide clear semi-annual royalty reporting and guarantee the prompt and transparent remittance of all collected royalties.",
    metric: "PERIODIC",
    metricLabel: "Transparent semi-annual statements"
  }
];

export const executives: Executive[] = [
  {
    name: "Seoung Hyun Lee",
    role: "Managing Director",
    bio: "An accomplished leader with extensive professional experience directing local copyright management agency services and managing elite music and video content production coordination in Korea.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop"
  }
];
