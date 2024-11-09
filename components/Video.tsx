import HeroVideoDialog from "./ui/hero-video-dialog";

export function VideoPage() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/VL28qef17os?si=3S5e4td1Jgd0HA5M"
        thumbnailSrc="https://i.imgur.com/KGoo9AD.jpeg"
        thumbnailAlt="Hero Video"
      />


    </div>
  );
}
