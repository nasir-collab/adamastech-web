"use client";

import React from "react";
import Link from "next/link";

interface AdamasLogoProps {
  size?: "sm" | "md" | "lg";
  customHeight?: number;
  withLink?: boolean;
  className?: string;
  variant?: string; // Kept for backwards compatibility
}

export function AdamasLogo({
  size = "md",
  customHeight,
  withLink = true,
  className = "",
}: AdamasLogoProps) {
  // Height sizing - scaled up for superior prominence and brand legibility
  const defaultHeight = size === "sm" ? 44 : size === "lg" ? 72 : 58;
  const height = customHeight || defaultHeight;
  const width = Math.round(height * (236 / 69));

  const content = (
    <div
      className={`adamas-logo-wrapper ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "transparent",
        backgroundColor: "transparent",
        padding: 0,
        margin: 0,
        border: "none",
        boxShadow: "none",
        userSelect: "none",
        cursor: withLink ? "pointer" : "default",
      }}
    >
      <img
        src="/images/adamas-logo.png"
        alt="Adamas Tech Consulting - Official Enterprise Logo"
        width={width}
        height={height}
        style={{
          display: "block",
          height: `${height}px`,
          width: "auto",
          maxWidth: "100%",
          objectFit: "contain",
          background: "transparent",
          transition: "transform 0.25s ease",
        }}
        loading="eager"
      />
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        aria-label="Adamas Tech Consulting - Homepage"
        style={{
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          background: "transparent",
        }}
      >
        {content}
      </Link>
    );
  }

  return content;
}
