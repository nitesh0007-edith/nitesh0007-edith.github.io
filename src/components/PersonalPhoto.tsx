import Image from "next/image";
import { Expand } from "lucide-react";

const photos = {
  portrait: {
    width: 1000,
    height: 1164,
    alt: "Smiling portrait, with curly hair and a beard, seated beside a laptop",
  },
  codeolympics: {
    width: 1800,
    height: 1200,
    alt: "CodeOlympics 2026 medal presentation with three people, medals and prizes",
  },
  "scholarship-reception": {
    width: 1100,
    height: 1467,
    alt: "Two guests at the University of Glasgow International Postgraduate Taught Scholarship Reception",
  },
  "glasgow-community": {
    width: 2000,
    height: 1333,
    alt: "A large University of Glasgow group gathered in a wood-panelled hall",
  },
  dissertation: {
    width: 1200,
    height: 1600,
    alt: "Nitesh Ranjan Singh’s printed MSc dissertation on provider fairness in multi-stakeholder recommendation, on an outdoor table",
  },
  "campus-friends": {
    width: 1200,
    height: 1600,
    alt: "Five friends in University of Glasgow hoodies outside a stone archway",
  },
  "city-walks": {
    width: 1000,
    height: 1331,
    alt: "A portrait on a stone bridge, surrounded by old stone buildings",
  },
  "coastal-detour": {
    width: 1000,
    height: 1333,
    alt: "Walking beside turquoise coastal water, with rocks, green hills and a sandy beach",
  },
  "winter-hike": {
    width: 1000,
    height: 1333,
    alt: "A winter hiking portrait with a backpack and walking pole on a snowy mountain",
  },
  "london-after-dark": {
    width: 1000,
    height: 1333,
    alt: "An evening portrait by the Thames with the illuminated London Eye in the background",
  },
} as const;

export type PersonalPhotoName = keyof typeof photos;

export function PersonalPhoto({
  photo,
  sizes,
  className,
}: {
  photo: PersonalPhotoName;
  sizes: string;
  className?: string;
}) {
  const details = photos[photo];
  return (
    <picture className={`personal-photo ${className ?? ""}`}>
      <source
        type="image/webp"
        srcSet={`/images/personal/${photo}-640.webp 640w, /images/personal/${photo}.webp ${details.width}w`}
        sizes={sizes}
      />
      <Image
        src={`/images/personal/${photo}.webp`}
        alt={details.alt}
        width={details.width}
        height={details.height}
        sizes={sizes}
      />
    </picture>
  );
}

export function PhotoFrame({
  photo,
  label,
  caption,
  sizes,
  className = "",
}: {
  photo: PersonalPhotoName;
  label: string;
  caption: string;
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={`personal-frame ${className}`}>
      <a
        className="personal-photo-link"
        href={`/images/personal/${photo}.webp`}
        target="_blank"
        rel="noreferrer"
        aria-label={`View full photograph: ${caption} (opens in a new tab)`}
      >
        <PersonalPhoto photo={photo} sizes={sizes} />
        <span className="photo-expand" aria-hidden="true">
          <Expand size={15} />
        </span>
      </a>
      <figcaption>
        <span className="photo-label">{label}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
