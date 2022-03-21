import sharp from "sharp";

sharp("test.png")
    .resize(80)
    .toFile("resized.png");