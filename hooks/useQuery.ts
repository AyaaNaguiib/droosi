import { useQuery } from "@tanstack/react-query";
import { create } from "apisauce";

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

const api = create({
  baseURL: "https://manarbe.oetest.tech/api/v1/ar/",
  headers: { accept: "application/json" },
});

const fetchInstructors = async () => {
  const response = await api.get(
    "landing-page/landing?sessions_type=online&include=instructors"
  );

  if (!response.ok) {
    throw new Error("فشل في جلب البيانات");
  }

  const data = response.data as any;

  const included: IncludedItem[] = Array.isArray(data?.included)
    ? data.included
    : [];

  const instructors = included.filter((item) => item.type === "instructor");
  const subjects = included.filter((item) => item.type === "subject");

  const subjectMap = Object.fromEntries(
    subjects.map((s) => [
      s.id,
      s.attributes?.name?.trim() ,
    ])
  );

  return instructors.map((inst) => {
    const attrs = inst.attributes || {};
    const subjectIds =
      inst.relationships?.subjects?.data?.map((s) => s.id) || [];

    return {
      id: inst.id,
      name: attrs.name?.trim(),
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
