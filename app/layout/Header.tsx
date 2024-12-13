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
    <div className="max-w-screen-xl mx-auto py-6 flex gap-48 relative z-50">
      <nav className="flex w-full justify-between self-center text-gray-50">
        {navItems.map((navItem: NavItem) =>
          !navItem.subItems && navItem.link ? (
            <div key={navItem.label}>
              <Link href={navItem.link}>{navItem.label}</Link>
            </div>
          ) : (
            <div key={navItem.label}>
              <NavItemComponent
                label={navItem.label}
                subItems={navItem.subItems}
              />
            </div>
          )
        )}
      </nav>
      <Button asChild variant="default" className="bg-yellow-500">
        <Link href="/new">I&apos;m New</Link>
      </Button>
    </div>
  );
}
