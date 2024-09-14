"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-slate-950 dark:bg-grid-white/[0.05] items-center justify-center relative">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Sujal's designs exceeded our expectations. The creativity and attention to detail brought our vision to life. The posters and banners were stunning and delivered on time.",
    name: "Rohit Sharma",
    title: "Coordinator, SVIET College",
  },
  {
    quote:
      "Working with Sujal was a fantastic experience. The social media graphics created for our LinkedIn and Instagram campaigns were not only eye-catching but also effectively conveyed our brand message.",
    name: "Priya Mehta",
    title: "Marketing Head, Try in Tricity",
  },
  {
    quote: 
      "Sujal's ability to transform ideas into visually appealing designs is truly commendable. The flex and standees designed for our event were vibrant and professional.",
    name: "Anjali Verma",
    title: "Community Manager, The Uniques Community",
  },
  {
    quote:
      "The banners and posters designed by Sujal were top-notch. They captured the essence of our campaign perfectly and helped us engage our audience more effectively.",
    name: "Arjun Singh",
    title: "Creative Lead, GDSC SVIET",
  }
];
