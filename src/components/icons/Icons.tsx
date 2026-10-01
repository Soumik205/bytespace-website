import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

function Icon({ viewBox = "0 0 24 24", ...props }: IconProps) {
  return (
    <svg viewBox={viewBox} fill="currentColor" aria-hidden="true" {...props} />
  );
}

export function LogoMark(props: IconProps) {
  return (
    <Icon viewBox="0 0 28.875 31.5" {...props}>
      <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0v21c0 5.799 4.701 10.5 10.5 10.5zm7.875 0c5.799 0 10.5 4.701 10.5 10.5H21c-5.799 0-10.5-4.701-10.5-10.5zm0 21c5.799 0 10.5-4.701 10.5-10.5H21c-5.799 0-10.5 4.701-10.5 10.5z" />
    </Icon>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
    </Icon>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Icon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z" />
    </Icon>
  );
}

export function StarRoundedIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m14.43 9.61-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 9.61H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z" />
    </Icon>
  );
}

export function StarSmallIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 16 16" {...props}>
      <path d="M7.525 2.051a.5.5 0 0 1 .95 0l1.218 3.72a.5.5 0 0 0 .474.345l3.914.008a.5.5 0 0 1 .294.904l-3.161 2.308a.5.5 0 0 0-.181.557l1.201 3.726a.5.5 0 0 1-.769.558l-3.172-2.293a.5.5 0 0 0-.586 0l-3.172 2.293a.5.5 0 0 1-.769-.558l1.201-3.726a.5.5 0 0 0-.181-.557L1.625 7.028a.5.5 0 0 1 .294-.904l3.914-.008a.5.5 0 0 0 .474-.345z" />
    </Icon>
  );
}

export function SignalIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 20 20" {...props}>
      <path d="M13.75 3.33h2.5v13.34h-2.5zm-10 8.34h2.5v5h-2.5zm5-4.17h2.5v9.17h-2.5z" />
    </Icon>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
    </Icon>
  );
}
