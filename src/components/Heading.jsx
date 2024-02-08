import HorizontalRule from "./HorizontalRule";

export default function Heading({ children, header, ...props }) {
    return (
        <div className="pb-8">
        <h1 className="font-heading tracking-heading text-5xl pb-3 uppercase">{header}</h1>
        <HorizontalRule />
      
        </div>
    );
  }


