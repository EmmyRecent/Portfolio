"use client";

import { containerVariants } from "@/app/sections/About";
import { Pause, Play } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export const ButtonContainerVariant = {
  hidden: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideButtonTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();

      setShowButton(true);

      // clear any existing timer if they pause before it hides
      if (hideButtonTimer.current) clearTimeout(hideButtonTimer.current);
    } else {
      videoRef.current?.play();

      hideButtonTimer.current = setTimeout(() => {
        setShowButton(false);
      }, 1000);
    }
  };

  // clean up on unmount
  useEffect(() => {
    return () => {
      if (hideButtonTimer.current) clearTimeout(hideButtonTimer.current);
    };
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.4,
      }}
      className="relative"
    >
      <div
        className={` absolute inset-0 hover:bg-black/0 ${isPlaying ? "bg-black/0" : "bg-black/15"} transition-all duration-200 ease-in`}
        onClick={handlePlay}
      >
        <AnimatePresence>
          {showButton && (
            <motion.div
              variants={ButtonContainerVariant}
              initial="visible"
              exit={{ opacity: 0 }}
            >
              <Button
                className="bg-primary/90 rounded-full size-10 lg:size-16 absolute inset-0 justify-self-center place-self-center"
                onClick={handlePlay}
              >
                {isPlaying ? <Pause size={64} /> : <Play />}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <video
        ref={videoRef}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setShowButton(true);
          if (hideButtonTimer.current) clearTimeout(hideButtonTimer.current);
        }}
        width="640"
        height="360"
        className="w-full rounded-round"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default VideoPlayer;
