// src/components/PlayerProfile.jsx
import React from "react";

/**
 * Minimal PlayerProfile showing avatar, name and small static stats
 * Props:
 *  - id: "X" or "O"
 *  - name: string
 *  - wins, losses, draws, matches: numbers (optional)
 */
export default function PlayerProfile({
  id = "X",
  name = "Player",
  wins = 0,
  losses = 0,
  draws = 0,
  matches = 0,
}) {
  return (
    <div className="player-card-min">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div className="avatar-min">{id}</div>
        <div>
          <div className="player-name-min">{name}</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>{matches} matches</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 8, justifyContent: "space-between" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontWeight: 700 }}>{wins}</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>Wins</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontWeight: 700 }}>{losses}</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>Losses</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontWeight: 700 }}>{draws}</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>Draws</div>
        </div>
      </div>
    </div>
  );
}

