import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IncludedItem {
  id: string;
  type: string;
  attributes?: {
    name?: string;
    profile_picture?: string;
    average_rating?: number;
    city_label?: string;
  };
  relationships?: {
    subjects?: {
      data?: { id: string }[];
    };
  };
}

const fetchInstructors = async () => {
  const { data } = await axios.get(
    "https://manarbe.oetest.tech/api/v1/ar/landing-page/landing?sessions_type=online&include=instructors",
    { headers: { accept: "application/json" } }
  );

  const included: IncludedItem[] = Array.isArray(data?.included)
    ? data.included
    : [];

  const instructors = included.filter(
    (item) => item.type === "instructor"
  );
  const subjects = included.filter(
    (item) => item.type === "subject"
  );

  const subjectMap = Object.fromEntries(
    subjects.map((s) => [
      s.id,
      s.attributes?.name?.trim() || "مادة غير معروفة",
    ])
  );

  return instructors.map((inst) => {
    const attrs = inst.attributes || {};
    const subjectIds =
      inst.relationships?.subjects?.data?.map((s) => s.id) || [];

    return {
      id: inst.id,
      name: attrs.name?.trim() ,
      image: attrs.profile_picture,
      rate: attrs.average_rating,
      location: attrs.city_label,
      subjects: subjectIds.map((id) => subjectMap[id]),
    };
  });
};

export const useInstructorsQuery = () =>
  useQuery({
    queryKey: ["instructors"],
    queryFn: fetchInstructors,
    
  });
