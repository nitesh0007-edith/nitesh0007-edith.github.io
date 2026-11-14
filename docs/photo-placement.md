# Personal photo placement

The photo selection adds evidence and personality to the existing portfolio, while keeping the manga opening illustration. Photographs remain authentic: only orientation, resolution and compression change. Layout crops use CSS; framed photos open the full composition in a new tab. Exported WebP assets omit source EXIF metadata.

| Upload | Source         | Decision and purpose                                                                                                                      |
| ------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | IMG_9919.jpg   | Photo journal: city walks. The full setting adds a sense of place.                                                                        |
| 2      | IMG_9658.jpg   | Photo journal: coastal detours. Adds a quieter outdoor scene.                                                                             |
| 3      | IMG_9301.jpg   | Reserve: strong campus portrait, but overlaps the About portrait and university photos.                                                   |
| 4      | IMG_7774.jpg   | Photo journal: winter paths. A distinct outdoor moment. No summit or route claim is made.                                                 |
| 5      | IMG_7081.jpg   | Photo journal: London after dark. Selected over the similar London portrait.                                                              |
| 6      | IMG_6940.jpg   | Reserve: overlaps image 5 in setting and clothing.                                                                                        |
| 7      | IMG_5895.JPG   | Education: university community. Display the complete group composition.                                                                  |
| 8      | IMG_5895 2.jpg | Omit: a crop of image 7.                                                                                                                  |
| 9      | IMG_5614.JPG   | Photo journal: campus days. Caption as friends at university, without inventing an event or team role.                                    |
| 10     | IMG_5614 2.JPG | Omit: duplicate of image 9.                                                                                                               |
| 11     | IMG_4734.JPG   | Education: scholarship reception. Retain the event banner and both people.                                                                |
| 12     | IMG_4704.jpg   | Reserve: overlaps the other Glasgow portraits; sunglasses make it less suited to the primary About portrait.                              |
| 13     | IMG_3979.JPG   | Reserve: attractive university backdrop, already represented in the education photos.                                                     |
| 14     | IMG_2873.JPG   | Reserve: another campus portrait; do not imply an award from the visible document alone.                                                  |
| 15     | IMG_2857.JPG   | Education research feature and Provider Fairness project card. The printed dissertation connects the technical work to a tangible result. |
| 16     | DSC01728.JPEG  | Reserve: alternate CodeOlympics celebration; use image 17 as the single lead photo.                                                       |
| 17     | DSC01723.jpg   | Achievements: CodeOlympics medal presentation. Complements the existing award details.                                                    |
| 18     | DSC01487.jpg   | About: primary real portrait. A clear, warm face replaces the previous illustrated portrait in that section.                              |

## Assets and loading

Selected photos live in `public/images/personal/`, with descriptive filenames. Each has a 640px rendition and a larger rendition; native `picture` sources select a suitable size for the viewport. Photos below the hero load lazily. `src/components/PersonalPhoto.tsx` centralises alt text, intrinsic dimensions, responsive sources and links to full compositions.

The journal is deliberately separate from project and employment content. Medal photos illustrate the relevant recognition; the university group is not attributed to a specific award or competition.
