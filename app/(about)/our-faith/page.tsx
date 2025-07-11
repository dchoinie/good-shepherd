"use client";

import PageTitle from "../../../components/custom/PageTitle";
import PageContainer from "../../../components/custom/PageContainer";
import SectionTitle from "../../../components/custom/SectionTitle";

import {
  Cross,
  Book,
  ScrollText,
  Heart,
  Users,
  Globe,
  Shield,
  Lightbulb,
} from "lucide-react";

export default function OurFaith() {
  return (
    <div className="bg-gray-50 pb-24">
      <PageTitle
        title="Our Faith"
        subtitle="We believe, teach, and confess the saving Gospel of Jesus Christ as revealed in Holy Scripture and confessed in the Lutheran Confessions."
      />

      <PageContainer>
        {/* Introduction Section */}
        <div className="py-20 bg-gradient-to-br from-stone-50 to-gray-50 rounded-3xl mx-4 mb-20">
          <div className="px-8">
            <SectionTitle
              title="What We Believe"
              subtitle="As members of The Lutheran Church—Missouri Synod, we hold to the teachings of the Bible as the inspired and inerrant Word of God. We confess the faith as it has been handed down to us in the Lutheran Confessions."
              tag="LCMS Beliefs"
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-stone-600 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center">
                    <Cross className="text-stone-700 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    The Gospel of Jesus Christ
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We believe that salvation comes only through faith in Jesus
                  Christ, who lived a perfect life, died on the cross for our
                  sins, and rose from the dead. This salvation is a free gift of
                  God&apos;s grace, received through faith alone, not by our
                  works or merit.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-[#D4AF37] transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                    <Book className="text-[#D4AF37] text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    The Authority of Scripture
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We believe that the Bible is the inspired and inerrant Word of
                  God, the only source and norm for Christian faith and life.
                  Scripture alone is our authority for all matters of doctrine
                  and practice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Three Solas */}
        <div className="p-20 bg-gradient-to-r from-stone-100 to-gray-100 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative">
            <SectionTitle
              title="The Three Solas"
              subtitle="The foundational principles of the Lutheran Reformation that guide our faith and practice"
              tag="Reformation Principles"
            />

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-stone-700 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                  <div className="text-center">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <Cross className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Sola Fide
                    </h3>
                    <p className="text-stone-700 font-semibold mb-4">
                      Faith Alone
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We are saved by faith alone in Jesus Christ, not by our
                      works, merit, or worthiness. Faith is the instrument
                      through which we receive God&apos;s grace and forgiveness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B38F2E] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300">
                  <div className="text-center">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B38F2E] rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <Heart className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Sola Gratia
                    </h3>
                    <p className="text-[#D4AF37] font-semibold mb-4">
                      Grace Alone
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Salvation is entirely a gift of God&apos;s grace. We
                      cannot earn or deserve it. God&apos;s love and mercy are
                      freely given to us through Jesus Christ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                  <div className="text-center">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <ScrollText className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Sola Scriptura
                    </h3>
                    <p className="text-gray-700 font-semibold mb-4">
                      Scripture Alone
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The Bible alone is our source of divine truth and
                      authority. All teachings must be measured against
                      God&apos;s Word.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Doctrines */}
        <div className="py-20">
          <SectionTitle
            title="Core Doctrines"
            subtitle="The essential teachings that form the foundation of our Lutheran faith"
            tag="Christian Doctrine"
          />

          <div className="space-y-12 mt-16">
            <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-3xl p-8 border border-stone-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    The Trinity
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    We believe in one God in three persons: Father, Son, and
                    Holy Spirit. Each person is fully God, and yet there is only
                    one God. This is a mystery beyond human comprehension but
                    revealed to us in Scripture.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-stone-600">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">
                        God the Father
                      </h4>
                      <p className="text-gray-600">
                        Creator of heaven and earth, who loves us and sent His
                        Son for our salvation.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#D4AF37]">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">
                        God the Son
                      </h4>
                      <p className="text-gray-600">
                        Jesus Christ, fully God and fully man, who died and rose
                        for our salvation.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-600">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">
                        God the Holy Spirit
                      </h4>
                      <p className="text-gray-600">
                        Who calls, gathers, enlightens, and sanctifies the whole
                        Christian church.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-3xl p-8 border border-stone-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Cross className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Salvation by Grace Through Faith
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    We believe that all people are born sinful and are unable to
                    save themselves. Salvation comes only through faith in Jesus
                    Christ, who paid the penalty for our sins on the cross. This
                    salvation is a free gift of God&apos;s grace.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-stone-600">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">
                        Law and Gospel
                      </h4>
                      <p className="text-gray-600">
                        The Law shows us our sin and need for a Savior. The
                        Gospel proclaims the good news of forgiveness and
                        eternal life through Jesus Christ.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#D4AF37]">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">
                        Justification
                      </h4>
                      <p className="text-gray-600">
                        We are declared righteous before God not by our works,
                        but by faith in Christ, who lived the perfect life we
                        cannot live and died the death we deserve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-3xl p-8 border border-stone-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    The Church and Sacraments
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    We believe that the Church is the assembly of believers
                    where the Word of God is preached and the Sacraments are
                    administered.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-stone-600">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">
                        Baptism
                      </h4>
                      <p className="text-gray-600">
                        We believe that Baptism is a means of grace through
                        which God creates faith and gives the gift of the Holy
                        Spirit. It is not merely a symbol but a powerful work of
                        God.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-[#D4AF37]">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">
                        The Lord&apos;s Supper
                      </h4>
                      <p className="text-gray-600">
                        We believe that in the Lord&apos;s Supper, we receive
                        the true body and blood of Christ for the forgiveness of
                        sins. This is a mystery that we accept by faith.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lutheran Confessions */}
        <div className="py-20 bg-gradient-to-br from-stone-50 to-gray-50">
          <SectionTitle
            title="The Lutheran Confessions"
            subtitle="Our church subscribes to the Lutheran Confessions as a true and faithful exposition of Holy Scripture"
            tag="Confessional Lutheran"
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-stone-200 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-stone-600 to-gray-700 rounded-xl flex items-center justify-center">
                  <Book className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  The Book of Concord
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The Lutheran Confessions are contained in the Book of Concord,
                which includes the three ecumenical creeds and the Lutheran
                confessional writings.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-stone-50 rounded-lg">
                  <div className="w-3 h-3 bg-stone-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    The Apostles&apos; Creed, Nicene Creed, and Athanasian Creed
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-stone-50 rounded-lg">
                  <div className="w-3 h-3 bg-stone-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    The Augsburg Confession (1530)
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-stone-50 rounded-lg">
                  <div className="w-3 h-3 bg-stone-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    The Apology of the Augsburg Confession
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-stone-50 rounded-lg">
                  <div className="w-3 h-3 bg-stone-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    The Small and Large Catechisms of Martin Luther
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-stone-50 rounded-lg">
                  <div className="w-3 h-3 bg-stone-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    The Smalcald Articles and the Formula of Concord
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#D4AF37]/20 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B38F2E] rounded-xl flex items-center justify-center">
                  <Lightbulb className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Why Confessions Matter
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The Lutheran Confessions serve as a standard for teaching and
                practice, ensuring that our church remains faithful to
                God&apos;s Word and the Gospel of Jesus Christ.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-[#D4AF37]/5 rounded-lg">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    They provide a clear exposition of biblical teaching
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#D4AF37]/5 rounded-lg">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    They protect against false teaching and heresy
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#D4AF37]/5 rounded-lg">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    They unite us with the universal Christian church
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#D4AF37]/5 rounded-lg">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    They guide our preaching, teaching, and practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Ministry */}
        <div className="p-20 bg-gradient-to-br from-stone-50 to-gray-50">
          <SectionTitle
            title="Our Mission and Ministry"
            subtitle="As a Lutheran congregation, we are called to share the Gospel and serve our neighbor"
            tag="Christian Service"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-gray-700 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-stone-600 to-gray-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Globe className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Witness
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are called to share the Gospel of Jesus Christ with all
                  people, making disciples through Word and Sacrament ministry.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B38F2E] rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B38F2E] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mercy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We serve our neighbor in love, showing God&apos;s mercy
                  through acts of compassion, care, and support for those in
                  need.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-stone-700 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-gray-600 to-stone-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Book className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Life Together
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We gather as God&apos;s people to worship, learn, and grow
                  together in faith, supporting one another in our Christian
                  walk.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 bg-gradient-to-br from-lcms-navy to-gray-700 text-white text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">Join Us in Worship</h3>
            <p className="text-xl mb-10 text-blue-100 leading-relaxed">
              We invite you to join us as we gather around God&apos;s Word and
              Sacraments, receiving His grace and growing in faith together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/worship-schedule"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-lcms-navy bg-white hover:bg-gray-100 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Worship Schedule
              </a>
              <a
                href="/mission"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-xl transform hover:scale-105"
              >
                Learn About Our Mission
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
