// app/api/image-seo/route.js

import { exiftool } from "exiftool-vendored";
import fs from "fs/promises";

export async function POST(req: Request) {
    const formData = await req.formData();
    const uploadDir = "./public/images";
    await fs.mkdir(uploadDir, { recursive: true });

    const file = formData.get("image") as File;

    const buffer = Buffer.from(
        await file.arrayBuffer()
    );

    const path = `${uploadDir}/${file.name}`;

    await fs.writeFile(path, buffer);

    await exiftool.write(path, {
        // ===== SEO =====
        Title: "Red Sports Car",
        Headline: "Luxury Red Sports Car",
        Description: "Luxury red sports car parked outdoors on a sunny day",
        ImageDescription: "A red sports car parked in an outdoor location",

        // ===== Keywords =====
        Keywords: [
            "sports car",
            "red car",
            "luxury vehicle",
            "automobile",
            "transportation",
            "fast car",
            "supercar",
            "performance car",
            "outdoor",
            "sunny day"
        ],
        Subject: [
            "sports car",
            "automobile",
            "luxury vehicle"
        ],

        // ===== Creator =====
        Artist: "John Smith",
        Creator: "John Smith",
        CreatorTool: "AI Metadata Generator",

        // ===== Copyright =====
        Copyright: "© 2026 My Company",
        CopyrightNotice: "© 2026 My Company",
        Rights: "All Rights Reserved",

        // ===== Credit =====
        Credit: "My Company",
        Source: "AI Generated",


        // ===== Location =====
        Location: "Dhaka, Bangladesh",
        City: "Dhaka",
        State: "Dhaka",
        Country: "Bangladesh",
        CountryCode: "BD",

        // GPS (optional)
        GPSLatitude: 23.8103,
        GPSLongitude: 90.4125,
        GPSLatitudeRef: "N",
        GPSLongitudeRef: "E",

        // ===== Content Info =====
        Category: "Transportation",


        // ===== Language =====
        Language: "en",

        // ===== Date =====
        DateCreated: "2026:06:21 10:00:00",
        CreateDate: "2026:06:21 10:00:00",


        // ===== Rating =====
        Rating: 5,



        // ===== IPTC =====
        ObjectName: "Red Sports Car",
        // ===== Custom =====
        Comment: "Generated automatically by AI image SEO tool",
        UserComment: "SEO optimized metadata embedded"
    });

    const metadata = await exiftool.read(path);
    console.log(metadata);

    return Response.redirect(
        new URL(`/images/${file.name}`, req.url)
    );

}