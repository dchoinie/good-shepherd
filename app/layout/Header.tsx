import NavItemComponent from "../custom_components/NavItemComponent";
import { NavItem } from "../types/layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
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
    <header className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <NavItemComponent
                key={item.label}
                label={item.label}
                link={item.link}
                subItems={item.subItems}
              />
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="bg-rose-900 hover:bg-rose-800 text-white font-medium"
          >
            <Link href="/new">I&apos;m New</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
