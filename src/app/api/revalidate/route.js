import { revalidatePath } from "next/cache";

export async function GET(request) {
  revalidatePath("/", "layout");
  return Response.json({ revalidated: true, now: Date.now() });
}
