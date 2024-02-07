"use client";
import Link from "next/link";
import Logo from "../Logo";
import { ToggleThemeButton } from "../buttons/ToggleThemeButton";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const handleClickScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer className="max-w-6xl mx-auto pb-14 px-4 md:px-10 ">
      <div className="border-t pt-5 flex flex-col gap-5 lg:flex-row justify-between">
        <div className=" lg:w-1/3">
          <Logo />
          <h1 className="font-bold mt-2 md:mt-0">
            Read, study, and learn The Noble Quran.
          </h1>
          <p className="text-muted-foreground mt-1">
            Al-Qur'an Web is a Sadaqah Jariyah. We hope to make it easy for everyone to
            read, study, and learn The Noble Quran.
          </p>
        </div>
        <div className="pt-2 flex flex-row gap-x-12 gap-y-5 flex-wrap lg:gap-14">
          <div>
            <h1 className="font-semibold">Navigate</h1>
            <div className="mt-4 flex flex-col gap-1.5">
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light  text-muted-foreground"
              >
                Home
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light  text-muted-foreground"
              >
                The Noble Qur'an
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light  text-muted-foreground"
              >
                Bookmarks
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light  text-muted-foreground"
              >
                Note
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light  text-muted-foreground"
              >
                About Us
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light  text-muted-foreground"
              >
                Feedback
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light  text-muted-foreground"
              >
                Donate
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Network</h1>
            <div className="mt-4 flex flex-col gap-1.5">
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Contact
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Linkedin
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Instagram
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Github
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Email
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Developer
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Popular Links</h1>
            <div className="mt-4 flex flex-col gap-1.5">
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Yasin
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Al-Mulk
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Ar-Rahman
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Al-Waqi'ah
              </Link>
              <Link
                href={"/"}
                scroll={false}
                className="hover:underline font-light text-muted-foreground"
              >
                Al-Kahf
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-5 md:flex-row md:justify-between mt-5  md:items-center">
        <div>
          <p className="text-xs font-light text-muted-foreground">
            © 2024 Al-Qur'an Web. All Rights Reserved
          </p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <ToggleThemeButton />
          <Button
            onClick={handleClickScroll}
            variant={"outline"}
            className="flex flex-row items-center gap-4"
          >
            <ChevronUp /> <span>Back to Top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
