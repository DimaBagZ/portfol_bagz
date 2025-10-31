import { ImageResponse } from "next/og";

// Route segment config - используем nodejs runtime для статического экспорта
export const runtime = "nodejs";
export const dynamic = "force-static";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fbbf24",
          fontWeight: "bold",
          borderRadius: "20%",
          border: "4px solid #fbbf24",
          boxShadow:
            "inset 0 0 20px rgba(251, 191, 36, 0.3), 0 4px 20px rgba(251, 191, 36, 0.2), 0 0 30px rgba(251, 191, 36, 0.1)",
        }}
      >
        DB
      </div>
    ),
    {
      ...size,
    }
  );
}
