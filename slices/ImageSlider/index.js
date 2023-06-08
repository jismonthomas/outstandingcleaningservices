/**
 * @typedef {import("@prismicio/client").Content.ImageSliderSlice} ImageSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSliderSlice>} ImageSliderProps
 * @param {ImageSliderProps}
 */
const ImageSlider = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_slider (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageSlider;
