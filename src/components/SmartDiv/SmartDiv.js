import React from 'react';
export default function SmartDiv({ children }) {
  return (
    <div style={{
      resize: "both",
      overflow: "auto"
    }}>
      {children}
    </div>
  );
}