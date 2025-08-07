import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Aarav",
    username: "@aaravtech",
    body: "This is the kind of tool I've always wanted for my research writing. Real-time collaboration and translation features are a game-changer.",
    img: "https://i.postimg.cc/90Myg6mR/young-handsome-indian-man-wearing-sunglasses-while-thinking-against-street-outdoors.jpg",
  },
  {
    name: "Sophia",
    username: "@sophiadesigns",
    body: "The ability to chat with my own content is wild. I use it to brainstorm new ideas for blog posts. Super helpful!",
    img: "https://i.postimg.cc/MGqMrCt6/alex-mccarthy-RGKd-WJOUFH0-unsplash.jpg",
  },
  {
    name: "Carlos",
    username: "@carlos_dev",
    body: "I invited my team to co-edit documents in real time and it worked flawlessly. Feels like Google Docs meets AI.",
    img: "https://i.postimg.cc/yNHcCg6z/shirt-confident-retro-man-happiness.jpg",
  },
  {
    name: "Fatima",
    username: "@fatimawrites",
    body: "I'm writing content in English and translating to Arabic instantly. This has saved me so much time. Amazing tool!",
    img: "https://i.postimg.cc/85sJ3489/reviewavatar1.jpg",
  },
  {
    name: "Liam",
    username: "@liamdocs",
    body: "SynkSpace streamlined our workflow and is easy to use.The simplicity, combined with powerful AI features, makes this one of the best writing and note-taking tools I've used.",
    img: "https://i.postimg.cc/kXGyTbG1/boy1.jpg",
  },
  {
    name: "Mei",
    username: "@meicode",
    body: "As a product designer, I use this to document ideas with teammates. Real-time updates make remote work feel seamless.",
    img: "https://i.postimg.cc/rsF9XdJp/jd-chow-gutlcc-GLXKI-unsplash.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="relative h-7 w-7 rounded-full overflow-hidden">
          <Image
            src={img}
            alt="User avatar"
            priority
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
