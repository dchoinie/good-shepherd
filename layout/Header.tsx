import NavItemComponent from "../components/custom/NavItemComponent";
import { NavItem } from "../types/layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const navItems: NavItem[] = [
  {
    label: "About",
    subItems: [
      {
        label: "About GS",
        link: "/about",
      },
      {
        label: "Worship Schedule",
        link: "/worship-schedule",
      },
      {
        label: "Staff",
        link: "/staff",
      },
      {
        label: "Our Faith",
        link: "/our-faith",
      },
      {
        label: "History",
        link: "/history",
      },
      {
        label: "Membership",
        link: "/membership",
      },
    ],
  },
  {
    label: "Ministries",
    subItems: [
      {
        label: "Men",
        link: "/men",
      },
      {
        label: "Women",
        link: "/women",
      },
      {
        label: "Students",
        link: "/students",
      },
      {
        label: "Youth",
        link: "/youth",
      },
      {
        label: "Children",
        link: "/children",
      },
      {
        label: "Bible Study",
        link: "/bible-study",
      },
      {
        label: "Choir",
        link: "/choir",
      },
      {
        label: "Sunday School",
        link: "/sunday-school",
      },
    ],
  },
  {
    label: "Resources",
    subItems: [
      {
        label: "Sermons",
        link: "/sermons",
      },
      {
        label: "Lectionary",
        link: "/lectionary",
      },
      {
        label: "Newsletter",
        link: "/newsletter",
      },
      {
        label: "Prayer",
        link: "/prayer",
      },
      {
        label: "Marriage",
        link: "/marriage",
      },
      {
        label: "Baptism",
        link: "/baptism",
      },
    ],
  },
  {
    label: "Events",
    subItems: [
      {
        label: "Calendar",
        link: "/calendar",
      },
      {
        label: "Volunteer",
        link: "/volunteer",
      },
      {
        label: "Live Stream",
        link: "/live-stream",
      },
    ],
  },
  {
    label: "Support",
    link: "/support",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export default function Header() {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-white">
            Good Shepherd
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <nav className="flex gap-8">
              {navItems.map((item) => (
                <NavItemComponent
                  key={item.label}
                  label={item.label}
                  link={item.link}
                  subItems={item.subItems}
                />
              ))}
            </nav>
            <Button
              asChild
              size="lg"
              className="bg-[#D4AF37] text-[#1B3B6F] hover:bg-[#D4AF37]/90 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/new">I&apos;m New</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
