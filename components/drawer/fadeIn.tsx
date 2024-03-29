import React from "react";

export default function FadeInSection(props: any) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef: any = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
        setVisible(entry.isIntersecting);
      });
    });

    const { current }: any = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
