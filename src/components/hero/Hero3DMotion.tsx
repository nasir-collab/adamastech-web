"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { Pause, Play, Move3d } from "lucide-react";

export function Hero3DMotion() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Three.js 3D Holographic Spatial HUD Scene
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const container = mountRef.current;
    if (!canvas || !container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL not supported:", e);
      setIsSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x061838, 0.006);

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 36);

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // -------------------------------------------------------------
    // 1. Lighting Setup
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x0a2a5a, 3.0);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 12, 90);
    cyanLight.position.set(10, 10, 18);
    scene.add(cyanLight);

    const orangeLight = new THREE.PointLight(0xf36f21, 6, 60);
    orangeLight.position.set(-15, -8, 14);
    scene.add(orangeLight);

    // -------------------------------------------------------------
    // 2. Holographic Headset Wireframe & Spatial HUD Group
    // -------------------------------------------------------------
    const hudGroup = new THREE.Group();
    hudGroup.position.set(3.5, 3.2, 0); // Positioned subtly in depth around the VR goggles
    scene.add(hudGroup);

    // Holographic Telemetry Rings
    const ring1Geo = new THREE.TorusGeometry(5.2, 0.04, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.5;
    hudGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.8, 0.035, 16, 90);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.65,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    hudGroup.add(ring2);

    // -------------------------------------------------------------
    // 3. Volumetric Neural Particles & Cyberspace Bokeh
    // -------------------------------------------------------------
    const particleCount = 1600;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colCyan = new THREE.Color(0x38bdf8);
    const colBlue = new THREE.Color(0x0066b3);
    const colOrange = new THREE.Color(0xf36f21);

    for (let i = 0; i < particleCount; i++) {
      const radius = 8 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const r = Math.random();
      const col = r < 0.15 ? colOrange : r < 0.7 ? colCyan : colBlue;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // -------------------------------------------------------------
    // 4. Interactive Mouse Parallax Tracking
    // -------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetCamX = 0;
    let targetCamY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = normX * 3.5;
      mouseY = normY * 2.8;

      // 2.5D background image parallax offset (smooth optical depth)
      if (bgImageRef.current) {
        const bgShiftX = normX * -15;
        const bgShiftY = normY * -10;
        bgImageRef.current.style.transform = `scale(1.05) translate3d(${bgShiftX}px, ${bgShiftY}px, 0)`;
      }
    };

    container.addEventListener("mousemove", handlePointerMove);

    // -------------------------------------------------------------
    // 5. Resize Handling
    // -------------------------------------------------------------
    const handleResize = () => {
      if (!canvas || !container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // -------------------------------------------------------------
    // 6. Real-Time Animation Loop
    // -------------------------------------------------------------
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startTime) * 0.001;

      targetCamX += (mouseX - targetCamX) * 0.04;
      targetCamY += (-mouseY - targetCamY) * 0.04;

      camera.position.x = targetCamX;
      camera.position.y = targetCamY;
      camera.lookAt(0, 0, 0);

      if (isPlaying) {
        ring1.rotation.z = elapsed * 0.2;
        ring2.rotation.y = elapsed * 0.28;

        particles.rotation.y = elapsed * 0.035;
        particles.rotation.x = Math.sin(elapsed * 0.02) * 0.08;
      }

      renderer?.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer?.dispose();
    };
  }, [prefersReducedMotion, isPlaying]);

  const togglePlayback = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  return (
    <div
      ref={mountRef}
      className="hero-3d-motion-container"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#051125",
        userSelect: "none",
        zIndex: 1,
      }}
      aria-label="Full Hero 3D Motion Video Background"
    >
      {/* 1. Entire Hero 3D Motion Background (VR Innovator in Cyberspace) */}
      <div
        ref={bgImageRef}
        className="hero-motion-video-layer"
        style={{
          position: "absolute",
          inset: "-5%",
          width: "110%",
          height: "110%",
          backgroundImage: "url('/images/hero-vr-innovator.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "78% 34%",
          transform: "scale(1.05)",
          transition: "transform 0.2s cubic-bezier(0.15, 0.85, 0.25, 1)",
          willChange: "transform",
          zIndex: 1,
          animation: !prefersReducedMotion && isPlaying ? "heroMotionSlowDrift 22s ease-in-out infinite alternate" : "none",
        }}
      />

      {/* 2. Cybernetic Visor Laser Scan Wave */}
      {!prefersReducedMotion && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.18) 50%, transparent 100%)",
            height: "100px",
            zIndex: 2,
            pointerEvents: "none",
            animation: "laserScanCycle 7s ease-in-out infinite",
          }}
        />
      )}

      {/* 3. Visor Luminous Cyan HUD Glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "24%",
          width: "380px",
          height: "240px",
          background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.38) 0%, rgba(0, 102, 179, 0.2) 45%, transparent 75%)",
          filter: "blur(32px)",
          borderRadius: "50%",
          zIndex: 2,
          pointerEvents: "none",
          animation: "visorPulse 4.5s ease-in-out infinite",
        }}
      />

      {/* 4. Three.js Interactive 3D Spatial Particles & Reticle Layer */}
      {isSupported && !prefersReducedMotion ? (
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />
      ) : null}

      {/* 5. Cinematic Deep-Blue Tint Overlay (Matches Reference Aesthetic & Guarantees Legibility) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(90deg, rgba(3, 11, 26, 0.92) 0%, rgba(3, 11, 26, 0.72) 38%, rgba(3, 11, 26, 0.35) 65%, rgba(3, 11, 26, 0.1) 100%),
            linear-gradient(180deg, rgba(3, 11, 26, 0.45) 0%, transparent 40%, rgba(3, 11, 26, 0.95) 100%)
          `,
          zIndex: 4,
          pointerEvents: "none",
        }}
      />

      {/* 6. Subtle Cybernetic Data Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, transparent 80%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* 7. Motion Control Toggle Button */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          right: "1.75rem",
          zIndex: 20,
          pointerEvents: "auto",
        }}
      >
        <button
          onClick={togglePlayback}
          className="btn-glass"
          style={{
            padding: "0.45rem 0.95rem",
            fontSize: "0.78125rem",
            borderRadius: "var(--radius-full, 9999px)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            background: "rgba(4, 16, 38, 0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            color: "#FFFFFF",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          }}
          aria-label={isPlaying ? "Pause 3D motion" : "Resume 3D motion"}
          title={isPlaying ? "Pause 3D motion" : "Resume 3D motion"}
        >
          {isPlaying ? (
            <>
              <Pause size={13} color="#F36F21" />
              <span>Pause Motion</span>
            </>
          ) : (
            <>
              <Play size={13} color="#38BDF8" />
              <span>Resume Motion</span>
            </>
          )}
        </button>
      </div>

      {/* Scoped CSS Animations for 3D Motion Feel */}
      <style jsx>{`
        @keyframes heroMotionSlowDrift {
          0% {
            transform: scale(1.04) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.08) translate3d(-10px, -6px, 0);
          }
          100% {
            transform: scale(1.04) translate3d(8px, 4px, 0);
          }
        }
        @keyframes laserScanCycle {
          0% {
            top: -120px;
            opacity: 0;
          }
          20% {
            opacity: 0.85;
          }
          80% {
            opacity: 0.85;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes visorPulse {
          0%, 100% {
            opacity: 0.55;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.06);
          }
        }
      `}</style>
    </div>
  );
}
