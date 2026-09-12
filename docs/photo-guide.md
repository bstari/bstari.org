# BESTARI photography handoff

> **Review-only stock set.** The six JPEGs currently in `public/photos/` are free Unsplash stock images used to review the layout and image treatment. They do not depict BESTARI projects, beneficiaries, or Muai Village; replace them with approved BESTARI photography before publication.

Each source page states that the image is free to use under the Unsplash License.

| Filename | Review use | Photographer and source |
| --- | --- | --- |
| `hero-belayan.jpg` | River and rainforest setting | Aidil Putera — [Unsplash photo](https://unsplash.com/photos/a-river-running-through-a-forest-filled-with-lots-of-trees-mKCRWwj_s_I) |
| `community-belayan.jpg` | Community portrait | Rian A. Saputro — [Unsplash photo](https://unsplash.com/photos/two-women-sitting-on-the-ground-in-a-village-vr2jWFQim0w) |
| `training-learning.jpg` | Skills workshop | Hafizha Anisa — [Unsplash photo](https://unsplash.com/photos/women-painting-batik-designs-on-fabric-XOvNsILkVCo) |
| `training-livelihoods.jpg` | Rural livelihood activity | Maximus Beaumont — [Unsplash photo](https://unsplash.com/photos/a-woman-works-in-a-rural-sunny-setting-1vPuVtmTgvM) |
| `training-agriculture.jpg` | Sustainable agriculture | Jan Hildebrand — [Unsplash photo](https://unsplash.com/photos/farmers-working-in-flooded-rice-paddies-surrounded-by-palm-trees-azdSLacrFMA) |
| `community-knowledge.jpg` | Group discussion | Sebastian Ciepiela — [Unsplash photo](https://unsplash.com/photos/group-of-women-sitting-around-a-table-discussing-swhA61y25iE) |

To replace the placeholders, place the following JPEG files in `public/photos/`, using the exact lowercase filenames below. Run `bun run build` after adding them (restart the development server for a local preview). The design detects available photos at build time and replaces the decorative river artwork.

| Priority | Filename | Best image for this space | Suggested size |
| --- | --- | --- | --- |
| First | `hero-belayan.jpg` | A strong, natural photograph of people learning or working together in the Belayan region, ideally with a sense of the surrounding landscape. Keep the main people near the center; this space crops to portrait on desktop and landscape on mobile. | At least 1800 × 2100 px; provide an uncropped original if available |
| Second | `training-learning.jpg` | A real workshop in progress: a participant demonstrating a skill, asking a question, or collaborating with a trainer. | 1600 × 1200 px, 4:3 |
| Second | `training-livelihoods.jpg` | Women, smallholders, or entrepreneurs working on a practical business activity, product, or group exercise. | 1600 × 1200 px, 4:3 |
| Second | `training-agriculture.jpg` | A trainer and farmers examining crops, soil, or an agricultural practice together in the field. | 1600 × 1200 px, 4:3 |
| Second | `community-knowledge.jpg` | A community discussion, participatory mapping session, interview, or documentation of local knowledge. | 1600 × 1200 px, 4:3 |
| Third | `community-belayan.jpg` | A candid community gathering in Muai, showing the people behind the organization. Main subjects centered, with enough room for portrait cropping. | At least 1600 × 1800 px |

Choose real interactions, natural light, and clear expressions over rows of people holding a banner. Avoid embedded text, heavy filters, watermarks, and nearly identical group shots. Aim for files under 500 KB, and preserve original files separately. Use images with permission to publish; take particular care with identifiable children.

For each replacement, supply the real activity name, date, village, organizer, photographer/credit, a short description, and any publication restrictions. The review set has descriptive alt text; update the corresponding `alt` prop in `src/components/pages.tsx` after reviewing each BESTARI photograph. Confirm or adjust location captions as well.

## Project portfolio content

The organization brief defines strategic pillars but gives no verified project titles, dates, partners, participant counts, or outcomes. The work page therefore presents focus areas and clearly says project documentation is being prepared.

To publish a useful funder-facing project story, send: project name, organizer (BESTARI or KBS), dates, location, local need, activities delivered, partners and their permission to be named, verified results, and 3–5 photographs with captions. Distinguish KBS activities from BESTARI projects. Add only figures you can support. We can then replace the portfolio notice with concise project summaries and dedicated detail pages.
