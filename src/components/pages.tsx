import AgricultureOutlined from "@mui/icons-material/AgricultureOutlined";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import AutoStoriesOutlined from "@mui/icons-material/AutoStoriesOutlined";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";
import NaturePeopleOutlined from "@mui/icons-material/NaturePeopleOutlined";
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
  ContactEmail,
  ContactGrid,
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

export function HomePage() {
  return (
    <MuiTheme>
      <Hero>
        <HeroGrid>
          <HeroCopy>
            <Place component="p">
              <LocationOnOutlined aria-hidden="true" />
              From Belayan, East Kalimantan
            </Place>
            <HeroHeading component="h1">
              Stronger communities.
              <br />
              Lasting possibilities.
            </HeroHeading>
            <HeroDescription component="p">
              We connect local knowledge with wider opportunity, so communities
              can shape a prosperous, sustainable future.
            </HeroDescription>
            <Actions>
              <CtaLink href="/partner/" gold>
                Partner with us {arrow}
              </CtaLink>
              <QuietLink href="/work/">Explore our work</QuietLink>
            </Actions>
            <HeroSignature component="p">
              Belayan Sejahtera Lestari
              <span>Independent social foundation</span>
            </HeroSignature>
          </HeroCopy>
          <FieldPhoto
            name="hero-belayan"
            alt=""
            hero
            caption="Our roots run along the Belayan River."
          />
        </HeroGrid>
      </Hero>

      <Introduction component="section">
        <SectionLabel component="p">The belief behind BESTARI</SectionLabel>
        <Box>
          <Heading2 component="h2">
            Lasting change begins
            <br />
            with people.
          </Heading2>
          <BodyText component="p">
            Farmers, women, young people, and local institutions hold the
            knowledge and ambition to move their communities forward. We work
            alongside them to turn that potential into opportunity.
          </BodyText>
          <TextLink href="/about/">Get to know BESTARI {arrow}</TextLink>
        </Box>
      </Introduction>

      <FocusSection>
        <FocusInner>
          <SectionHeading>
            <Box>
              <SectionLabel component="p">Our focus</SectionLabel>
              <Heading2 component="h2">Connected by purpose.</Heading2>
            </Box>
            <BodyText component="p">
              Four areas of work.
              <br />
              One commitment to stronger communities.
            </BodyText>
          </SectionHeading>
          <FocusGrid>
            <FocusCard href="/work/#education">
              <FocusIcon aria-hidden="true">
                <SchoolOutlined />
              </FocusIcon>
              <Heading3 component="h3">
                Education &amp;
                <br />
                human development
              </Heading3>
              <p>Practical knowledge. Greater possibilities.</p>
              <span className="card-arrow">{arrow}</span>
            </FocusCard>
            <FocusCard href="/work/#livelihoods">
              <FocusIcon aria-hidden="true">
                <GroupsOutlined />
              </FocusIcon>
              <Heading3 component="h3">
                Community economy &amp;
                <br />
                sustainable livelihoods
              </Heading3>
              <p>Local capacity. Economic independence.</p>
              <span className="card-arrow">{arrow}</span>
            </FocusCard>
            <FocusCard href="/work/#environment">
              <FocusIcon aria-hidden="true">
                <AgricultureOutlined />
              </FocusIcon>
              <Heading3 component="h3">
                Environment, climate &amp;
                <br />
                sustainable agriculture
              </Heading3>
              <p>Resilient land. Resilient communities.</p>
              <span className="card-arrow">{arrow}</span>
            </FocusCard>
            <FocusCard href="/work/#knowledge">
              <FocusIcon aria-hidden="true">
                <AutoStoriesOutlined />
              </FocusIcon>
              <Heading3 component="h3">
                Research, knowledge &amp;
                <br />
                local culture
              </Heading3>
              <p>Local experience. Shared understanding.</p>
              <span className="card-arrow">{arrow}</span>
            </FocusCard>
          </FocusGrid>
        </FocusInner>
      </FocusSection>

      <PartnershipCallout>
        <Box>
          <SectionLabel component="p">
            A shared investment in the future
          </SectionLabel>
          <Heading2 component="h2">
            Local roots.
            <br />
            Wider possibilities.
          </Heading2>
        </Box>
        <Box>
          <BodyText component="p">
            Bring your knowledge, resources, and networks. Together, we can
            build opportunities that communities carry forward.
          </BodyText>
          <CtaLink href="/partner/">Let’s build a partnership {arrow}</CtaLink>
        </Box>
      </PartnershipCallout>
    </MuiTheme>
  );
}

export function AboutPage() {
  return (
    <MuiTheme>
      <PageHeading component="section">
        <SectionLabel component="p">Our story</SectionLabel>
        <Heading1 component="h1">
          Our roots are local.
          <br />
          Our responsibility
          <br />
          spans generations.
        </Heading1>
        <Lead component="p">
          Belayan Sejahtera Lestari is an independent social foundation based in
          Muai Village, East Kalimantan. We believe sustainable development
          begins with people.
        </Lead>
      </PageHeading>

      <StoryGrid component="section">
        <FieldPhoto
          name="community-belayan"
          alt=""
          caption="Muai Village, Kembang Janggut, East Kalimantan."
        />
        <StoryCopy>
          <Heading2 component="h2">
            Born from experience.
            <br />
            Built for what comes next.
          </Heading2>
          <BodyText component="p">
            Our story grew from years alongside farmers, workers, women, young
            people, and rural institutions in the Belayan River region.
          </BodyText>
          <BodyText component="p">
            These roots are connected to Koperasi Belayan Sejahtera (KBS). That
            journey showed us that community prosperity needs more than economic
            opportunity alone. Learning, leadership, inclusion, and
            environmental stewardship need space to grow together.
          </BodyText>
          <BodyText component="p">
            BESTARI was established to provide that space. BESTARI and KBS are
            independent institutions, each with its own governance,
            responsibilities, and direction.
          </BodyText>
        </StoryCopy>
      </StoryGrid>

      <VisionBand>
        <Box
          sx={{
            width: "min(1240px, calc(100% - 112px))",
            marginInline: "auto",
            "@media (max-width: 999px)": { width: "calc(100% - 64px)" },
            "@media (max-width: 759px)": { width: "calc(100% - 40px)" },
          }}
        >
          <SectionLabel component="p">Our vision</SectionLabel>
          <Heading2 component="h2">
            Thriving communities with the knowledge, opportunity, and capacity
            to build a prosperous and sustainable future.
          </Heading2>
        </Box>
      </VisionBand>

      <Introduction component="section">
        <Box>
          <SectionLabel component="p">What guides us</SectionLabel>
          <Heading2 component="h2">
            A name.
            <br />A commitment.
          </Heading2>
        </Box>
        <Principles>
          <details open>
            <summary>
              Belayan — our roots
              {expand}
            </summary>
            <p>
              A river connecting villages, livelihoods, cultures, and
              generations. Our work begins where our relationships and
              understanding run deepest.
            </p>
          </details>
          <details>
            <summary>
              Sejahtera — shared prosperity
              {expand}
            </summary>
            <p>
              Prosperity means knowledge, dignity, security, participation, and
              the ability to shape one’s own future, as well as income.
            </p>
          </details>
          <details>
            <summary>
              Lestari — our responsibility
              {expand}
            </summary>
            <p>
              Progress must respect ecological limits and leave meaningful
              opportunities for the generations that follow.
            </p>
          </details>
          <PrinciplesNote component="p">
            Integrity, independence, inclusion, respect, sustainability, and
            collaboration guide how we work.
          </PrinciplesNote>
          <TextLink href="/partner/">
            Our approach to partnership {arrow}
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
  },
  {
    id: "knowledge",
    title: "Research, knowledge & local culture",
    line: "Local experience deserves to be heard.",
    description:
      "Documenting community knowledge and connecting it with research, data, technology, and wider networks so local experience can inform broader change.",
    topics: "Research · Documentation · Knowledge exchange · Local culture",
    photo: "community-knowledge",
  },
] as const;

export function WorkPage() {
  return (
    <MuiTheme>
      <PageHeading component="section">
        <SectionLabel component="p">Our work</SectionLabel>
        <Heading1 component="h1">
          Different starting points.
          <br />A shared future.
        </Heading1>
        <Lead component="p">
          Our four strategic pillars connect learning, livelihoods, the
          environment, and local knowledge. Each begins with the people who know
          their communities best.
        </Lead>
        <JumpLinks aria-label="Focus areas">
          <a href="#education">Learning</a>
          <a href="#livelihoods">Livelihoods</a>
          <a href="#environment">Environment</a>
          <a href="#knowledge">Knowledge</a>
        </JumpLinks>
      </PageHeading>

      <WorkList>
        {pillars.map((pillar) => (
          <WorkItem id={pillar.id} key={pillar.id}>
            <FieldPhoto name={pillar.photo} alt="" />
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
                  Explore the focus areas
                  {expand}
                </summary>
                <p>{pillar.topics}</p>
              </details>
            </Box>
          </WorkItem>
        ))}
      </WorkList>

      <PortfolioNote>
        <SectionLabel component="p">Project portfolio</SectionLabel>
        <Heading2 component="h2">Stories from the field.</Heading2>
        <BodyText component="p">
          We are preparing our project documentation for publication. This page
          currently presents our strategic focus; individual project stories and
          results will be shared as they are documented.
        </BodyText>
      </PortfolioNote>

      <VisionBand>
        <CompactCta>
          <Heading2 component="h2">See a shared priority?</Heading2>
          <CtaLink href="/partner/" gold>
            Explore a partnership {arrow}
          </CtaLink>
        </CompactCta>
      </VisionBand>
    </MuiTheme>
  );
}

export function PartnerPage() {
  return (
    <MuiTheme>
      <PageHeading component="section">
        <SectionLabel component="p">Partner with BESTARI</SectionLabel>
        <Heading1 component="h1">
          Shared purpose.
          <br />
          Lasting possibility.
        </Heading1>
        <Lead component="p">
          Meaningful partnership brings together resources, knowledge, networks,
          and trust. Let’s connect your priorities with the strengths of
          Belayan’s communities.
        </Lead>
        <CtaLink href="#conversation">Start a conversation {arrow}</CtaLink>
      </PageHeading>

      <FocusSection>
        <Introduction component="section">
          <Box>
            <SectionLabel component="p">Working together</SectionLabel>
            <Heading2 component="h2">
              Community at the center.
              <br />
              From the beginning.
            </Heading2>
          </Box>
          <Principles>
            <details open>
              <summary>
                Listen before we design
                {expand}
              </summary>
              <p>
                Start with local priorities, existing resources, and an
                understanding of how people live and work. Design programs
                alongside the communities involved.
              </p>
            </details>
            <details>
              <summary>
                Build capacity for the long term
                {expand}
              </summary>
              <p>
                Prioritize knowledge, local leadership, and institutional
                strength so communities can carry progress forward with less
                external support.
              </p>
            </details>
            <details>
              <summary>
                Learn from evidence
                {expand}
              </summary>
              <p>
                Agree on what success means, monitor responsibly, and use what
                we learn to improve the work together.
              </p>
            </details>
          </Principles>
        </Introduction>
      </FocusSection>

      <Introduction component="section">
        <Box>
          <SectionLabel component="p">Our commitment to trust</SectionLabel>
          <Heading2 component="h2">
            Accountability
            <br />
            that grows with us.
          </Heading2>
        </Box>
        <Box>
          <BodyText component="p">
            BESTARI is developing its systems for governance, financial
            accountability, program monitoring, and responsible decision-making.
          </BodyText>
          <BodyText component="p">
            Our commitment is to build an institution where resources can be
            traced, programs evaluated, and decisions explained. Institutional
            independence and community interests guide our partnerships.
          </BodyText>
          <BodyText component="p">
            We welcome philanthropic organizations, development agencies,
            universities, civil society, government, and responsible
            private-sector partners.
          </BodyText>
        </Box>
      </Introduction>

      <ContactSection id="conversation">
        <ContactGrid>
          <Box>
            <SectionLabel component="p">Begin a partnership</SectionLabel>
            <Heading2 component="h2">
              What could we
              <br />
              build together?
            </Heading2>
            <BodyText component="p">
              Tell us about your priorities, the communities you hope to work
              with, and the knowledge or resources you would like to contribute.
            </BodyText>
          </Box>
          <ContactCard>
            <Heading3 component="h3">Let’s start a conversation.</Heading3>
            <ContactEmail href="mailto:info@bstari.org?subject=Partnership%20enquiry">
              <MailOutlineRounded aria-hidden="true" />
              info@bstari.org
            </ContactEmail>
            <BodyText component="p">
              Or reach us on WhatsApp:
              <br />
              <TextLink href="https://wa.me/6282157245665">
                <WhatsApp aria-hidden="true" />
                +62 821-5724-5665 {arrow}
              </TextLink>
            </BodyText>
            <CtaLink href="mailto:info@bstari.org?subject=Partnership%20enquiry">
              Email our team {arrow}
            </CtaLink>
            <SmallText component="p">
              To help us begin, include your organization, area of interest, and
              proposed timeframe.
            </SmallText>
          </ContactCard>
        </ContactGrid>
      </ContactSection>
    </MuiTheme>
  );
}
