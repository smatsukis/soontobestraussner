import HorizontalRule from "./HorizontalRule";

export default function Heading({ children, header, ...props }) {
    return (
        <div className="pb-8 relative">
        <h1 className="font-heading tracking-heading text-5xl pb-3 uppercase z-10">{header}</h1>
        <HorizontalRule />
      
        </div>
    );
  }


