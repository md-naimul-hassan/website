"use server";
import { exiftool } from "exiftool-vendored";

export const image = async (image: File) => {
  console.log(image);
  const metadata = await exiftool.read(image.name);
  console.log(metadata);
  return metadata;
};