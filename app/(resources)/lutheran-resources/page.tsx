import React from "react";
import PageTitle from "@/components/custom/PageTitle";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  BookOpen,
  Globe,
  Heart,
  Shield,
  Users,
  MessageCircle,
  Building2,
  Leaf,
  Cross,
} from "lucide-react";

export default function LutheranResourcesPage() {
  const resources = [
    {
      name: "What About Series",
      description:
        "Educational pamphlets covering various theological topics and questions from the LCMS.",
      url: "https://resources.lcms.org/reading-study/what-about-pamphlets/",
      icon: BookOpen,
      category: "Education",
    },
    {
      name: "Book of Concord",
      description:
        "The complete collection of Lutheran confessional documents and theological writings.",
      url: "https://bookofconcord.org/",
      icon: BookOpen,
      category: "Theology",
    },
    {
      name: "LCMS",
      description:
        "The Lutheran Church—Missouri Synod official website with resources and information.",
      url: "https://www.lcms.org/",
      icon: Building2,
      category: "Denomination",
    },
    {
      name: "Concordia Publishing House",
      description:
        "Official publishing house of the LCMS, offering books, curriculum, and resources.",
      url: "https://www.cph.org/",
      icon: BookOpen,
      category: "Publishing",
    },
    {
      name: "All The Household",
      description:
        "Resources for Lutheran families and households, including devotions and family life materials.",
      url: "https://allthehousehold.com/",
      icon: Users,
      category: "Family",
    },
    {
      name: "Thrivent",
      description:
        "Christian financial services organization helping people be wise with money and live generously.",
      url: "https://www.thrivent.com/",
      icon: Shield,
      category: "Financial",
    },
    {
      name: "Lutherans For Life",
      description:
        "Pro-life ministry promoting the sanctity of human life from conception to natural death.",
      url: "https://lutheransforlife.org/",
      icon: Heart,
      category: "Life Issues",
    },
    {
      name: "Word Of Hope",
      description:
        "Crisis pregnancy and post-abortion ministry offering hope and healing through Christ.",
      url: "https://word-of-hope.org/",
      icon: MessageCircle,
      category: "Crisis Support",
    },
    {
      name: "Issues, Etc.",
      description:
        "Radio program and podcast discussing theological issues from a Lutheran perspective.",
      url: "https://issuesetc.org/",
      icon: MessageCircle,
      category: "Media",
    },
    {
      name: "MN South District",
      description:
        "Minnesota South District of the LCMS, serving congregations in southern Minnesota.",
      url: "https://www.mnsdistrict.org/",
      icon: Globe,
      category: "District",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Lutheran Resources"
        subtitle="Discover trusted resources for spiritual growth, theological study, and Lutheran ministry."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trusted Lutheran Resources
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore these carefully selected resources that align with
              Lutheran theology and practice. From theological study materials
              to family resources and ministry support, these tools can help you
              grow in faith and serve others.
            </p>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            // Alternate between LCMS navy and LCMS gold
            const borderColor =
              index % 2 === 0
                ? "border-l-4 border-lcms-navy"
                : "border-l-4 border-lcms-gold";

            return (
              <div
                key={resource.name}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 ${borderColor}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <resource.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {resource.name}
                    </h4>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <Button asChild variant="outline" size="sm" className="w-full">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Visit Resource
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-lcms-navy/10 rounded-2xl p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need More Resources?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you're looking for specific resources or have questions about
              any of these materials, please don't hesitate to reach out to our
              church office or speak with our pastor.
            </p>
            <Button asChild>
              <a href="/contact" className="flex items-center">
                Contact Us
                <MessageCircle className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
