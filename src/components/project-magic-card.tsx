'use client'

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectMagicCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {

  const { theme } = useTheme();


  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} className="h-full" whileInView={{ scale: 1, opacity: 1 }}  transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
      <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} className={"flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ease-out"}>
            <Link href={href || "#"} className={cn("block cursor-pointer mb-4", className)} >
              {video && (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="pointer-events-none mx-auto h-48 w-full object-cover object-top" // needed because random black line at bottom of video
                />
              )}
              {image && (
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className="h-40 w-full  overflow-hidden object-cover object-top"
                />
              )}
            </Link>
            <CardHeader className="px-4">
              <div className="space-y-1">
                <CardTitle className="mt-1 text-lg">{title}</CardTitle>
                <div className="hidden font-sans text-xs underline print:visible">
                  {link?.replace("https://", "").replace("www.", "").replace("/", "")}
                </div>
                <Markdown className="prose max-w-full leading-5 xl:leading-5 text-muted-foreground xl:text-sm text-pretty font-sans text-xs dark:prose-invert">
                  {/* {description.split(' ').slice(0, 12).join(' ') + '...'} */}
                  {description}
                </Markdown>
              </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-4">
              {tags && tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {tags?.map((tag) => (
                    <Badge
                      className="px-1 py-0 text-[10px]"
                      variant="secondary"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="mt-auto px-4 pb-4">
              {links && links.length > 0 && (
                <div className="flex flex-row flex-wrap items-start gap-1">
                  {links?.map((link, idx) => (
                    <Link href={link?.href} key={idx} target="_blank">
                      <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                        {link.icon}
                        {link.type}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </CardFooter>
      </MagicCard>
    </motion.div>
    
  );
}
