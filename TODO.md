# TODO: Fix Experiences Fetch in Skills Component

- [x] Update the Sanity query in Skills.jsx from '*[_type == "experiences"]' to '*[_type == "experience"]'.
- [x] Modify the data processing in Skills.jsx to group fetched experiences by 'duration' (as year) and transform into the expected structure with 'works' array.
- [ ] Test the component to ensure experiences are fetched and displayed correctly.
- [ ] If no data appears, verify that experience documents exist in Sanity studio and have the required fields.
