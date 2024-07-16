import Image from "next/image";

export const Divider: React.FC = () => {
  return (
    <div className=" my-16">
      <Image
        src={"/images/divider.png"}
        alt="Gereh Gallery"
        width={1920}
        height={1080}
        sizes="100%"
        className="h-full object-cover"
      />
    </div>
  );
};
