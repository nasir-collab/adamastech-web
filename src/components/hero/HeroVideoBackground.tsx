"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Canvas particle / network grid animation overlay
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes definition
    const nodeCount = Math.min(Math.floor(width / 32), 48);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      const isOrange = i % 7 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: isOrange ? 2.5 : 1.8,
        color: isOrange ? "rgba(243, 111, 33, 0.85)" : "rgba(56, 189, 248, 0.7)",
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines between nodes within distance threshold
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(24, 144, 215, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw & update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      if (isPlaying) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, prefersReducedMotion]);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="hero-video-container" aria-hidden="true">
      {/* Fallback & Poster Image Background */}
      <img
        src="/images/hero-vr-innovator.jpg"
        alt="Adamas Tech Consulting enterprise digital transformation"
        className="hero-video-element"
        style={{
          position: "absolute",
          inset: 0,
          objectFit: "cover",
          zIndex: 1,
        }}
        loading="eager"
        decoding="sync"
      />

      {/* Video stream with seamless looping & inline playback */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-vr-innovator.jpg"
          className="hero-video-element"
          style={{
            position: "absolute",
            inset: 0,
            objectFit: "cover",
            zIndex: 2,
            opacity: 0.85,
          }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Interactive Network Particle Simulation */}
      <canvas
        ref={canvasRef}
        className="hero-canvas-overlay"
        style={{ zIndex: 3 }}
      />

      {/* Cinematic Dual Gradient Overlay for Maximum Text Contrast */}
      <div className="hero-gradient-overlay" style={{ zIndex: 4 }} />

      {/* Accessible Video Control Button */}
      <div
        style={{
          position: "absolute",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 20,
          pointerEvents: "auto",
        }}
      >
        <button
          onClick={togglePlayback}
          className="btn-glass"
          style={{
            padding: "0.5rem 0.9rem",
            fontSize: "0.8125rem",
            borderRadius: "var(--radius-full)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(4, 12, 24, 0.75)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            color: "#FFFFFF",
          }}
          aria-label={isPlaying ? "Pause background animation" : "Play background animation"}
          title={isPlaying ? "Pause motion" : "Play motion"}
        >
          {isPlaying ? (
            <>
              <Pause size={14} color="#F36F21" />
              <span>Pause Motion</span>
            </>
          ) : (
            <>
              <Play size={14} color="#1890D7" />
              <span>Resume Motion</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
