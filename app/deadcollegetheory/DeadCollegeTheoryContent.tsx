"use client";

import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

export default function DeadCollegeTheoryContent() {
  const [showBirthdayForm, setShowBirthdayForm] = useState(false);
  const [birthday, setBirthday] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("reset_birthday") === "true") {
      localStorage.removeItem("deadcollegetheory-birthday");
      window.history.replaceState({}, "", window.location.pathname);
      setBirthday(undefined);
      setShowBirthdayForm(true);
      return;
    }

    // Check if birthday is verified, show form inline if not
    const storedBirthday = localStorage.getItem("deadcollegetheory-birthday");
    if (storedBirthday) {
      try {
        setBirthday(new Date(storedBirthday));
      } catch {}
    }
    setShowBirthdayForm(!storedBirthday);
  }, []);

  return (
    <ViewTransition>
      <div className="flex justify-center p-4 pt-8 sm:pt-16">
        <div className="w-full max-w-lg space-y-6">
          {showBirthdayForm ? (
            <div className="space-y-8">
              <Link
                href="/"
                className="inline-block no-underline text-black/65 dark:text-white/65 hover:text-black/80 dark:hover:text-white/80"
              >
                Home
              </Link>

              <div className="space-y-4">
                <h1 className="font-medium text-black/85 dark:text-white/95">
                  Age Verification Required
                </h1>
                <p className="font-normal text-black/70 dark:text-white/85">
                  Please enter your birthday to access this content.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (birthday) {
                      localStorage.setItem(
                        "deadcollegetheory-birthday",
                        birthday.toISOString()
                      );
                      setShowBirthdayForm(false);
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="birthday"
                      className="block text-sm font-medium text-black/70 dark:text-white/85 mb-2"
                    >
                      Birthday
                    </label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="birthday"
                          className="w-full justify-start text-left font-normal border-black/20 dark:border-white/20 bg-white dark:bg-black/5 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {birthday
                            ? birthday.toLocaleDateString()
                            : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={birthday}
                          captionLayout="dropdown"
                          onSelect={(date) => {
                            setBirthday(date ?? undefined);
                          }}
                          defaultMonth={new Date(2000, 0)}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Button type="submit" className="w-full cursor-pointer">
                    Continue
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <Link
                href="/"
                className="inline-block no-underline text-black/65 dark:text-white/65 hover:text-black/80 dark:hover:text-white/80"
              >
                Home
              </Link>

              <div className="space-y-0">
                <h1 className="font-medium text-black/85 dark:text-white/95">
                  Dead College Theory
                </h1>
                <p className="font-normal text-black/50 dark:text-white/65">
                  00/00
                </p>
              </div>

              <ViewTransition update="none">
                <article className="space-y-4 font-normal text-black/70 dark:text-white/85">
                  This page is under construction.
                </article>
              </ViewTransition>
            </div>
          )}
        </div>
      </div>
    </ViewTransition>
  );
}
