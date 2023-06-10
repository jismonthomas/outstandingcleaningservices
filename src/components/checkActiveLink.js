
// import { useRouter } from 'next/router';
// import React, { useEffect } from 'react';

// export const checkActiveLink = ({ ...props }) => {
//     const { asPath, isReady } = useRouter();

//     useEffect(() => {
//         // Check if the router fields are updated client-side
//         if (isReady) {
//             // Dynamic route will be matched via props.as
//             // Static route will be matched via props.href
//             var linkPathname = new URL((props.as || props.href), location.href).pathname;
//             // Using URL().pathname to get rid of query and hash
//             const activePathname = new URL(asPath, location.href).pathname;

//             const newClassName =
//                 linkPathname === activePathname
//                     ? `${className} ${activeClassName}`.trim()
//                     : className;

//             if (newClassName !== computedClassName) {
//                 setComputedClassName(newClassName);
//             }
//         }
//     }, [
//         asPath,
//         isReady,
//         props.as,
//         props.href,
//         activeClassName,
//         className,
//         computedClassName,
//     ]);
//     return (
//         <div>checkActiveLink</div>
//     );
// };
