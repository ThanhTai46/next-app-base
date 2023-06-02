interface ErrorProps {
  message: string | undefined;
}

export default function Error(props: ErrorProps) {
  return (
    props.message ? <div className="text-red-700">
      {props.message}
    </div> : null
  );
}
