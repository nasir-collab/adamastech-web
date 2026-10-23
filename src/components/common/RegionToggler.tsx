"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import {
  REGIONS,
  Region,
  getRegionFromPath,
  switchPathRegion,
} from "@/lib/regions";

interface RegionTogglerProps {
  variant?: "header" | "mobile" | "footer";
  className?: string;
}

export function RegionToggler({ variant = "header", className = "" }: RegionTogglerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Determine current region from current URL pathname
  const currentRegion = getRegionFromPath(pathname);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Handle region selection
  const handleSelectRegion = (region: Region) => {
    setIsOpen(false);

    // Save preference to localStorage and cookie
    try {
      localStorage.setItem("adamastech_region", region.code);
      document.cookie = `adamastech_region=${region.code}; path=/; max-age=2592000; SameSite=Lax`;
    } catch {
      // Ignore if localStorage unavailable
    }

    // Compute target route
    const targetUrl = switchPathRegion(pathname, region);

    // Navigate to new regional URL
    if (targetUrl !== pathname) {
      router.push(targetUrl);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`region-toggler-container ${variant} ${className}`}
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Trigger Button - Matches design in screenshot */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select region. Current region: ${currentRegion.label}`}
        className="region-toggler-btn"
      >
        <Globe size={16} className="region-globe-icon" aria-hidden="true" />
        <span className="region-current-label">{currentRegion.label}</span>
        <ChevronDown
          size={14}
          className={`region-chevron ${isOpen ? "open" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Available regions"
          className="region-dropdown-panel"
        >
          {REGIONS.map((region) => {
            const isSelected = region.code === currentRegion.code;
            return (
              <button
                key={region.code}
                role="option"
                aria-selected={isSelected}
                type="button"
                onClick={() => handleSelectRegion(region)}
                className={`region-option-item ${isSelected ? "selected" : ""}`}
              >
                <div className="region-option-left">
                  {isSelected && (
                    <Check size={14} className="region-check-icon" aria-hidden="true" />
                  )}
                  <span className="region-name">{region.label}</span>
                </div>
                <span className="region-slug">{region.slug}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
