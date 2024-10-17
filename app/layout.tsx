import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import React from "react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "./providers";

import TopLoader from "@/components/ui/top-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CodeSnap - Create, Run & Share Code Instantly",
    description:
        "CodeSnap is a simple platform for running and sharing code snippets quickly and easily. Create, share, and run code snippets with just a link.",
    keywords:
        "CodeSnap, code sharing, code execution, snippets, instant code sharing, developers, programming, run code, share code, code snippets, coding tools",
    authors: {
        name: "Ranit Manik",
        url: "https://github.com/RanitManik",
    },
    metadataBase: new URL("https://codesnap.ranitmanik.live/"),
    openGraph: {
        title: "CodeSnap - Create, Run & Share Code Instantly",
        description:
            "Create, Run and share code snippets quickly and easily with CodeSnap. Create and view code snippets with a single link.",
        url: "https://codesnap.ranitmanik.live/",
        type: "website",
        images: [
            {
                url: "/OG.png",
                width: 2400,
                height: 1260,
                alt: "CodeSnap - Create, Run & Share Code Instantly",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CodeSnap - Create, Run & Share Code Instantly",
        description:
            "Easily run and share code snippets with CodeSnap. Create, share, and run code with a simple link.",
        images: ["/OG.png"],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers
                    themeProps={{
                        attribute: "class",
                        defaultTheme: "light",
                    }}
                >
                    <div className="relative min-h-svh">{children}</div>
                </Providers>
                {/* Vercel Analytics for Web Performance Monitoring */}
                <Analytics />
                {/* Vercel Speed Insights for Page Speed Analysis */}
                <SpeedInsights />
                {/* NextJs TopLoader for loading animation */}
                <TopLoader />
                {/* Toast notifications for user feedback */}
                <Toaster />
            </body>
        </html>
    );
}
