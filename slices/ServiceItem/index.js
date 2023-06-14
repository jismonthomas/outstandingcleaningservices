/**
 * @typedef {import("@prismicio/client").Content.ServiceItemSlice} ServiceItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceItemSlice>} ServiceItemProps
 * @param {ServiceItemProps}
 */
const ServiceItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for service_item (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServiceItem;
