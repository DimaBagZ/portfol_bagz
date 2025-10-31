import { ImageResponse } from "next/og";

// Route segment config - используем nodejs runtime для статического экспорта
export const runtime = "nodejs";
export const dynamic = "force-static";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fbbf24",
          fontWeight: "bold",
          borderRadius: "6px",
          border: "2px solid #fbbf24",
          boxShadow:
            "inset 0 0 10px rgba(251, 191, 36, 0.3), 0 0 10px rgba(251, 191, 36, 0.2)",
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
