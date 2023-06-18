/**
 * @typedef {import("@prismicio/client").Content.HeadingAndTextSlice} HeadingAndTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingAndTextSlice>} HeadingAndTextProps
 * @param {HeadingAndTextProps}
 */
const HeadingAndText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for heading_and_text (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeadingAndText;
