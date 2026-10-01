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

export function StudentsIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z" />
    </Icon>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M18 16.12c-.76 0-1.44.3-1.96.77l-7.13-4.15c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.85c-.54-.5-1.25-.81-2.04-.81-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92m0-12.08c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-12 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
    </Icon>
  );
}

export function PlayCircleIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 60 60" {...props}>
      <path d="M30 0C13.44 0 0 13.44 0 30s13.44 30 30 30 30-13.44 30-30S46.56 0 30 0m-6 43.5v-27L42 30z" />
    </Icon>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2-6H6v-2h12zm-4 4H6v-2h8z" />
    </Icon>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15 8v8H5V8zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1" />
    </Icon>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M18 12h-4v1.5h4zm0 3h-4v1.5h4z" />
      <path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9-3h2v5h-2zm9 16H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5z" />
      <path d="M9 15a1.5 1.5 0 1 0 .001-2.999A1.5 1.5 0 0 0 9 15m2.08 1.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39" />
    </Icon>
  );
}

export function ConsultationIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M11 14H9a9 9 0 0 1 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2m4.45.5h-2A2.99 2.99 0 0 1 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74a4.97 4.97 0 0 0 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m1.5 1h-3a2.99 2.99 0 0 1-2.95-2.5h-2A4.97 4.97 0 0 0 16 19.74V22h6v-2.5c0-.83-.67-1.5-1.5-1.5" />
    </Icon>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7.005 6h10l-5.01 6.3zm-2.75-.39c2.02 2.59 5.75 7.39 5.75 7.39v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39a.998.998 0 0 0-.79-1.61H5.045c-.83 0-1.3.95-.79 1.61" />
    </Icon>
  );
}

export function CategoryIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M11.5 2 6 11h11zm0 3.84L13.43 9H9.56zM17 13c-2.49 0-4.5 2.01-4.5 4.5S14.51 22 17 22s4.5-2.01 4.5-4.5S19.49 13 17 13m0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M2.5 21.5h8v-8h-8zm2-6h4v4h-4z" />
    </Icon>
  );
}

export function SortIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z" />
    </Icon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m7.41 8.295 4.59 4.58 4.59-4.58L18 9.705l-6 6-6-6z" />
    </Icon>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <path d="M21.885 7.77 20.115 6l-10 10 10 10 1.77-1.77-8.23-8.23z" />
    </Icon>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <path d="m10.115 24.23 1.77 1.77 10-10-10-10-1.77 1.77 8.23 8.23z" />
    </Icon>
  );
}
