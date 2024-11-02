# WeMakeDevs

## Adding a hackathon

This guide shows a step-by-step process on adding a new hackathon.

1. Create a new directory inside the `/hackathons/` directory with the same name as of the slug.

 > [!NOTE]
 > Slug is the url end-point you want the hackathon to have. For example, the **Hack for good** hackathon has the url `https://wemakedevs.org/hackathons/hack-for-good`, so it's slug will be `hack-for-good` (which will also be the directory name)


2. Add the following files in the directory you just created --

   - **`data.json`**: Add all the meta data about the hackathon in this file. Here's the type for the json --

     ```ts
     {
       "title": string,
       "prize": number,
       "type": "online", // leave it as it is
       "startDate": string, // ISO 8601 date-time format
       "endDate": string, // ISO 8601 date-time format
       "description": string,
       "prizes": [
         {
           "name": string,
           "description": string
         },
         // add more objects if there are more prizes
       ],
       "submissionLink": string,
       "registrationLink": string
     }
     ```

   - **`about.mdx`**: Add the about content of the hackathon in this file.

   - **`rules.mdx`**: Add the rules of the hackathon in this file.

   - **`requirements.mdx`**: Add the requirements of the hackathon in this file.

   - **`resources.mdx`**: Add the resources of the hackathon in this file.

> [!NOTE]
> While adding data in `mdx` files, use regular headings and paragraphs. The app will automatically convert headings as follow --
>
> - `#` (h1) -> `h3`
> - `##` (h2) -> `h4`
> - `###` (h3) -> `h5`

3. Add the following images in `/src/assets/images/` directory --

- `<slug>-thumbnail.jpg`: Thumbnail image of the hackathon. It should be of 1280 x 853 px dimension.
- `<slug>-cover.png`: Banner image of the hackathon. It should be of 1200 x 160 px dimension.

That's it! You have successfully added a new hackathon. 🎉
