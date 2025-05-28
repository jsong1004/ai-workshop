import React from "react";

export default function Header() {
  return (
    <header
      style={{
        background: "#f0f8ff",
        borderBottom: "1px solid #e5e7eb",
        padding: "0.75rem 0",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "0 1rem",
        }}
      >
        <a
          href="https://www.ai-biz.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img
            src="src/assets/startup-consulting-logo.jpg"
            alt="StreamlineAI Logo"
            style={{
              height: 40,
              width: 40,
              background: "transparent",
              borderRadius: 8,
              marginRight: 12,
            }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.25rem", color: "#222" }}>
              StreamlineAI
            </div>
            <div
              style={{
                color: "#6b7280",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                fontWeight: 500,
              }}
            >
              AUTOMATE · OPTIMIZE · ACCELERATE
            </div>
          </div>
        </a>
      </div>
    </header>
  );
}