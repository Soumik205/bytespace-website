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

export function FacebookIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 40 40" {...props}>
      <path d="M36.67 20c0-9.205-7.465-16.667-16.67-16.667S3.333 10.795 3.333 20c0 8.319 6.095 15.214 14.063 16.464V24.818h-4.232V20h4.232v-3.672c0-4.177 2.488-6.484 6.295-6.484 1.824 0 3.731.325 3.731.325v4.102H25.32c-2.07 0-2.716 1.284-2.716 2.603V20h4.623l-.739 4.818h-3.884v11.646C30.572 35.214 36.67 28.319 36.67 20" />
    </Icon>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 40 40" {...props}>
      <path d="M35.96 20.375c0-1.097-.1-2.139-.27-3.153H20v6.264h8.99c-.41 2.056-1.59 3.792-3.34 4.972v4.167h5.36c3.14-2.903 4.95-7.181 4.95-12.25M20 9.93c2.46 0 4.65.848 6.39 2.5l4.75-4.75C28.26 4.986 24.5 3.333 20 3.333c-6.51 0-12.14 3.75-14.87 9.195l5.52 4.291c1.32-3.958 5-6.889 9.35-6.889" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 36.667c-6.51 0-12.14-3.75-14.87-9.195l5.52-4.292c1.32 3.959 5 6.889 9.35 6.889 2.25 0 4.15-.611 5.65-1.611l5.36 4.167c-2.75 2.542-6.51 4.042-11.01 4.042m-9.35-19.848v-4.291H5.13z"
      />
      <path d="M5.13 23.18h5.52c-.34-1-.52-2.069-.52-3.18s.19-2.181.52-3.181l-5.52-4.291A16.46 16.46 0 0 0 3.33 20c0 2.694.66 5.222 1.8 7.472z" />
      <path d="M10.65 23.18H5.13v4.292z" />
    </Icon>
  );
}
