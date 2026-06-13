import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <header className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-base font-bold md:text-lg tracking-tight">
          <span className="font-semibold text-foreground hover:opacity-80 transition-opacity">
            text-in-between
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/pricing"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Pricing
          </Link>
          <SignedIn>
            <Button variant="default" className="rounded-full px-4" asChild>
              <SignOutButton>Sign Out</SignOutButton>
            </Button>
          </SignedIn>
          <SignedOut>
            <Button asChild variant="default" className="rounded-full px-4">
              <SignInButton mode="modal">Sign In</SignInButton>
            </Button>
          </SignedOut>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 items-start mt-8 md:mt-12 justify-center">
        <section className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 text-center sm:px-6">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15] text-foreground">
              Auto Insert{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                text behind
              </span>{" "}
              your images
            </h1>
            <p className="mx-auto mt-6 max-w-lg md:max-w-xl text-sm md:text-lg text-muted-foreground leading-relaxed">
              Create POV-style YouTube thumbnails and social media graphics that stand out and go viral.
            </p>
            <div className="mt-10 flex flex-row items-center justify-center gap-4">
              <SignedIn>
                <Link href="/text-in-between">
                  <Button className="rounded-full px-6 py-5 shadow-xs">
                    Create New
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <Button
                  asChild
                  className="rounded-full px-6 py-5 shadow-xs"
                >
                  <SignInButton mode="modal">Try Now</SignInButton>
                </Button>
              </SignedOut>
              <Button
                variant="outline"
                className="rounded-full px-6 py-5"
                asChild
              >
                <Link href="https://youtu.be/iedOUP4Kl0U" target="_blank" rel="noopener noreferrer">Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Parallax Scroll Section */}
      <section className="mb-6">
        <ParallaxScroll images={images} />
      </section>
    </div>
  );
}

const images = [
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSqGXeXj9ltQrne75VOPhL0TbDXJCag9jzF6sIp",
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSqIo0Hh3cxAnKrB75ReLWdhFzMOu2kc0vJ9p8E",
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSqNMtbkdeXVCasj83EwuLky6TS12Mbg0qJ5YUO",
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSqRgYUvfkmb1p5FcagUo2qfeECnRVOB3hlvjGD",
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSqXfDQZXwIQb73TyX0wj4ZmOkroaeVuRgdftFv",
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSq1v7u3YnDx1lS8fMNFGCXn7wZE95e24VjHmuQ",
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSqjJYYu3TNlrh2LDeJSBcHGKYbZqpmQAz9ER1W",
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSq1v4jJdnDx1lS8fMNFGCXn7wZE95e24VjHmuQ",
  "https://f4l2c3q6cm.ufs.sh/f/yx7b1QjLXPSqEeu552VIG1T38d2bRpkCvLiXxMUqV7KHPZny",
];
