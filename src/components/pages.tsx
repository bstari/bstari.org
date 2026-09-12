import AgricultureOutlined from "@mui/icons-material/AgricultureOutlined";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import AutoStoriesOutlined from "@mui/icons-material/AutoStoriesOutlined";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import NaturePeopleOutlined from "@mui/icons-material/NaturePeopleOutlined";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import FieldPhoto from "./mui/field-photo";
import { MuiTheme } from "./mui/mui-theme";
import {
  Actions,
  BodyText,
  CompactCta,
  ContactCard,
  ContactGrid,
  ContactPhone,
  ContactSection,
  CtaLink,
  FocusCard,
  FocusGrid,
  FocusIcon,
  FocusInner,
  FocusSection,
  Heading1,
  Heading2,
  Heading3,
  Hero,
  HeroCopy,
  HeroDescription,
  HeroGrid,
  HeroHeading,
  HeroSignature,
  Introduction,
  JumpLinks,
  Lead,
  PageHeading,
  PartnershipCallout,
  Place,
  PortfolioNote,
  Principles,
  PrinciplesNote,
  QuietLink,
  SectionHeading,
  SectionIcon,
  SectionLabel,
  SmallText,
  StoryCopy,
  StoryGrid,
  TextLink,
  VisionBand,
  WorkItem,
  WorkList,
} from "./mui/primitives";

const arrow = <ArrowOutwardRounded aria-hidden="true" />;
const expand = <ExpandMoreRounded aria-hidden="true" />;

type Locale = "en" | "id";
type PageProps = { locale?: Locale };

const localizedPath = (locale: Locale, path: string) =>
  `${locale === "id" ? "/id" : ""}${path}`;

const homeCopy = {
  en: {
    place: "From Belayan, East Kalimantan",
    heroHeading: ["Stronger communities.", "Lasting possibilities."],
    heroDescription:
      "We connect local knowledge with wider opportunity, so communities can shape a prosperous, sustainable future.",
    partnerCta: "Partner with us",
    workCta: "Explore our work",
    signature: "Independent social foundation",
    heroCaption:
      "Illustrative river landscape · Replace with a BESTARI photograph.",
    heroAlt:
      "Lush river and rainforest landscape in East Kalimantan, Indonesia.",
    beliefLabel: "The belief behind BESTARI",
    beliefHeading: ["Lasting change begins", "with people."],
    beliefDescription:
      "Farmers, women, young people, and local institutions hold the knowledge and ambition to move their communities forward. We work alongside them to turn that potential into opportunity.",
    beliefLink: "Get to know BESTARI",
    focusLabel: "Our focus",
    focusHeading: "Connected by purpose.",
    focusSummary: [
      "Four areas of work.",
      "One commitment to stronger communities.",
    ],
    focusCards: [
      {
        href: "/work/#education",
        icon: "education",
        title: ["Education &", "human development"],
        description: "Practical knowledge. Greater possibilities.",
      },
      {
        href: "/work/#livelihoods",
        icon: "livelihoods",
        title: ["Community economy &", "sustainable livelihoods"],
        description: "Local capacity. Economic independence.",
      },
      {
        href: "/work/#environment",
        icon: "environment",
        title: ["Environment, climate &", "sustainable agriculture"],
        description: "Resilient land. Resilient communities.",
      },
      {
        href: "/work/#knowledge",
        icon: "knowledge",
        title: ["Research, knowledge &", "local culture"],
        description: "Local experience. Shared understanding.",
      },
    ],
    calloutLabel: "A shared investment in the future",
    calloutHeading: ["Local roots.", "Wider possibilities."],
    calloutDescription:
      "Bring your knowledge, resources, and networks. Together, we can build opportunities that communities carry forward.",
    calloutCta: "Let’s build a partnership",
  },
  id: {
    place: "Berakar di Belayan, Kalimantan Timur",
    heroHeading: ["Masyarakat berdaya.", "Masa depan yang lebih luas."],
    heroDescription:
      "Kami mempertemukan pengetahuan lokal dengan peluang yang lebih luas, agar masyarakat dapat membangun masa depan yang sejahtera dan berkelanjutan.",
    partnerCta: "Bermitra dengan kami",
    workCta: "Jelajahi karya kami",
    signature: "Yayasan sosial independen",
    heroCaption:
      "Lanskap sungai sebagai ilustrasi · Ganti dengan foto BESTARI.",
    heroAlt:
      "Lanskap sungai dan hutan hujan tropis di Kalimantan Timur, Indonesia.",
    beliefLabel: "Gagasan di balik BESTARI",
    beliefHeading: ["Perubahan yang bermakna", "dimulai dari masyarakat."],
    beliefDescription:
      "Petani, perempuan, generasi muda, dan lembaga lokal memiliki pengetahuan, pengalaman, dan tekad untuk memajukan masyarakatnya. Kami bekerja bersama mereka untuk mengubah potensi menjadi peluang.",
    beliefLink: "Kenali BESTARI",
    focusLabel: "Bidang kerja kami",
    focusHeading: "Terhubung oleh tujuan.",
    focusSummary: [
      "Empat bidang kerja.",
      "Satu komitmen untuk masyarakat yang lebih kuat.",
    ],
    focusCards: [
      {
        href: "/work/#education",
        icon: "education",
        title: ["Pendidikan &", "pengembangan manusia"],
        description: "Pengetahuan praktis. Pilihan yang lebih luas.",
      },
      {
        href: "/work/#livelihoods",
        icon: "livelihoods",
        title: ["Ekonomi masyarakat &", "penghidupan berkelanjutan"],
        description: "Kapasitas lokal. Kemandirian ekonomi.",
      },
      {
        href: "/work/#environment",
        icon: "environment",
        title: ["Lingkungan, iklim &", "pertanian berkelanjutan"],
        description: "Lahan tangguh. Masyarakat tangguh.",
      },
      {
        href: "/work/#knowledge",
        icon: "knowledge",
        title: ["Riset, pengetahuan &", "budaya lokal"],
        description: "Pengalaman lokal. Pemahaman bersama.",
      },
    ],
    calloutLabel: "Investasi bersama untuk masa depan",
    calloutHeading: ["Akar lokal.", "Peluang yang lebih luas."],
    calloutDescription:
      "Satukan pengetahuan, sumber daya, dan jejaring Anda. Bersama, kita dapat membangun peluang yang terus tumbuh dan menjadi milik masyarakat.",
    calloutCta: "Mari bangun kemitraan",
  },
} as const;

export function HomePage({ locale = "en" }: PageProps) {
  const copy = homeCopy[locale];
  const link = (path: string) => localizedPath(locale, path);

  return (
    <MuiTheme>
      <Hero>
        <HeroGrid>
          <HeroCopy>
            <Place component="p">
              <LocationOnOutlined aria-hidden="true" />
              {copy.place}
            </Place>
            <HeroHeading component="h1">
              {copy.heroHeading[0]}
              <br />
              {copy.heroHeading[1]}
            </HeroHeading>
            <HeroDescription component="p">
              {copy.heroDescription}
            </HeroDescription>
            <Actions>
              <CtaLink href={link("/partner/")} gold>
                {copy.partnerCta} {arrow}
              </CtaLink>
              <QuietLink href={link("/work/")}>{copy.workCta}</QuietLink>
            </Actions>
            <HeroSignature component="p">
              Belayan Sejahtera Lestari
              <span>{copy.signature}</span>
            </HeroSignature>
          </HeroCopy>
          <FieldPhoto
            name="hero-belayan"
            alt={copy.heroAlt}
            hero
            caption={copy.heroCaption}
            video="hero-river"
          />
        </HeroGrid>
      </Hero>

      <Introduction component="section">
        <SectionLabel component="p">{copy.beliefLabel}</SectionLabel>
        <Box>
          <Heading2 component="h2">
            {copy.beliefHeading[0]}
            <br />
            {copy.beliefHeading[1]}
          </Heading2>
          <BodyText component="p">{copy.beliefDescription}</BodyText>
          <TextLink href={link("/about/")}>
            {copy.beliefLink} {arrow}
          </TextLink>
        </Box>
      </Introduction>

      <FocusSection>
        <FocusInner>
          <SectionHeading>
            <Box>
              <SectionLabel component="p">{copy.focusLabel}</SectionLabel>
              <Heading2 component="h2">{copy.focusHeading}</Heading2>
            </Box>
            <BodyText component="p">
              {copy.focusSummary[0]}
              <br />
              {copy.focusSummary[1]}
            </BodyText>
          </SectionHeading>
          <FocusGrid>
            {copy.focusCards.map((card) => (
              <FocusCard href={link(card.href)} key={card.href}>
                <FocusIcon aria-hidden="true">
                  {card.icon === "education" && <SchoolOutlined />}
                  {card.icon === "livelihoods" && <GroupsOutlined />}
                  {card.icon === "environment" && <AgricultureOutlined />}
                  {card.icon === "knowledge" && <AutoStoriesOutlined />}
                </FocusIcon>
                <Heading3 component="h3">
                  {card.title[0]}
                  <br />
                  {card.title[1]}
                </Heading3>
                <p>{card.description}</p>
                <span className="card-arrow">{arrow}</span>
              </FocusCard>
            ))}
          </FocusGrid>
        </FocusInner>
      </FocusSection>

      <PartnershipCallout>
        <Box>
          <SectionLabel component="p">{copy.calloutLabel}</SectionLabel>
          <Heading2 component="h2">
            {copy.calloutHeading[0]}
            <br />
            {copy.calloutHeading[1]}
          </Heading2>
        </Box>
        <Box>
          <BodyText component="p">{copy.calloutDescription}</BodyText>
          <CtaLink href={link("/partner/")}>
            {copy.calloutCta} {arrow}
          </CtaLink>
        </Box>
      </PartnershipCallout>
    </MuiTheme>
  );
}

const aboutCopy = {
  en: {
    sectionLabel: "Our story",
    heading: [
      "Our roots are local.",
      "Our responsibility",
      "spans generations.",
    ],
    lead: "Belayan Sejahtera Lestari is an independent social foundation based in Muai Village, East Kalimantan. We believe sustainable development begins with people.",
    storyHeading: ["Born from experience.", "Built for what comes next."],
    storyCaption:
      "Illustrative community scene · Replace with a BESTARI photograph.",
    storyAlt: "Two women sitting together in a rural Indonesian village.",
    storyParagraphs: [
      "Our story grew from years alongside farmers, workers, women, young people, and rural institutions in the Belayan River region.",
      "These roots are connected to Koperasi Belayan Sejahtera (KBS). That journey showed us that community prosperity needs more than economic opportunity alone. Learning, leadership, inclusion, and environmental stewardship need space to grow together.",
      "BESTARI was established to provide that space. BESTARI and KBS are independent institutions, each with its own governance, responsibilities, and direction.",
    ],
    visionLabel: "Our vision",
    vision:
      "Thriving communities with the knowledge, opportunity, and capacity to build a prosperous and sustainable future.",
    guidesLabel: "What guides us",
    guidesHeading: ["A name.", "A commitment."],
    principles: [
      {
        summary: "Belayan — our roots",
        body: "A river connecting villages, livelihoods, cultures, and generations. Our work begins where our relationships and understanding run deepest.",
      },
      {
        summary: "Sejahtera — shared prosperity",
        body: "Prosperity means knowledge, dignity, security, participation, and the ability to shape one’s own future, as well as income.",
      },
      {
        summary: "Lestari — our responsibility",
        body: "Progress must respect ecological limits and leave meaningful opportunities for the generations that follow.",
      },
    ],
    principlesNote:
      "Integrity, independence, inclusion, respect, sustainability, and collaboration guide how we work.",
    partnershipLink: "Our approach to partnership",
  },
  id: {
    sectionLabel: "Cerita kami",
    heading: [
      "Akar kami tumbuh di sini.",
      "Tanggung jawab kami",
      "melintasi generasi.",
    ],
    lead: "Belayan Sejahtera Lestari adalah yayasan sosial independen yang berakar di Desa Muai, Kalimantan Timur. Kami percaya pembangunan berkelanjutan dimulai dari masyarakat.",
    storyHeading: ["Lahir dari pengalaman.", "Dibangun untuk masa depan."],
    storyCaption:
      "Suasana komunitas sebagai ilustrasi · Ganti dengan foto BESTARI.",
    storyAlt: "Dua perempuan duduk bersama di sebuah desa di Indonesia.",
    storyParagraphs: [
      "Cerita kami tumbuh dari pengalaman bertahun-tahun bekerja bersama petani, pekerja, perempuan, generasi muda, dan lembaga perdesaan di wilayah Sungai Belayan.",
      "Akar ini terhubung dengan perjalanan Koperasi Belayan Sejahtera (KBS). Dari sana kami belajar bahwa kesejahteraan masyarakat membutuhkan lebih dari sekadar peluang ekonomi. Pembelajaran, kepemimpinan, inklusi, dan kepedulian terhadap lingkungan perlu ruang untuk tumbuh bersama.",
      "BESTARI didirikan untuk menghadirkan ruang tersebut. BESTARI dan KBS memiliki akar sejarah yang sama, namun keduanya merupakan lembaga independen dengan tata kelola, tanggung jawab, dan arah kelembagaan masing-masing.",
    ],
    visionLabel: "Visi kami",
    vision:
      "Masyarakat yang sejahtera dan tangguh, dengan pengetahuan, peluang, dan kapasitas untuk membangun masa depan yang berkelanjutan.",
    guidesLabel: "Makna di balik nama kami",
    guidesHeading: ["Sebuah nama.", "Sebuah komitmen."],
    principles: [
      {
        summary: "Belayan — akar kami",
        body: "Sungai yang menghubungkan desa, penghidupan, budaya, dan generasi. Kerja kami dimulai dari tempat hubungan dan pemahaman kami berakar paling dalam.",
      },
      {
        summary: "Sejahtera — kesejahteraan bersama",
        body: "Bagi kami, kesejahteraan bukan hanya soal pendapatan, tetapi juga pengetahuan, martabat, keamanan, partisipasi, dan kemampuan menentukan masa depan sendiri.",
      },
      {
        summary: "Lestari — tanggung jawab kami",
        body: "Kemajuan harus menghormati batas ekologis dan meninggalkan peluang yang berarti bagi generasi berikutnya.",
      },
    ],
    principlesNote:
      "Integritas, kemandirian, inklusi, rasa hormat, keberlanjutan, dan kolaborasi menuntun cara kami bekerja.",
    partnershipLink: "Cara kami membangun kemitraan",
  },
} as const;

export function AboutPage({ locale = "en" }: PageProps) {
  const copy = aboutCopy[locale];
  const link = (path: string) => localizedPath(locale, path);

  return (
    <MuiTheme>
      <PageHeading component="section">
        <SectionLabel component="p">{copy.sectionLabel}</SectionLabel>
        <Heading1 component="h1">
          {copy.heading[0]}
          <br />
          {copy.heading[1]}
          <br />
          {copy.heading[2]}
        </Heading1>
        <Lead component="p">{copy.lead}</Lead>
      </PageHeading>

      <StoryGrid component="section">
        <FieldPhoto
          name="community-belayan"
          alt={copy.storyAlt}
          caption={copy.storyCaption}
        />
        <StoryCopy>
          <Heading2 component="h2">
            {copy.storyHeading[0]}
            <br />
            {copy.storyHeading[1]}
          </Heading2>
          {copy.storyParagraphs.map((paragraph) => (
            <BodyText component="p" key={paragraph}>
              {paragraph}
            </BodyText>
          ))}
        </StoryCopy>
      </StoryGrid>

      <VisionBand data-background="landscape">
        <Box
          sx={{
            width: "min(1240px, calc(100% - 112px))",
            marginInline: "auto",
            "@media (max-width: 999px)": { width: "calc(100% - 64px)" },
            "@media (max-width: 759px)": { width: "calc(100% - 40px)" },
          }}
        >
          <SectionLabel component="p">{copy.visionLabel}</SectionLabel>
          <Heading2 component="h2">{copy.vision}</Heading2>
        </Box>
      </VisionBand>

      <Introduction component="section">
        <Box>
          <SectionLabel component="p">{copy.guidesLabel}</SectionLabel>
          <Heading2 component="h2">
            {copy.guidesHeading[0]}
            <br />
            {copy.guidesHeading[1]}
          </Heading2>
        </Box>
        <Principles>
          {copy.principles.map((principle, index) => (
            <details open={index === 0} key={principle.summary}>
              <summary>
                {principle.summary}
                {expand}
              </summary>
              <p>{principle.body}</p>
            </details>
          ))}
          <PrinciplesNote component="p">{copy.principlesNote}</PrinciplesNote>
          <TextLink href={link("/partner/")}>
            {copy.partnershipLink} {arrow}
          </TextLink>
        </Principles>
      </Introduction>
    </MuiTheme>
  );
}

const pillars = [
  {
    id: "education",
    title: "Education & human development",
    line: "Knowledge creates choices.",
    description:
      "Practical, accessible learning that strengthens people’s ability to make decisions, lead, and create new possibilities.",
    topics:
      "Community education · Financial literacy · Leadership · Vocational skills",
    photo: "training-learning",
    alt: "Women practicing batik painting together in an Indonesian workshop.",
  },
  {
    id: "livelihoods",
    title: "Community economy & sustainable livelihoods",
    line: "Opportunity that grows from within.",
    description:
      "Supporting smallholder farmers, women, young people, and local enterprises to build the skills and institutions for economic independence.",
    topics:
      "Enterprise development · Financial management · Market access · Institutional capacity",
    photo: "training-livelihoods",
    alt: "A woman raking rice as it dries in a tropical village.",
  },
  {
    id: "environment",
    title: "Environment, climate & sustainable agriculture",
    line: "Prosperity depends on a living landscape.",
    description:
      "Connecting community wellbeing with responsible production, resilient agriculture, and care for the natural resources on which rural life depends.",
    topics:
      "Sustainable agriculture · Climate resilience · Responsible land management",
    photo: "training-agriculture",
    alt: "Farmers working in irrigated rice fields surrounded by palms.",
  },
  {
    id: "knowledge",
    title: "Research, knowledge & local culture",
    line: "Local experience deserves to be heard.",
    description:
      "Documenting community knowledge and connecting it with research, data, technology, and wider networks so local experience can inform broader change.",
    topics: "Research · Documentation · Knowledge exchange · Local culture",
    photo: "community-knowledge",
    alt: "Women sharing ideas around a table during a workshop.",
  },
] as const;

const indonesianPillars = [
  {
    id: "education",
    title: "Pendidikan & pengembangan manusia",
    line: "Pengetahuan membuka pilihan.",
    description:
      "Pembelajaran praktis dan mudah diakses untuk memperkuat kemampuan masyarakat dalam mengambil keputusan, memimpin, dan membuka peluang baru.",
    topics:
      "Pendidikan masyarakat · Literasi keuangan · Kepemimpinan · Keterampilan kerja",
    photo: "training-learning",
    alt: "Perempuan berlatih membatik bersama dalam sebuah lokakarya di Indonesia.",
  },
  {
    id: "livelihoods",
    title: "Ekonomi masyarakat & penghidupan berkelanjutan",
    line: "Peluang yang tumbuh dari dalam.",
    description:
      "Mendukung petani kecil, perempuan, generasi muda, dan usaha lokal untuk membangun keterampilan serta kelembagaan yang memperkuat kemandirian ekonomi.",
    topics:
      "Pengembangan usaha · Manajemen keuangan · Akses pasar · Penguatan kelembagaan",
    photo: "training-livelihoods",
    alt: "Seorang perempuan meratakan gabah yang dijemur di lingkungan desa tropis.",
  },
  {
    id: "environment",
    title: "Lingkungan, iklim & pertanian berkelanjutan",
    line: "Kesejahteraan bergantung pada lingkungan yang terjaga.",
    description:
      "Menghubungkan kesejahteraan masyarakat dengan produksi yang bertanggung jawab, pertanian tangguh, dan pengelolaan sumber daya alam yang menopang kehidupan perdesaan.",
    topics:
      "Pertanian berkelanjutan · Ketangguhan iklim · Pengelolaan lahan yang bertanggung jawab",
    photo: "training-agriculture",
    alt: "Petani bekerja di sawah berair yang dikelilingi pepohonan palem.",
  },
  {
    id: "knowledge",
    title: "Riset, pengetahuan & budaya lokal",
    line: "Pengalaman lokal layak didengar.",
    description:
      "Mendokumentasikan pengetahuan masyarakat dan menghubungkannya dengan riset, data, teknologi, serta jejaring yang lebih luas agar pengalaman lokal dapat memperkaya praktik pembangunan di berbagai tempat.",
    topics: "Riset · Dokumentasi · Pertukaran pengetahuan · Budaya lokal",
    photo: "community-knowledge",
    alt: "Perempuan berdiskusi di sekeliling meja dalam sebuah lokakarya.",
  },
] as const;

const workCopy = {
  en: {
    sectionLabel: "Our work",
    heading: ["Different starting points.", "A shared future."],
    lead: "Our four strategic pillars connect learning, livelihoods, the environment, and local knowledge. Each begins with the people who know their communities best.",
    jumpLabel: "Focus areas",
    jumpLinks: ["Learning", "Livelihoods", "Environment", "Knowledge"],
    detailLabel: "Explore the focus areas",
    portfolioLabel: "Project portfolio",
    portfolioHeading: "Stories from the field.",
    portfolioDescription:
      "We are preparing our project documentation for publication. This page currently presents our strategic focus; individual project stories and results will be shared as they are documented.",
    ctaHeading: "See a shared priority?",
    ctaLabel: "Explore a partnership",
  },
  id: {
    sectionLabel: "Bidang kerja kami",
    heading: ["Beragam titik awal.", "Masa depan bersama."],
    lead: "Empat pilar strategis kami menghubungkan pembelajaran, penghidupan, lingkungan, dan pengetahuan lokal. Setiap pilar dimulai dari masyarakat yang paling memahami konteksnya.",
    jumpLabel: "Bidang fokus",
    jumpLinks: ["Pembelajaran", "Penghidupan", "Lingkungan", "Pengetahuan"],
    detailLabel: "Lihat bidang fokus",
    portfolioLabel: "Portofolio proyek",
    portfolioHeading: "Cerita dari lapangan.",
    portfolioDescription:
      "Kami sedang menyiapkan dokumentasi proyek untuk dipublikasikan. Untuk saat ini, halaman ini menyajikan fokus strategis kami; cerita proyek dan hasilnya akan kami bagikan setelah terdokumentasi.",
    ctaHeading: "Menemukan prioritas bersama?",
    ctaLabel: "Jelajahi kemitraan",
  },
} as const;

export function WorkPage({ locale = "en" }: PageProps) {
  const copy = workCopy[locale];
  const localizedPillars = locale === "id" ? indonesianPillars : pillars;
  const link = (path: string) => localizedPath(locale, path);

  return (
    <MuiTheme>
      <PageHeading component="section">
        <SectionLabel component="p">{copy.sectionLabel}</SectionLabel>
        <Heading1 component="h1">
          {copy.heading[0]}
          <br />
          {copy.heading[1]}
        </Heading1>
        <Lead component="p">{copy.lead}</Lead>
        <JumpLinks aria-label={copy.jumpLabel}>
          {copy.jumpLinks.map((label, index) => (
            <a href={`#${localizedPillars[index].id}`} key={label}>
              {label}
            </a>
          ))}
        </JumpLinks>
      </PageHeading>

      <WorkList>
        {localizedPillars.map((pillar) => (
          <WorkItem id={pillar.id} key={pillar.id}>
            <FieldPhoto name={pillar.photo} alt={pillar.alt} />
            <Box>
              <SectionLabel component="p">
                <SectionIcon aria-hidden="true">
                  {pillar.id === "education" && <SchoolOutlined />}
                  {pillar.id === "livelihoods" && <GroupsOutlined />}
                  {pillar.id === "environment" && <NaturePeopleOutlined />}
                  {pillar.id === "knowledge" && <AutoStoriesOutlined />}
                </SectionIcon>
                {pillar.line}
              </SectionLabel>
              <Heading2 component="h2">{pillar.title}</Heading2>
              <BodyText component="p">{pillar.description}</BodyText>
              <details>
                <summary>
                  {copy.detailLabel}
                  {expand}
                </summary>
                <p>{pillar.topics}</p>
              </details>
            </Box>
          </WorkItem>
        ))}
      </WorkList>

      <PortfolioNote>
        <SectionLabel component="p">{copy.portfolioLabel}</SectionLabel>
        <Heading2 component="h2">{copy.portfolioHeading}</Heading2>
        <BodyText component="p">{copy.portfolioDescription}</BodyText>
      </PortfolioNote>

      <VisionBand>
        <CompactCta>
          <Heading2 component="h2">{copy.ctaHeading}</Heading2>
          <CtaLink href={link("/partner/")} gold>
            {copy.ctaLabel} {arrow}
          </CtaLink>
        </CompactCta>
      </VisionBand>
    </MuiTheme>
  );
}

const partnerCopy = {
  en: {
    sectionLabel: "Partner with BESTARI",
    heading: ["Shared purpose.", "Lasting possibility."],
    lead: "Meaningful partnership brings together resources, knowledge, networks, and trust. Let’s connect your priorities with the strengths of Belayan’s communities.",
    startCta: "Start a conversation",
    workingLabel: "Working together",
    workingHeading: ["Community at the center.", "From the beginning."],
    principles: [
      {
        summary: "Listen before we design",
        body: "Start with local priorities, existing resources, and an understanding of how people live and work. Design programs alongside the communities involved.",
      },
      {
        summary: "Build capacity for the long term",
        body: "Prioritize knowledge, local leadership, and institutional strength so communities can carry progress forward with less external support.",
      },
      {
        summary: "Learn from evidence",
        body: "Agree on what success means, monitor responsibly, and use what we learn to improve the work together.",
      },
    ],
    commitmentLabel: "Our commitment to trust",
    accountabilityHeading: ["Accountability", "that grows with us."],
    accountabilityParagraphs: [
      "BESTARI is developing its systems for governance, financial accountability, program monitoring, and responsible decision-making.",
      "Our commitment is to build an institution where resources can be traced, programs evaluated, and decisions explained. Institutional independence and community interests guide our partnerships.",
      "We welcome philanthropic organizations, development agencies, universities, civil society, government, and responsible private-sector partners.",
    ],
    contactLabel: "Begin a partnership",
    contactHeading: ["What could we", "build together?"],
    contactDescription:
      "Tell us about your priorities, the communities you hope to work with, and the knowledge or resources you would like to contribute.",
    contactTitle: "Let’s start a conversation.",
    messagePrompt: "Prefer messaging?",
    whatsappLabel: "WhatsApp our team",
    callLabel: "Call our team",
    contactNote:
      "To help us begin, include your organization, area of interest, and proposed timeframe.",
  },
  id: {
    sectionLabel: "Bermitra dengan BESTARI",
    heading: ["Tujuan bersama.", "Peluang jangka panjang."],
    lead: "Kemitraan yang bermakna mempertemukan sumber daya, pengetahuan, jejaring, dan kepercayaan. Mari hubungkan prioritas Anda dengan kekuatan masyarakat Belayan.",
    startCta: "Mulai percakapan",
    workingLabel: "Bekerja bersama",
    workingHeading: ["Masyarakat sebagai pusat.", "Sejak awal."],
    principles: [
      {
        summary: "Dengarkan sebelum merancang",
        body: "Mulai dari prioritas lokal, sumber daya yang tersedia, dan pemahaman tentang cara masyarakat hidup serta bekerja. Rancang program bersama komunitas yang terlibat.",
      },
      {
        summary: "Bangun kapasitas untuk jangka panjang",
        body: "Utamakan pengetahuan, kepemimpinan lokal, dan kekuatan kelembagaan agar masyarakat dapat melanjutkan kemajuan dengan dukungan eksternal yang semakin kecil.",
      },
      {
        summary: "Belajar dari data dan pengalaman",
        body: "Sepakati ukuran keberhasilan, lakukan pemantauan secara bertanggung jawab, dan gunakan pembelajaran untuk menyempurnakan kerja bersama.",
      },
    ],
    commitmentLabel: "Komitmen kami untuk menjaga kepercayaan",
    accountabilityHeading: ["Akuntabilitas", "yang tumbuh bersama kami."],
    accountabilityParagraphs: [
      "BESTARI sedang membangun sistem tata kelola, akuntabilitas keuangan, pemantauan program, dan pengambilan keputusan yang bertanggung jawab.",
      "Kami berkomitmen membangun lembaga yang dapat menelusuri sumber daya, mengevaluasi program, dan menjelaskan setiap keputusan. Kemandirian lembaga serta kepentingan masyarakat menjadi dasar kemitraan kami.",
      "Kami terbuka untuk bermitra dengan organisasi filantropi, lembaga pembangunan, universitas, masyarakat sipil, pemerintah, dan sektor swasta yang bertanggung jawab.",
    ],
    contactLabel: "Mulai kemitraan",
    contactHeading: ["Apa yang dapat", "kita bangun bersama?"],
    contactDescription:
      "Ceritakan prioritas Anda, masyarakat yang ingin Anda dampingi, serta pengetahuan atau sumber daya yang ingin Anda kontribusikan.",
    contactTitle: "Mari memulai percakapan.",
    messagePrompt: "Lebih nyaman berkirim pesan?",
    whatsappLabel: "Hubungi tim kami di WhatsApp",
    callLabel: "Telepon tim kami",
    contactNote:
      "Agar kami dapat menindaklanjuti, sertakan nama organisasi, bidang yang diminati, dan perkiraan waktu pelaksanaan.",
  },
} as const;

export function PartnerPage({ locale = "en" }: PageProps) {
  const copy = partnerCopy[locale];

  return (
    <MuiTheme>
      <PageHeading component="section">
        <SectionLabel component="p">{copy.sectionLabel}</SectionLabel>
        <Heading1 component="h1">
          {copy.heading[0]}
          <br />
          {copy.heading[1]}
        </Heading1>
        <Lead component="p">{copy.lead}</Lead>
        <CtaLink href="#conversation">
          {copy.startCta} {arrow}
        </CtaLink>
      </PageHeading>

      <FocusSection>
        <Introduction component="section">
          <Box>
            <SectionLabel component="p">{copy.workingLabel}</SectionLabel>
            <Heading2 component="h2">
              {copy.workingHeading[0]}
              <br />
              {copy.workingHeading[1]}
            </Heading2>
          </Box>
          <Principles>
            {copy.principles.map((principle, index) => (
              <details open={index === 0} key={principle.summary}>
                <summary>
                  {principle.summary}
                  {expand}
                </summary>
                <p>{principle.body}</p>
              </details>
            ))}
          </Principles>
        </Introduction>
      </FocusSection>

      <Introduction component="section">
        <Box>
          <SectionLabel component="p">{copy.commitmentLabel}</SectionLabel>
          <Heading2 component="h2">
            {copy.accountabilityHeading[0]}
            <br />
            {copy.accountabilityHeading[1]}
          </Heading2>
        </Box>
        <Box>
          {copy.accountabilityParagraphs.map((paragraph) => (
            <BodyText component="p" key={paragraph}>
              {paragraph}
            </BodyText>
          ))}
        </Box>
      </Introduction>

      <ContactSection id="conversation">
        <ContactGrid>
          <Box>
            <SectionLabel component="p">{copy.contactLabel}</SectionLabel>
            <Heading2 component="h2">
              {copy.contactHeading[0]}
              <br />
              {copy.contactHeading[1]}
            </Heading2>
            <BodyText component="p">{copy.contactDescription}</BodyText>
          </Box>
          <ContactCard>
            <Heading3 component="h3">{copy.contactTitle}</Heading3>
            <ContactPhone href="tel:+6282157245665">
              <PhoneRounded aria-hidden="true" />
              +62 821-5724-5665
            </ContactPhone>
            <BodyText component="p">
              {copy.messagePrompt}
              <br />
              <TextLink href="https://wa.me/6282157245665">
                <WhatsApp aria-hidden="true" />
                {copy.whatsappLabel} {arrow}
              </TextLink>
            </BodyText>
            <CtaLink href="tel:+6282157245665">
              {copy.callLabel} {arrow}
            </CtaLink>
            <SmallText component="p">{copy.contactNote}</SmallText>
          </ContactCard>
        </ContactGrid>
      </ContactSection>
    </MuiTheme>
  );
}
