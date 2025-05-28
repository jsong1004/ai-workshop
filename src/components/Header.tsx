import React from "react";
// Social icons require: npm install react-icons
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

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
            src="/streamlineai-logo.png"
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
        {/* Social Media Links */}
        <div className="flex items-center space-x-4 ml-4">
          <a href="https://www.facebook.com/usa.startup.consulting" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="w-5 h-5" style={{ color: '#f0f8ff' }} />
          </a>
          <a href="https://www.linkedin.com/company/75661993/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" style={{ color: '#f0f8ff' }} />
          </a>
          <a href="https://x.com/JaeheeSong1004" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="w-5 h-5" style={{ color: '#f0f8ff' }} />
          </a>
          <a href="https://www.instagram.com/knft82/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-5 h-5" style={{ color: '#f0f8ff' }} />
          </a>
        </div>
      </div>
    </header>
  );
} 