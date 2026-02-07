import { getCareerPositions } from "@/lib/strapi";
import CareerClient from "./CareerClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CareerPage() {
  const positions = await getCareerPositions();

  // Transform to the shape the client component expects
  const transformedPositions = positions.map((pos) => ({
    id: pos.id,
    title: pos.title,
    description: pos.description || null,
    department: pos.department || null,
    location: pos.location || null,
    type: pos.type || null,
  }));

  return <CareerClient positions={transformedPositions} />;
}
