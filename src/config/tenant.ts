export interface TenantConfig {
  brandName: string;
  legalEntityName: string;
  tagline: string;
  description: string;
  currency: {
    code: string;
    symbol: string;
    locale: string;
  };
  locations: {
    corporate: {
      building: string;
      road: string;
      area: string;
      city: string;
      country: string;
      fullAddress: string;
    };
    operationsHub: {
      name: string;
      facility: string;
      area: string;
      city: string;
      country: string;
      fullAddress: string;
    };
  };
  settlement: {
    mpesa: {
      paybill: string;
      accountNumber: string;
      accountName: string;
      memoFormat: string;
    };
    pesalink: {
      bankName: string;
      accountNumber: string;
      accountName: string;
      country: string;
    };
    wire: {
      bankName: string;
      accountNumber: string;
      swiftCode: string;
      accountType: string;
    };
  };
  communications: {
    whatsappNumber: string;
    displayPhone: string;
    salesHoursEAT: string;
  };
  catalog: {
    categories: Array<{
      name: string;
      slug: string;
      description: string;
    }>;
    optionTypes: {
      lengths: string[];
      textures: string[];
      laceTypes: string[];
      colors: string[];
    };
  };
}

export const tenantConfig: TenantConfig = {
  brandName: "Sophie's Human Hair Kenya",
  legalEntityName: "VIRTRESS COMMERCE COMPANY LIMITED",
  tagline: "100% Virgin & Raw Human Hair Bundles, Frontals & Wigs",
  description:
    "Direct importer and distributor of authentic human hair wigs, lace frontals, and raw virgin bundles. Central video verification and same-day dispatch from our Mugumoini hub in Nairobi.",
  currency: {
    code: "KES",
    symbol: "KSh",
    locale: "en-KE",
  },
  locations: {
    corporate: {
      building: "Woods Building, 2nd Floor",
      road: "James Gichuru Road",
      area: "Lavington",
      city: "Nairobi",
      country: "Kenya",
      fullAddress: "Woods Building, 2nd Floor, James Gichuru Road, Lavington, Nairobi, Kenya",
    },
    operationsHub: {
      name: "Mugumoini Operations & Dispatch Hub",
      facility: "Two-Storey Operations Center",
      area: "Mugumoini",
      city: "Nairobi",
      country: "Kenya",
      fullAddress: "Mugumoini Dedicated Logistics Hub, Nairobi, Kenya",
    },
  },
  settlement: {
    mpesa: {
      paybill: "444174",
      accountNumber: "46013001346306",
      accountName: "VIRTRESS COMMERCE COMPANY LIMITED",
      memoFormat: "[Buyer Name] + [Order No] + [Product]",
    },
    pesalink: {
      bankName: "Choice Bank",
      accountNumber: "46013001346306",
      accountName: "VIRTRESS COMMERCE COMPANY LIMITED",
      country: "Kenya",
    },
    wire: {
      bankName: "Choice Bank",
      accountNumber: "46013001346306",
      swiftCode: "CHFBKENXXXX",
      accountType: "Business Account",
    },
  },
  communications: {
    whatsappNumber: "254XXXXXXXXX", // Assigned sales rep line routing into respond.io
    displayPhone: "07XX XXX XXX",
    salesHoursEAT: "Mon - Sat: 08:30 - 18:30 EAT",
  },
  catalog: {
    categories: [
      {
        name: "Glueless & Pre-Cut Wigs",
        slug: "glueless-pre-cut-wigs",
        description: "Wear & Go 5x6, 5x5, and 2x6 pre-cut lace units designed for glueless installation.",
      },
      {
        name: "Transparent Lace Wigs",
        slug: "transparent-lace-wigs",
        description: "13x4 ear-to-ear frontals and 4x4 closures in bone straight and custom waves.",
      },
      {
        name: "Classic Machine-Made Wigs",
        slug: "machine-made-wigs",
        description: "Durable daily wear bob caps and full fringe units.",
      },
      {
        name: "Raw & Craft Bundles",
        slug: "raw-craft-bundles",
        description: "Cuticle-aligned double drawn bundles and raw Vietnamese craft hair.",
      },
    ],
    optionTypes: {
      lengths: ["8\"", "12\"", "14\"", "18\"", "20\"", "22\"", "24\"", "26\""],
      textures: [
        "Straight",
        "Body Wave",
        "Deep Wave",
        "Water Wave",
        "Kinky Straight",
        "Curly",
      ],
      laceTypes: [
        "5x6 Pre-Cut Glueless",
        "5x5 Glueless",
        "13x4 Transparent Lace",
        "4x4 Transparent Lace",
        "2x6 Lace",
        "Machine-Made",
      ],
      colors: [
        "Natural Black (N)",
        "#27 Honey Blonde",
        "#99J Burgundy Wine",
        "Highlight Brown",
        "P4/27 Piano Highlight",
        "P6/22 Blonde Highlight",
        "T30 Caramel",
        "T4/30/4 Ombre",
        "Vibrant Ginger",
      ],
    },
  },
};