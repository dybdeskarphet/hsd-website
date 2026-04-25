import { getAboutData } from "@/services/about_service";

export const AboutUs = async () => {
  const { title, description } = await getAboutData();

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 mt-10 md:text-lg text-md">
      <p className="md:w-50 w-full max-w-xs">
        {title}
      </p>
      <p className="font-pixel text-hsd-accent text-xl">...</p>
      <p className="md:w-80 w-full">
        {description}
      </p>
    </div>
  );
};
