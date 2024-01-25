import HorizontalRule from "./HorizontalRule";

export default function Heading({ children, header, ...props }) {
    return (
        <div className="pb-8">
        <h1 className="font-cursive text-5xl pb-3">{header}</h1>
        <HorizontalRule />
      
        </div>
    );
  }


