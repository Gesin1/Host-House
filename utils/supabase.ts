import { createClient } from "@supabase/supabase-js";

const bucket = "host-house";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timeStamp = Date.now();
  const NewName = `${timeStamp}-${image.name}`;
  console.log(`Uploading ${image.name} to Supabase`);
  const { data } = await supabase.storage
    .from(bucket)
    .upload(NewName, image, { cacheControl: "3600" });

  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(NewName).data.publicUrl;
};

// export const uploadImage = async (image: File) => {
//   const timeStamp = Date.now();
//   const NewName = `${timeStamp}-${image.name}`;
//   console.log(`Uploading ${image.name} to Supabase`);

//   try {
//     const { data, error } = await supabase.storage
//       .from(bucket)
//       .upload(NewName, image, { cacheControl: "3600" });

//     if (error) {
//       console.error("Upload failed:", error);
//       throw new Error(`Image upload failed: ${error.message}`);
//     }

//     return supabase.storage.from(bucket).getPublicUrl(NewName).data.publicUrl;
//   } catch (error) {
//     console.error("Upload error:", error);
//     throw new Error("Image upload failed");
//   }
// };
