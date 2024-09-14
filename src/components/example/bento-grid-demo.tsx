import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Crafting Eye-Catching Posters",
    description: "Design visually striking posters that captivate and communicate effectively.",
    header: <img src="https://utfs.io/f/bf3481b9-e9b6-45f1-89ec-61ed1820cbcc-oiw5b2.jpg" alt="" className="w-full min-h-[6rem] object-cover rounded-md"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Building Bold Banners",
    description: "Create impactful banners that draw attention and convey your message powerfully.",
    header: <img src="https://utfs.io/f/7c6eecae-3ff9-4847-9cea-d613dffc9827-jd4cl3.jpg" alt="" className="w-full min-h-[6rem] h-full rounded-md"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    
    title: "Designing Dynamic Flex and Standees",
    description: "Produce vibrant and professional flex and standees for events and promotions.",
    header: <img src="https://utfs.io/f/50070c50-7290-46d4-954a-77af1d3b9737-m8dzti.jpg" alt="" className="w-full min-h-[6rem] h-full rounded-md object-cover"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Curating Social Media Content",
    description:
      "Develop engaging posts for LinkedIn and Instagram that boost visibility and engagement.",
    header: <img src="https://utfs.io/f/f97c1d50-3970-4bfe-bb95-9fbf6a749c4e-kyhnoc.jpg" alt="" className="w-full min-h-[6rem] h-full rounded-md"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mastering Canva and Photoshop",
    description: "Utilize Canva and Adobe Photoshop to create polished and professional designs.",
    header: <img src="https://utfs.io/f/826899ff-c188-4537-9271-3b74c050e1a4-1t6wcx.png" alt="" className="w-full object-contain min-h-[6rem] h-full rounded-md"/>,
   
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bringing Creativity to Life",
    description: "Transform ideas into compelling visuals that resonate with your audience.",
    header: <img src="https://utfs.io/f/3947a4fb-2eed-4d20-aa5a-72a0535079bd-tv8at4.jpg" alt="" className="w-full min-h-[6rem] h-full rounded-md"/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Visual Communication",
    description: "Combine aesthetics and functionality to deliver effective design solutions.",
    header: <img src="https://utfs.io/f/fdf03532-5b3c-492a-8177-59f7f42026a5-2jytbf.jpg" alt="" className="w-full object-cover min-h-[6rem] h-full rounded-md"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
