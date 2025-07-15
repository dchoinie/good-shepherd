import Image from "next/image";
import Container from "@/components/custom/Container";
import PageTitle from "@/components/custom/PageTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/custom/SEO";

export default function NewVisitorPage() {
  return (
    <div className="bg-gray-50">
      <SEO
        title="I'm New | Good Shepherd Lutheran Church"
        keywords="Lutheran church for new visitors, visiting Good Shepherd Lutheran Church, first time at church, what to expect at church, church service times North Mankato, welcoming church in Mankato MN, directions to Good Shepherd Lutheran Church, family friendly church Mankato, Sunday worship for newcomers, Bible study for visitors, LCMS church for new members"
      />
      <PageTitle
        title="Welcome to Good Shepherd"
        subtitle="We're glad you're here! Learn more about our church and what to expect when you visit."
      />
      <Container>
        <div className="w-full px-4 py-12">
          {/* LCMS Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">About the LCMS</h2>
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7 bg-white rounded-lg shadow-lg p-8">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Our Denomination
                    </h3>
                  </div>
                  <p className="text-lg mb-4">
                    Good Shepherd Lutheran Church is a member of The Lutheran
                    Church—Missouri Synod (LCMS), a denomination that confesses
                    the historic, orthodox Christian faith. The LCMS is
                    committed to the authority of Scripture and the Lutheran
                    Confessions, teaching that salvation comes by God&apos;s
                    grace through faith in Jesus Christ alone.
                  </p>
                  <p className="text-lg">
                    With over 6,000 congregations across the United States, the
                    LCMS is one of the largest Lutheran church bodies in
                    America, dedicated to sharing the Gospel of Jesus Christ
                    throughout the world.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5 bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
                <div className="w-full max-w-[200px] aspect-square relative mb-6">
                  <Image
                    src="/Cross_blue.png"
                    alt="LCMS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      6,000+
                    </div>
                    <div className="text-sm text-gray-600">Congregations</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      2M+
                    </div>
                    <div className="text-sm text-gray-600">Members</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Worship Service Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Worship Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Traditional Worship
                </h3>
                <p className="text-lg mb-4">
                  We follow a traditional liturgical worship service that has
                  been used by Christians for centuries. Our worship includes:
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="invocation">
                    <AccordionTrigger>Invocation</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        &quot;In the name of the Father and of the Son and of
                        the Holy Spirit.&quot; How many times have we heard
                        those words? And yet, they testify with renewed
                        freshness to our identity as children of God who&apos;ve
                        been baptized into the death and resurrection of Jesus.
                      </p>
                      <p>
                        Wouldn&apos;t it be something if God&apos;s faithful
                        would remember that every time they heard the words of
                        the Invocation, perhaps tracing the sign of the cross as
                        a visible reminder?
                      </p>
                      <p>
                        St. Paul beautifully captures the eternal significance
                        of our baptism into Christ when he writes to the
                        Galatians that &quot;as many of you as were baptized
                        into Christ have put on Christ&quot; (Gal. 3:27).
                      </p>
                      <p>
                        We are clothed with his righteousness. Unlike the man in
                        the parable of the wedding feast who had no wedding
                        garment, when we stand before our Judge on the Last Day,
                        we will be clothed and covered, robed in the purity of
                        Christ.
                      </p>
                      <p>
                        &quot;In the name of the Father and of the Son and of
                        the Holy Spirit.&quot; Already now, in this heaven on
                        earth we call worship, we stand with boldness before the
                        Triune God who has claimed us and named us.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="confession">
                    <AccordionTrigger>
                      Confession and Absolution
                    </AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        We can indeed approach God with confidence. And yet,
                        because we stand on this side of our Lord&apos;s final
                        return, we still have with us the devil, the world, and
                        our sinful flesh. We have not yet faced the final
                        judgment.
                      </p>
                      <p>
                        And so, with sin still working in us, the condemnation
                        of God&apos;s Law must still confront us, lest we have
                        any delusions that we might have something to boast of
                        before our mighty Judge.
                      </p>
                      <p>
                        Above all else, Confession and Absolution keep us honest
                        — honest with ourselves and honest before God. The act
                        of confession is not some work that we lay before the
                        Father&apos;s throne; rather, it is the simple
                        acknowledgment that God&apos;s Word is true and right
                        and that when we measure ourselves against its demands,
                        we come up short.
                      </p>
                      <p>
                        God&apos;s Word says &quot;you shall not give false
                        testimony,&quot; but in truth we have lied and gossiped
                        and slandered. And so, the Christian confesses:
                        &quot;Lord, Your Word is true; I have sinned.&quot;
                      </p>
                      <p>
                        There are three basic ways to handle sin and guilt. One
                        is to ignore or minimize them. We&apos;ve all been
                        tempted in that direction more than a few times.
                        Isn&apos;t that, after all, what our sinful human nature
                        is all about?
                      </p>
                      <p>
                        Another way is to institutionalize them, especially the
                        guilt part. After all, if you can keep people feeling
                        just guilty enough, you will keep them coming back for
                        more.
                      </p>
                      <p>
                        The third way is to give sin and guilt their proper due,
                        and then to silence them. That is the way of God&apos;s
                        absolution. With his forgiveness, our sin is removed
                        from us as far as the east is from the west.
                      </p>
                      <p>
                        Christians know that, but they also need to hear it
                        often. We need to be reminded that those familiar words,
                        &quot;I forgive you all your sins,&quot; are not just
                        some impersonal announcement. They say what they mean
                        and accomplish what they promise. Jesus himself said to
                        his disciples that the sins they forgive are forgiven
                        (John 20:23).
                      </p>
                      <p>
                        The last and greatest absolution that will ever be
                        spoken to us will be at the last judgment. In the final
                        pages of the Chronicles of Narnia, C.S. Lewis provides a
                        marvelous description of this event.
                      </p>
                      <p>
                        As each individual comes before Aslan — the lion who is
                        Lewis&apos; figure for Christ — one of two things
                        happens: either the person gazes directly into
                        Aslan&apos;s face and recognizes his forgiving
                        countenance, or, upon seeing the lion&apos;s stern
                        demeanor, passes into his long shadow, forever to be
                        separated from Christ.
                      </p>
                      <p>
                        In the Confession and Absolution we are being readied
                        for our appearance before Christ on the Last Day. And
                        hidden behind those comforting words that our sins are
                        forgiven is the invitation, &quot;Come, you who are
                        blessed by my father, inherit the kingdom prepared for
                        you from the foundation of the world&quot; (Matt.
                        25:34).
                      </p>
                      <p>
                        When our Lord speaks those words to us at the Last Day,
                        Confession and Absolution as we know it will cease, for
                        we will then bask in the eternal absolution of the Lamb.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="kyrie">
                    <AccordionTrigger>Kyrie</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        In this world of sin and death, Christians have plenty
                        of opportunities to join in the brief, yet
                        all-encompassing prayer of the Kyrie: &quot;Lord, have
                        mercy.&quot;
                      </p>
                      <p>
                        All around us we see the results of hatred, envy, lust,
                        and greed. Surely, the world is in need of God&apos;s
                        mercy. It&apos;s no wonder that the church, in her
                        worship, pleads before God on behalf of the whole world.
                        It&apos;s a prayer that no one else is going pray.
                      </p>
                      <p>
                        Yet, when we cry out, &quot;Lord, have mercy,&quot;
                        there is confidence in our voices because we know that
                        God is indeed merciful. He desires to bring relief to
                        the suffering that is all around us.
                      </p>
                      <p>
                        Our prayer may not always bring an immediate response —
                        at least, not the response that we are seeking — but
                        even then, we commend ourselves and the whole world to a
                        merciful God.
                      </p>
                      <p>
                        Like the confession of sins, however, our cry for mercy
                        will be silenced in heaven. There we will see the
                        results of God&apos;s mercy, as before the throne and in
                        front of the Lamb will stand all the redeemed — not one
                        of them worthy of the honor.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="hymn">
                    <AccordionTrigger>Hymn of Praise</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        On the night of Jesus&apos; birth, the angels let loose
                        their earth-shattering song of praise: &quot;Glory be to
                        God on high, and on earth peace, goodwill toward
                        men.&quot;
                      </p>
                      <p>
                        On that specific occasion, their praise gave utterance
                        to the good news that the Son of God had come in the
                        flesh. Heaven had come down to earth! And ever since,
                        the Church has continued to rejoice in this miracle of
                        our salvation.
                      </p>
                      <p>
                        The opening words of the Gloria in Excelsis are followed
                        by a hymn of praise to the Triune God. One can imagine
                        the faithful singing these words in heaven: &quot;We
                        praise you, we bless you, we worship you, we glorify
                        you, we give you thanks for your great glory.&quot;
                      </p>
                      <p>
                        Our focus is on the incarnate Son of God, the
                        only-begotten Son, the Lamb of God, and only Son of the
                        Father. And if that isn&apos;t enough to name this One
                        who is the object of our worship and praise, twice we
                        sing, &quot;you take away the sin of the world.&quot;
                      </p>
                      <p>
                        There it is, the heart and substance of the Christian
                        faith. In heaven we will be gathered around the throne
                        and the Lamb, confessing that he alone is holy, he alone
                        is the Lord.
                      </p>
                      <p>
                        In more recent times, the Lutheran Church in North
                        America has made a significant contribution to the
                        church&apos;s liturgy through the alternate Hymn of
                        Praise, &quot;This is the Feast.&quot;
                      </p>
                      <p>
                        Drawing directly from the description of heaven in the
                        Revelation to St. John, our voices are joined to that
                        heavenly throng as we sing with them:
                      </p>
                      <p>
                        &quot;Worthy is the Lamb who was slain, to receive power
                        and wealth and wisdom and might and honor and glory and
                        blessing!&quot; (Rev. 5:12)
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="word">
                    <AccordionTrigger>Word of God and Sermon</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        Frequently we conclude the reading of Holy Scripture
                        with the phrase, &quot;This is the Word of the
                        Lord!&quot; More than just a &quot;word&quot; from God,
                        this is his revelation in which he makes known to us his
                        will, most specifically, his merciful will that desires
                        our salvation.
                      </p>
                      <p>
                        Ultimately, this word points us to the Word, the
                        incarnate Son of God. He is God&apos;s final and full
                        revelation to us, the mirror of the Father&apos;s heart.
                      </p>
                      <p>
                        That is the point that the writer to the Hebrews makes
                        in the opening verses of his epistle: &quot;In many and
                        various ways God spoke to his people of old by the
                        prophets, but now in these last days, he has spoken to
                        us by his Son&quot; (Heb. 1:1-2a).
                      </p>
                      <p>
                        Only through him — God&apos;s only Son — are we able to
                        know the Father&apos;s favor and grace.
                      </p>
                      <p>
                        In the sermon, the Word of God is brought to bear on the
                        lives of the hearers. This is the equivalent of sitting
                        at the feet of Jesus. But it&apos;s more than mere
                        instruction.
                      </p>
                      <p>
                        Through the sermon, God speaks to us with his two-edged
                        sword of condemnation and promise, Law and Gospel. The
                        subject of the sermon is both God and us.
                      </p>
                      <p>
                        Through the sermon we come to a better understanding of
                        ourselves, especially our need for God&apos;s
                        forgiveness. But we also come face to face with
                        God&apos;s mercy and love.
                      </p>
                      <p>
                        Week after week, God&apos;s faithful hear the voice of
                        their Good Shepherd, preparing them, in a sense, for
                        that final day when Jesus calls them to their eternal
                        reward.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="creed">
                    <AccordionTrigger>Creed</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        In the course of his earthly ministry, Jesus put this
                        hard question to his disciples, &quot;Who do you say
                        that I am?&quot; He wasn&apos;t asking for the opinions
                        of the crowds. He wanted a confession of faith.
                      </p>
                      <p>
                        In reality, this confession is no different than the
                        confession of sins. In both, we acknowledge that what
                        God has said is true. When we confess our sins, we
                        acknowledge the truth that God speaks about us — that we
                        are sinners. When we confess the faith of the church in
                        the creed, our confession speaks about God — who he is
                        and what he has done.
                      </p>
                      <p>
                        In every age, the same question is put to the church:
                        who do you say that I am? As we open our mouths and
                        begin, &quot;I believe in God, the Father Almighty
                        ...,&quot; we confess a profound truth that has passed
                        over the lips of Christians in every generation.
                      </p>
                      <p>
                        This confession of the Triune God is the property of no
                        single individual, but of the whole church, including
                        the whole company of heaven. There are more than a few
                        saints and martyrs who put their lives on the line as
                        they defended the truths that we confess in the creeds.
                      </p>
                      <p>
                        Think of Athanasius, that faithful fourth-century pastor
                        and confessor, who was exiled numerous times for his
                        defense of the truth against the false teachers of his
                        day. Or Luther, who stood firm against the combined
                        might of the Roman Church and the Holy Roman Empire.
                      </p>
                      <p>
                        In our own day, there are faithful Christians who risk
                        their lives — and sometimes die — to confess these
                        truths.
                      </p>
                      <p>
                        In the Revelation to St. John, we find confession going
                        on in heaven. Just listen to the snippets of the grand
                        confession that swirls around God&apos;s throne:
                      </p>
                      <p>
                        Holy, holy, holy is the Lord God Almighty, who was and
                        is and is to come! (4:8b)
                      </p>
                      <p>
                        Worthy are you, our Lord and God, to receive glory and
                        honor and power, for you created all things, and by your
                        will they existed and were created (4:11).
                      </p>
                      <p>
                        Worthy are you to take the scroll and to open its seals,
                        for you were slain, and by your blood you ransomed
                        people for God from every tribe and language and people
                        and nation, and you have made them a kingdom and priests
                        to our God, and they shall reign on the earth (5:9-10).
                      </p>
                      <p>
                        In the same way, as we stand on holy ground where Jesus
                        comes in his Word and Sacraments, we join that noble
                        company of saints and martyrs, confessing these holy
                        truths concerning the Triune God.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="offertory">
                    <AccordionTrigger>Offertory</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        &quot;What shall I render to the Lord?&quot; Truth is,
                        we have nothing to render him. We brought nothing into
                        this world, and we will take nothing with us when we
                        depart.
                      </p>
                      <p>
                        As Jesus so poignantly tells us, our treasures are
                        already stored up for us in heaven (Matt. 6:19-21).
                        There is, however, an offering that we do make, both now
                        in our worship and one day in heaven itself. It is the
                        sacrifice of thanksgiving as we call on the name of the
                        Lord (Ps. 116:17).
                      </p>
                      <p>
                        In the Apology to the Augsburg Confession (Article 24),
                        this eucharistic sacrifice is carefully distinguished
                        from the propitiatory sacrifice of Christ. The sacrifice
                        for sins belongs to him alone.
                      </p>
                      <p>
                        Every time we try to grab that honor for ourselves, we
                        come up short — very short. But when we recognize our
                        rightful place — that we are on the receiving end of
                        God&apos;s merciful goodness — then the sacrifice of
                        thanksgiving cannot help but pour forth from our lips as
                        we give our thanks to the One who gave everything for
                        us.
                      </p>
                      <p>
                        The giving of our firstfruits, whether it is money or
                        possessions, time or talents, is also a part of this
                        sacrifice of thanksgiving. Our mouths cannot remain
                        separated from the rest of our bodies. If the
                        thanksgiving is flowing from our lips, then it will also
                        find expression in the giving of our very selves for the
                        sake of Christ and the neighbor.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="sanctus">
                    <AccordionTrigger>Sanctus</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        If any part of the service has been recognized as
                        providing a glimpse of heaven, it&apos;s the Sanctus:
                        &quot;Holy, holy, holy, Lord God of Sabaoth, heaven and
                        earth are full of your glory.&quot;
                      </p>
                      <p>
                        This is the eternal song of the angels who hover over
                        the throne of God in the vision of heaven that was given
                        to Isaiah (Is. 6:1-4). Such was the splendor of their
                        song that the very foundations of the threshold of the
                        temple trembled at the sound.
                      </p>
                      <p>
                        At first glance, these words appear to be out of place
                        at this point in the service. Nevertheless, the reality
                        is that there is nothing in this entire world that
                        compares with the miracle of Jesus&apos; bodily presence
                        to feed his people.
                      </p>
                      <p>
                        In this meal God is breaking into our world to give us
                        life. No wonder our repeated cry is &quot;Hosanna in the
                        highest,&quot; for what is more needed in this dying
                        world than the Lord&apos;s salvation?
                      </p>
                      <p>
                        The second half of the Sanctus contains a statement as
                        bold as the first. Here we have our own little Palm
                        Sunday. Just as the crowds cried out to Jesus as he
                        entered Jerusalem, so do we declare, &quot;Blessed is he
                        who comes in the name of the Lord&quot; (Mt. 21:9; Ps.
                        118:26).
                      </p>
                      <p>
                        Heaven continues to break into our world as Jesus, our
                        humble king, comes riding into our midst in the
                        Lord&apos;s name. This confession in the Sanctus of
                        Jesus&apos; real presence is so significant that Luther
                        proposed moving the Sanctus after the Words of
                        Institution in order to highlight the reality of the
                        words we sing.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="words">
                    <AccordionTrigger>Words of Our Lord</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        Among many Christians, the words of Jesus that we often
                        refer to as the Words of Institution are nothing more
                        than an historical report: this is what Jesus did and
                        what he said. Period.
                      </p>
                      <p>
                        We have been blessed to know, however, that these words
                        mean much more. They do what they say.
                      </p>
                      <p>
                        According to the command of Christ, we celebrate the
                        Lord&apos;s Supper not as a mere meal of remembrance but
                        as a Sacrament by which Jesus himself comes to us. We
                        don&apos;t transport ourselves back in time; rather, he
                        comes to us and brings heaven down to earth for our
                        benefit.
                      </p>
                      <p>
                        Of course, in heaven we won&apos;t receive the
                        Lord&apos;s Supper. There we will have Jesus — the Bread
                        of heaven — in all his fullness. But for now, as we wait
                        for his return, he establishes his own beachhead in our
                        sin-infested world, coming as our defender and
                        deliverer, offering his own body and blood as the
                        medicine of immortality.
                      </p>
                      <p>
                        Here we find strength for the journey as Christ dwells
                        in us and we in him. And the more we partake of this
                        sacred food, the greater our desire becomes to be with
                        Christ forever.
                      </p>
                      <p>
                        In the words of Thomas Aquinas&apos; great eucharistic
                        hymn:
                      </p>
                      <p>
                        O Christ, whom now beneath a veil we see: May what we
                        thirst for soon our portion be: To gaze on Thee
                        unveiled, and see Thy face, The vision of Thy glory, and
                        Thy grace. (Lutheran Service Book, 640)
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="agnus">
                    <AccordionTrigger>Agnus Dei</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        Turning again to the Revelation to St. John, at one
                        point John sees a scroll in the right hand of the One
                        who was sitting on the throne. A &quot;strong
                        angel&quot; puts forth the challenge, &quot;Who is
                        worthy to open the scroll and break its seals?&quot;
                      </p>
                      <p>
                        Then, between the throne and the elders, the Lamb comes
                        into view. Undoubtedly the most significant feature in
                        John&apos;s description of this Lamb is that it is a
                        lamb who appears to have been slain.
                      </p>
                      <p>
                        When we sing the Agnus Dei, &quot;Lamb of God, you take
                        away the sin of the world, have mercy on us,&quot; we
                        are preaching and praying all at once. It was, after
                        all, with these very words that John the Baptizer
                        pointed his disciples to Jesus (John 1:29, 36).
                      </p>
                      <p>
                        As we prepare to feast on the Lamb of our salvation, we
                        do indeed proclaim him who gave his life for us. Here is
                        the Lamb of God! Yet we also pray to him who is now
                        present in his body and blood.
                      </p>
                      <p>
                        We pray for mercy, mercy from the One who showed the
                        true depths of mercy and compassion as he was silently
                        led to slaughter, dying like a lamb shorn of all its
                        honor.
                      </p>
                      <p>
                        Returning one more time to the apostle John&apos;s
                        vision of heaven, we later hear his description of the
                        saints in white robes.
                      </p>
                      <p>
                        &quot;Who are they?&quot; John is asked. The answer:
                        &quot;These are the ones coming out of the great
                        tribulation. They have washed their robes and made them
                        white in the blood of the Lamb&quot; (Rev. 7:13-14).
                      </p>
                      <p>
                        This is the blood of our redemption, the propitiatory
                        sacrifice that was foreshadowed at the first Passover
                        when the blood of the year-old lambs was sprinkled on
                        the doorpost as a sign that blood had already been shed
                        in that house.
                      </p>
                      <p>
                        In his Easter hymn, Martin Luther applies that incident
                        to us, thus revealing our standing before the Father:
                      </p>
                      <p>
                        See, his blood now marks our door; Faith points to it;
                        Death passes o&apos;er, And Satan cannot harm us.
                        (Lutheran Service Book, 458)
                      </p>
                      <p>
                        So it is at every celebration of the Lord&apos;s Supper.
                        The blood of the Lamb is poured out for our drinking and
                        his flesh for our eating. Clearly, God&apos;s mercy is
                        shown, and his peace rests on us.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="distribution">
                    <AccordionTrigger>Distribution</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        Try for a moment to picture the heavenly throng standing
                        before the throne of God on the Last Day. The numbers
                        will be staggering.
                      </p>
                      <p>
                        And yet, united as we all are to Christ, the Bridegroom,
                        we will be one — his elect Bride. As the faithful make
                        their way to the altar to feast on the Bread of Life in
                        the distribution, they are given a glimpse of that holy
                        Bride.
                      </p>
                      <p>
                        Oh yes, we see all of her warts and blemishes: the petty
                        bickering over trivial matters, the deep disagreements
                        on more weighty issues, and the painful ways in which we
                        sometimes treat one another.
                      </p>
                      <p>
                        Yet, by our common confession of the truth, we are one
                        in Christ. As Christ gives himself to us in this holy
                        meal, he strengthens that unity and bids us love one
                        another with a deep and abiding love. How can it be any
                        other way, as we are sent from the table with the
                        blessing to depart in peace?
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nunc">
                    <AccordionTrigger>Nunc Dimittis</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>
                        Another Lutheran contribution to the church&apos;s
                        liturgy is the use of the Nunc Dimittis as the
                        post-communion canticle: &quot;Lord, now let Your
                        servant depart in peace.&quot;
                      </p>
                      <p>
                        At first glance it appears that we&apos;re taking the
                        words of Simeon completely out of context. After all,
                        what does his experience have to do with ours?
                      </p>
                      <p>
                        How can Holy Communion ever compare to Simeon&apos;s
                        unique honor of holding the infant Jesus in his arms
                        during the child&apos;s first visit to the temple at the
                        tender age of 40 days (Luke 2:25-38)?
                      </p>
                      <p>
                        Of course, we would love to have been in the temple and
                        shared in the experience with Simeon. For that matter,
                        we would give anything to have been the first — along
                        with the shepherds — to see the infant Jesus, or to have
                        been with the Magi as they offered their gifts to him.
                      </p>
                      <p>
                        But, as Luther so insightfully taught, we don&apos;t
                        find Christ in those places. Through the events of his
                        incarnation, birth, crucifixion, and resurrection our
                        Lord has accomplished our salvation.
                      </p>
                      <p>
                        But the benefits of his saving work — forgiveness, life,
                        and salvation — are distributed to us through his means
                        of grace, his Word and Sacraments. We can&apos;t go back
                        to stand with Simeon in the temple. The good news is
                        that we don&apos;t have to.
                      </p>
                      <p>
                        So when, following our reception of the Lord&apos;s
                        Supper, we sing Simeon&apos;s ancient song of faith —
                        &quot;Lord, now let your servant depart in peace&quot; —
                        nothing could be more appropriate. Indeed, our eyes have
                        seen his salvation. Better yet, we have tasted and seen
                        that the Lord is good (Ps. 34:8).
                      </p>
                      <p>
                        So, what could be better than holding the infant Jesus
                        in our arms? How about eating and drinking his body and
                        blood given for the forgiveness of our sins? This truly
                        is heaven on earth, because here we have Jesus and all
                        his benefits.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="benediction">
                    <AccordionTrigger>Benediction</AccordionTrigger>
                    <AccordionContent className="text-base space-y-4">
                      <p>&quot;The Lord bless you and keep you.&quot;</p>
                      <p>
                        Recall again the words of Jesus in the parable of the
                        sheep and the goats: &quot;Come, you who are blessed by
                        my father, inherit the kingdom.&quot;
                      </p>
                      <p>
                        The blessing that God speaks to us in the Benediction
                        prepares us for that final summons. Throughout the
                        Divine Service, God is forming us in his likeness as he
                        establishes in us a deeper and more lasting faith toward
                        him and a persistent and steadfast love for one another.
                      </p>
                      <p>
                        &quot;The Lord make his face shine on you and be
                        gracious to you.&quot;
                      </p>
                      <p>
                        In their reports of Jesus&apos; Transfiguration, the
                        evangelists tell us that Jesus shone more brightly than
                        the sun, prompting Peter to say, &quot;Lord, it is good
                        for us to be here.&quot;
                      </p>
                      <p>
                        In heaven we will have the same response because it will
                        be good — very good — to be in the presence of the Light
                        of the world.
                      </p>
                      <p>
                        For the moment, we see only dimly, but then we will see
                        face to face. Still, it is good to be here even now, in
                        this heaven on earth that we call worship, for already
                        here God showers us with his grace.
                      </p>
                      <p>
                        &quot;The Lord lift up his countenance on you and give
                        you peace.&quot;
                      </p>
                      <p>
                        We Christians are truly blessed in that God does not
                        hide his face from us. In all other religions there is
                        ultimately doubt as to their gods&apos; attitudes toward
                        them.
                      </p>
                      <p>
                        How can it be otherwise, given that their gods are the
                        creation of their own imaginations? But ours is the
                        creator of heaven and earth.
                      </p>
                      <p>
                        To be sure, he is a stern judge who holds the sinner
                        accountable. But in the person of his only Son, we see
                        our Father&apos;s true nature, his fatherly heart of
                        love. That is the countenance that he lifts up toward us
                        in his holy Word and Sacraments as he reveals his mercy
                        and grace.
                      </p>
                      <p>
                        Where the Lord blesses and makes his face shine and
                        lifts up his gracious countenance on us, there is peace.
                        Not the peace of this world, but peace between God and
                        his faithful people.
                      </p>
                      <p>
                        We know that peace because even now, in Word and
                        Sacraments, we have Jesus and all his benefits. And in
                        heaven we will rest in his eternal peace.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/side_2.jpg"
                  alt="Worship Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Communion Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Holy Communion</h2>
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 bg-white rounded-lg shadow-lg p-8">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      The Lord&apos;s Supper
                    </h3>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg mb-6">
                      In Holy Communion, Jesus mercifully gives us His body and
                      blood for the forgiveness of our sins. The LORD teaches us
                      through St. Paul in 1 Cor. 11:17-34 that this is a serious
                      matter and those who do not believe in His true presence
                      and forgiveness eat and drink judgment unto themselves. In
                      love for you, we cannot in good conscience allow that to
                      happen.
                    </p>
                    <p className="text-lg">
                      If you are not a member of this congregation or a church
                      in fellowship with the LCMS, we ask that you refrain from
                      communing. If you have any questions, Pastor LaPlant, or
                      an elder would be happy to speak with you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bg-white rounded-lg shadow-lg p-8">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-center text-gray-600">
                    Please speak with Pastor LaPlant or an elder before
                    communing if you have any questions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Welcome Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              A Warm Welcome Awaits You
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/fellowship.jpg"
                  alt="Fellowship Time"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Friendly Community
                </h3>
                <p className="text-lg mb-4">
                  At Good Shepherd, you&apos;ll find a warm, welcoming community
                  of believers who care for one another and share the love of
                  Christ. We invite you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Join us for worship</li>
                  <li>Participate in Bible studies</li>
                  <li>Get involved in our various ministries</li>
                  <li>Build lasting relationships</li>
                  <li>Grow in your faith</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Service Times</h3>
                <p className="text-lg">
                  Sunday Divine Service: 9:00 AM
                  <br />
                  Bible Study For Life: 10:15 AM
                  <br />
                  Sunday School: 10:15 AM (September - June)
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Location</h3>
                <p className="text-lg">
                  2101 Lor Ray Dr
                  <br />
                  North Mankato, MN 56001
                  <br />
                  Phone: 507.388.4336
                  <br />
                  Email: goodshepmankato@gmail.com
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
