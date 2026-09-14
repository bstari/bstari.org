import AgricultureOutlined from "@mui/icons-material/AgricultureOutlined";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import AutoStoriesOutlined from "@mui/icons-material/AutoStoriesOutlined";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import NaturePeopleOutlined from "@mui/icons-material/NaturePeopleOutlined";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import FieldPhoto, { FieldVideo } from "./mui/field-photo";
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
  WorkHeading,
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
    heroHeading: ["Lasting progress.", "For generations."],
    heroDescription:
      "BESTARI works with communities and local institutions to strengthen knowledge, livelihoods, and care for the environment so progress can continue across generations.",
    partnerCta: "Partner with us",
    workCta: "Explore our work",
    signature: "Independent social foundation",
    heroAlt:
      "Farmers and volunteers carry young tree seedlings across a cultivated field.",
    videos: [
      {
        src: "belayan",
        title: "Belayan River",
        alt: "Aerial video follows the Belayan River as it winds through forest and cultivated land.",
        caption: "Aerial view of forest, water, and cultivated land.",
      },
      {
        src: "muai",
        title: "Muai Village",
        alt: "Aerial video surveys Muai Village, its homes, roads, and surrounding greenery.",
        caption: "Aerial view of homes, roads, and surrounding greenery.",
      },
    ],
    beliefLabel: "The belief behind BESTARI",
    beliefHeading: ["What lasts is", "what communities carry forward."],
    beliefDescription:
      "Sustainability takes shape when knowledge, livelihoods, local institutions, and natural systems grow stronger together. We work with the people who carry that progress forward.",
    beliefLink: "Get to know BESTARI",
    focusLabel: "Our focus",
    focusHeading: "Built to last.",
    focusSummary: [
      "Four areas of work.",
      "One commitment to lasting progress.",
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
    calloutLabel: "An investment in what lasts",
    calloutHeading: ["Local strength.", "Lasting progress."],
    calloutDescription:
      "Bring your knowledge, resources, and networks. Together, we can strengthen the systems that allow communities to carry progress forward.",
    calloutCta: "Let’s build a partnership",
  },
  id: {
    heroHeading: ["Kemajuan lestari.", "Lintas generasi."],
    heroDescription:
      "BESTARI bekerja bersama masyarakat dan lembaga lokal untuk memperkuat pengetahuan, penghidupan, dan kepedulian terhadap lingkungan agar kemajuan dapat berlanjut lintas generasi.",
    partnerCta: "Bermitra dengan kami",
    workCta: "Jelajahi karya kami",
    signature: "Yayasan sosial independen",
    heroAlt:
      "Petani dan relawan membawa bibit pohon muda melintasi lahan budidaya.",
    videos: [
      {
        src: "belayan",
        title: "Sungai Belayan",
        alt: "Video udara mengikuti alur Sungai Belayan yang membelah hutan dan lahan budidaya.",
        caption: "Hutan, aliran air, dan lahan budidaya dari udara.",
      },
      {
        src: "muai",
        title: "Desa Muai",
        alt: "Video udara meninjau Desa Muai, rumah, jalan, dan pepohonan di sekitarnya.",
        caption: "Rumah, jalan, dan pepohonan di sekitar desa dari udara.",
      },
    ],
    beliefLabel: "Gagasan di balik BESTARI",
    beliefHeading: ["Yang lestari adalah", "yang dapat diteruskan."],
    beliefDescription:
      "Keberlanjutan tumbuh ketika pengetahuan, penghidupan, kelembagaan lokal, dan lingkungan diperkuat bersama. Kami bekerja dengan masyarakat agar kemajuan itu dapat terus berjalan.",
    beliefLink: "Kenali BESTARI",
    focusLabel: "Bidang kerja kami",
    focusHeading: "Dibangun untuk berlanjut.",
    focusSummary: [
      "Empat bidang kerja.",
      "Satu komitmen untuk kemajuan yang bertahan.",
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
    calloutLabel: "Investasi untuk masa depan yang lestari",
    calloutHeading: ["Kekuatan lokal.", "Kemajuan yang lestari."],
    calloutDescription:
      "Satukan pengetahuan, sumber daya, dan jejaring Anda. Bersama, kita dapat memperkuat sistem yang memungkinkan masyarakat meneruskan kemajuan.",
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
          <FieldVideo
            name="hero-belayan"
            posterAlt={copy.heroAlt}
            hero
            videos={copy.videos}
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
    lead: "Belayan Sejahtera Lestari is an independent social foundation in Muai Village, East Kalimantan. We work to make development last by strengthening communities, local institutions, livelihoods, and the environment.",
    storyHeading: ["Born from experience.", "Built for what comes next."],
    storyCaption: "Community gathering beneath a wooden village house.",
    storyAlt:
      "Community members gather on a blue tarp beneath a wooden village house, with fields visible behind them.",
    storyParagraphs: [
      "Our story grew from years alongside farmers, workers, women, young people, and rural institutions in the Belayan River region.",
      "These roots are connected to Koperasi Belayan Sejahtera (KBS). That journey showed us that community prosperity needs more than economic opportunity alone. Learning, leadership, inclusion, and environmental stewardship need space to grow together.",
      "BESTARI was established to provide that space. BESTARI and KBS are independent institutions, each with its own governance, responsibilities, and direction.",
    ],
    visionLabel: "Our vision",
    vision:
      "A prosperous, sustainable future carried forward by capable communities and institutions.",
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
    lead: "Belayan Sejahtera Lestari adalah yayasan sosial independen di Desa Muai, Kalimantan Timur. Kami bekerja agar pembangunan dapat terus berlanjut dengan memperkuat masyarakat, kelembagaan lokal, penghidupan, dan lingkungan.",
    storyHeading: ["Lahir dari pengalaman.", "Dibangun untuk masa depan."],
    storyCaption: "Pertemuan warga di bawah rumah panggung.",
    storyAlt:
      "Warga berkumpul di atas terpal biru di bawah rumah panggung, dengan lahan terlihat di belakang.",
    storyParagraphs: [
      "Cerita kami tumbuh dari pengalaman bertahun-tahun bekerja bersama petani, pekerja, perempuan, generasi muda, dan lembaga perdesaan di wilayah Sungai Belayan.",
      "Akar ini terhubung dengan perjalanan Koperasi Belayan Sejahtera (KBS). Dari sana kami belajar bahwa kesejahteraan masyarakat membutuhkan lebih dari sekadar peluang ekonomi. Pembelajaran, kepemimpinan, inklusi, dan kepedulian terhadap lingkungan perlu ruang untuk tumbuh bersama.",
      "BESTARI didirikan untuk menghadirkan ruang tersebut. BESTARI dan KBS memiliki akar sejarah yang sama, namun keduanya merupakan lembaga independen dengan tata kelola, tanggung jawab, dan arah kelembagaan masing-masing.",
    ],
    visionLabel: "Visi kami",
    vision:
      "Masa depan yang sejahtera dan berkelanjutan, diteruskan oleh masyarakat dan lembaga yang berdaya.",
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
    line: "Knowledge carries progress forward.",
    description:
      "Practical, accessible learning that strengthens the knowledge and leadership communities need to carry progress forward.",
    topics:
      "Community education · Financial literacy · Leadership · Vocational skills",
    photo: "training-learning",
    alt: "An instructor leads a classroom session while participants listen from turquoise chairs.",
    caption: "Participants listen during a practical classroom session.",
  },
  {
    id: "livelihoods",
    title: "Community economy & sustainable livelihoods",
    line: "Opportunity that grows from within.",
    description:
      "Supporting smallholder farmers, women, young people, and local enterprises to build the skills and institutions that sustain economic independence.",
    topics:
      "Enterprise development · Financial management · Market access · Institutional capacity",
    photo: "training-livelihoods",
    alt: "Community members gather indoors around tables of food and local products.",
    caption: "Community members share food and local products around a table.",
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
    alt: "Farmers and volunteers carry young seedlings through a cultivated field.",
    caption: "A planting team carries young seedlings across the field.",
  },
  {
    id: "knowledge",
    title: "Research, knowledge & local culture",
    line: "Local knowledge for lasting progress.",
    description:
      "Documenting community knowledge and connecting it with research, data, technology, and wider networks so local experience can inform broader change.",
    topics: "Research · Documentation · Knowledge exchange · Local culture",
    photo: "community-knowledge",
    alt: "A small group works around tables outdoors, discussing notes and documents under the trees.",
    caption:
      "A field discussion brings participants together around notes and documents.",
  },
] as const;

const indonesianPillars = [
  {
    id: "education",
    title: "Pendidikan & pengembangan manusia",
    line: "Pengetahuan meneruskan kemajuan.",
    description:
      "Pembelajaran praktis dan mudah diakses untuk memperkuat pengetahuan serta kepemimpinan yang dibutuhkan masyarakat agar kemajuan dapat terus berlanjut.",
    topics:
      "Pendidikan masyarakat · Literasi keuangan · Kepemimpinan · Keterampilan kerja",
    photo: "training-learning",
    alt: "Fasilitator memimpin sesi di dalam kelas sementara peserta menyimak dari kursi berwarna toska.",
    caption: "Peserta menyimak sesi pembelajaran praktis di dalam ruangan.",
  },
  {
    id: "livelihoods",
    title: "Ekonomi masyarakat & penghidupan berkelanjutan",
    line: "Peluang yang tumbuh dari dalam.",
    description:
      "Mendukung petani kecil, perempuan, generasi muda, dan usaha lokal untuk membangun keterampilan serta kelembagaan yang menjaga kemandirian ekonomi.",
    topics:
      "Pengembangan usaha · Manajemen keuangan · Akses pasar · Penguatan kelembagaan",
    photo: "training-livelihoods",
    alt: "Warga berkumpul di dalam ruangan mengelilingi meja berisi hidangan dan produk lokal.",
    caption: "Warga berbagi hidangan dan produk lokal di sekeliling meja.",
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
    alt: "Petani dan relawan membawa bibit muda melintasi lahan budidaya.",
    caption: "Tim penanaman membawa bibit muda melintasi lahan.",
  },
  {
    id: "knowledge",
    title: "Riset, pengetahuan & budaya lokal",
    line: "Pengetahuan lokal untuk kemajuan yang berlanjut.",
    description:
      "Mendokumentasikan pengetahuan masyarakat dan menghubungkannya dengan riset, data, teknologi, serta jejaring yang lebih luas agar pengalaman lokal dapat memperkaya praktik pembangunan di berbagai tempat.",
    topics: "Riset · Dokumentasi · Pertukaran pengetahuan · Budaya lokal",
    photo: "community-knowledge",
    alt: "Kelompok kecil berdiskusi di sekitar meja di luar ruangan, membahas catatan dan dokumen di bawah pepohonan.",
    caption:
      "Diskusi lapangan mempertemukan warga di sekeliling catatan dan dokumen.",
  },
] as const;

const workCopy = {
  en: {
    sectionLabel: "Our work",
    heading: ["Different starting points.", "A shared future."],
    lead: "Our four strategic pillars create the conditions for progress that lasts: stronger learning, livelihoods, environments, and local knowledge.",
    jumpLabel: "Focus areas",
    jumpLinks: ["Learning", "Livelihoods", "Environment", "Knowledge"],
    detailLabel: "Explore the focus areas",
    portfolioLabel: "Project portfolio",
    portfolioHeading: "Stories from the field.",
    portfolioDescription:
      "We are preparing our project documentation for publication. This page currently presents our strategic focus; individual project stories and results will be shared as they are documented.",
    ctaHeading: "Build what lasts together.",
    ctaLabel: "Explore a partnership",
  },
  id: {
    sectionLabel: "Bidang kerja kami",
    heading: ["Beragam titik awal.", "Masa depan bersama."],
    lead: "Empat pilar strategis kami membangun dasar bagi kemajuan yang berlanjut: pembelajaran, penghidupan, lingkungan, dan pengetahuan lokal yang lebih kuat.",
    jumpLabel: "Bidang fokus",
    jumpLinks: ["Pembelajaran", "Penghidupan", "Lingkungan", "Pengetahuan"],
    detailLabel: "Lihat bidang fokus",
    portfolioLabel: "Portofolio proyek",
    portfolioHeading: "Cerita dari lapangan.",
    portfolioDescription:
      "Kami sedang menyiapkan dokumentasi proyek untuk dipublikasikan. Untuk saat ini, halaman ini menyajikan fokus strategis kami; cerita proyek dan hasilnya akan kami bagikan setelah terdokumentasi.",
    ctaHeading: "Mari membangun yang berlanjut.",
    ctaLabel: "Jelajahi kemitraan",
  },
} as const;

export function WorkPage({ locale = "en" }: PageProps) {
  const copy = workCopy[locale];
  const localizedPillars = locale === "id" ? indonesianPillars : pillars;
  const link = (path: string) => localizedPath(locale, path);

  return (
    <MuiTheme>
      <WorkHeading component="section">
        <Box>
          <SectionLabel component="p">{copy.sectionLabel}</SectionLabel>
          <Heading1 component="h1">
            {copy.heading[0]}
            <br />
            {copy.heading[1]}
          </Heading1>
          <Lead component="p">{copy.lead}</Lead>
        </Box>
        <JumpLinks aria-label={copy.jumpLabel}>
          {copy.jumpLinks.map((label, index) => (
            <a href={`#${localizedPillars[index].id}`} key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{label}</span>
              {arrow}
            </a>
          ))}
        </JumpLinks>
      </WorkHeading>

      <WorkList>
        {localizedPillars.map((pillar) => (
          <WorkItem id={pillar.id} key={pillar.id}>
            <FieldPhoto
              name={pillar.photo}
              alt={pillar.alt}
              caption={pillar.caption}
            />
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

      <VisionBand data-background="work">
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
    heading: ["Shared purpose.", "Lasting progress."],
    lead: "Meaningful partnership turns resources, knowledge, networks, and trust into progress that communities and institutions can sustain. Let’s connect your priorities with the strengths of Belayan.",
    startCta: "Start a conversation",
    workingLabel: "Working together",
    workingHeading: ["Built for continuity.", "From the beginning."],
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
      "Tell us about your priorities, the lasting outcome you want to support, and the knowledge or resources you would like to contribute.",
    contactTitle: "Let’s start a conversation.",
    messagePrompt: "Prefer messaging?",
    whatsappLabel: "WhatsApp our team",
    callLabel: "Call our team",
    contactNote:
      "To help us begin, include your organization, area of interest, and proposed timeframe.",
  },
  id: {
    sectionLabel: "Bermitra dengan BESTARI",
    heading: ["Tujuan bersama.", "Kemajuan yang berlanjut."],
    lead: "Kemitraan yang bermakna mengubah sumber daya, pengetahuan, jejaring, dan kepercayaan menjadi kemajuan yang dapat dijaga oleh masyarakat dan lembaga. Mari hubungkan prioritas Anda dengan kekuatan Belayan.",
    startCta: "Mulai percakapan",
    workingLabel: "Bekerja bersama",
    workingHeading: ["Dibangun untuk berlanjut.", "Sejak awal."],
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
      "Ceritakan prioritas Anda, hasil jangka panjang yang ingin Anda dukung, serta pengetahuan atau sumber daya yang ingin Anda kontribusikan.",
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
