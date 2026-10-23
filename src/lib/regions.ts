export interface Region {
  code: string;
  label: string;
  slug: string; // display badge e.g. '/in/'
  pathPrefix: string; // url prefix e.g. '/in'
  currency?: string;
  flag?: string;
}

export const REGIONS: Region[] = [
  {
    code: "in",
    label: "India",
    slug: "/in/",
    pathPrefix: "/in",
  },
  {
    code: "ae",
    label: "Middle East",
    slug: "/ae/",
    pathPrefix: "/ae",
  },
  {
    code: "uk",
    label: "UK & Ireland",
    slug: "/uk/",
    pathPrefix: "/uk",
  },
  {
    code: "us",
    label: "Global / Americas",
    slug: "/us/",
    pathPrefix: "/us",
  },
];

export const DEFAULT_REGION = REGIONS[1]; // Middle East as shown in the screenshot

export const SUPPORTED_REGION_CODES = REGIONS.map((r) => r.code);

/**
 * Extracts the active region from a given pathname (e.g. /in/about-us -> India)
 */
export function getRegionFromPath(pathname: string): Region {
  if (!pathname) return DEFAULT_REGION;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0]?.toLowerCase();

  const found = REGIONS.find((r) => r.code === first);
  return found || DEFAULT_REGION;
}

/**
 * Computes the target URL when switching regions, preserving current subpage
 */
export function switchPathRegion(currentPathname: string, targetRegion: Region): string {
  if (!currentPathname) currentPathname = "/";

  // Check if currentPath has an existing region prefix
  const segments = currentPathname.split("/").filter(Boolean);
  const first = segments[0]?.toLowerCase();

  const isExistingRegion = REGIONS.some((r) => r.code === first);
  const strippedPath = isExistingRegion
    ? "/" + segments.slice(1).join("/")
    : currentPathname;

  const normalizedStripped = strippedPath.startsWith("/") ? strippedPath : "/" + strippedPath;

  if (targetRegion.pathPrefix) {
    if (normalizedStripped === "/" || normalizedStripped === "") {
      return targetRegion.pathPrefix;
    }
    return `${targetRegion.pathPrefix}${normalizedStripped}`;
  }

  return normalizedStripped === "" ? "/" : normalizedStripped;
}
