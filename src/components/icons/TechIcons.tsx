/* Real Brand-Color Tech Icons (custom SVG — official brand colors) */
import type { FC } from "react";

type IconProps = { className?: string };

export const ReactIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(97, 218, 251, 0.45))" }}>
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

export const NextjsIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.6" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />
    <path
      d="M8.3 7.5h1.95l6.2 9.05V7.5h1.55v9.25h-1.95L7.9 7.72V16.75H8.3V7.5Z"
      fill="currentColor"
    />
    <circle cx="16.35" cy="7.5" r="1.1" fill="currentColor" />
  </svg>
);

export const NodeIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(51, 153, 51, 0.45))" }}>
    <path
      d="M12 2.3 3.9 7v10L12 21.7l8.1-4.7V7L12 2.3Z"
      fill="#339933"
    />
    <path
      d="M12 3 4.2 7.4v9.2L12 21l7.8-4.4V7.4L12 3Zm-1.1 14.1c-2.5 0-3.4-1.4-3.4-3.4V9.6c0-2 1-3.4 3.4-3.4.7 0 1.3.1 1.8.3.8.3 1.2.7 1.2 1.3 0 .4-.3.7-.9 1-.4.2-.9.3-1.3.4.6.2 1.1.5 1.1 1.1 0 .5-.4.9-1.2 1.1.8.2 1.2.6 1.2 1.2 0 .8-.8 1.4-1.9 1.6Zm.1-5.9c.4-.1.8-.3.8-.7s-.4-.6-.9-.8c-.4-.1-.9-.2-1.5-.2-1.3 0-1.7.6-1.7 1.6v1.3c0 1 .5 1.6 1.7 1.6.7 0 1.3-.1 1.7-.3.4-.2.7-.5.7-.9 0-.3-.3-.6-.7-.8-.5-.2-1-.3-1.7-.3V11.2Zm3.6 5.9h-1.6V9.6h1.6v8.4Z"
      fill="#fff"
      opacity="0.95"
    />
  </svg>
);

export const TailwindIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(56, 189, 248, 0.5))" }}>
    <path
      d="M12.1 5.4c-2.3 0-3.8 1.1-4.6 3.4 1-1.4 2.1-1.8 3.4-1.3.7.3 1.2.8 2 1.5 1 1 2.2 2 4.4 2 2.3 0 3.8-1.1 4.6-3.4-1 1.4-2.1 1.8-3.4 1.3-.7-.3-1.2-.8-2-1.5-1-1-2.2-2-4.4-2ZM7.5 11.3C5.2 11.3 3.7 12.4 2.9 14.7c1-1.4 2.1-1.8 3.4-1.3.7.3 1.2.8 2 1.5 1 1 2.2 2 4.4 2 2.3 0 3.8-1.1 4.6-3.4-1 1.4-2.1 1.8-3.4 1.3-.7-.3-1.2-.8-2-1.5-1-1-2.2-2-4.4-2Z"
      fill="url(#tw-grad)"
    />
    <defs>
      <linearGradient id="tw-grad" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#22D3EE" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
  </svg>
);

export const JsIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(247, 223, 30, 0.55))" }}>
    <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#F7DF1E" />
    <path
      d="M13.4 16.5c.2 1.4 1.2 2.1 3 2.1 1.3 0 2.2-.6 2.2-1.6 0-1.1-.8-1.5-2.1-2l-.7-.3c-2-.8-3.3-1.7-3.3-3.9 0-1.9 1.4-3.4 3.7-3.4 1.6 0 2.7.5 3.2 2.1l-1.8 1.1c-.2-.8-.6-1.1-1.4-1.1-.7 0-1.2.5-1.2 1.1 0 .8.5 1.1 1.8 1.7l.7.3c2.4 1 3.6 1.9 3.6 4 0 2.4-1.8 3.6-4.3 3.6-2.5 0-4-1.3-4.5-3.2L13.4 16.5ZM6.1 16.6c.2 1 1 1.6 2.1 1.6.8 0 1.4-.3 1.8-.9l1.5 1.1c-.8 1.3-2.1 1.9-3.6 1.9-2.4 0-4.1-1.3-4.1-3.5V7.9h2.1v8.7Z"
      fill="#111"
    />
  </svg>
);

export const HtmlIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(228, 77, 38, 0.45))" }}>
    <path d="M4 3h16l-1.4 15.5L12 21l-6.6-2.5L4 3Z" fill="#E44D26" />
    <path d="M12 19l4.5-1.7L17.8 5H12v14Z" fill="#F16529" opacity="0.9" />
    <path d="M8.1 7.2h7.9l.2 2.5H8.3L8.1 7.2Zm-.3 3.8h7.7l-.4 3.8L12 15.8l-3.2-.9-.1-1.1h1.8l.1.6 1.4.4 1.4-.4.2-1.6H7.8l-.2-1.2Z" fill="#fff" />
  </svg>
);

export const CssIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(38, 77, 228, 0.5))" }}>
    <path d="M4 3h16l-1.4 15.5L12 21l-6.6-2.5L4 3Z" fill="#1572B6" />
    <path d="M12 19l4.5-1.7L17.8 5H12v14Z" fill="#33A9DC" opacity="0.9" />
    <path d="M7.5 6.5h9l.2 2-9-.1-.2.1Zm-.1 3.2h9l-.3 3.2-8.8.1.1-1.2h6.2l-.1 1.2-3.2.4-.2-1.4-2.8.3.2-2.6Z" fill="#fff" />
  </svg>
);

export const MongodbIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(77, 179, 61, 0.5))" }}>
    <path
      d="M12 2.2c-.9 2.5-2.2 4-2.8 5.3-.9 2-.6 5 .6 6.9 1.5 2.4 2.2 4.3 2.2 7.4v.2h.1c.1-.8.2-1.6.5-2.4.5-1.2 1.2-2.4 2.1-3.6 1.4-1.9 2.3-4.5 1.9-7.3-.3-2.2-1.7-4-3.1-5.6C12.6 2.4 12.4 2.2 12 2.2Z"
      fill="#4DB33D"
    />
    <path
      d="M12.4 21.8V22h-.1v-.2c0-.5 0-1 .1-1.5-.1.4-.1.9-.1 1.5Z"
      fill="#4DB33D"
    />
  </svg>
);

export const MysqlIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(0, 117, 143, 0.55))" }}>
    <path
      d="M3.8 8.4c.8-.5 2-1.4 3-1.3.7 0 1.3.5 1.3 1.1 0 .8-.4 1.5-1.5 2 .1.9.3 1.7.7 2.2.3.4.7.7 1.1.6.2-.1.4-.3.6-.6.2.2.4.5.5.7.5.7 1.5 1 2.3 1.1.6.1 1.1-.1 1.6-.6 1.7-1.8 3.6-4.2 5-6.5 0 0-.6 0-.8.1-.3.1-.5.4-.7.7 0 0 1.2-.8 1.4-.9l.1-.1c-1.3 1.1-3.2 2.3-4.2 2.3-1.1 0-.5-1.6 0-2.2.4-.4.8-.1.8-.1l-.2.1c-.6-.4-.7-1-.4-1.6.2-.4.7-.5.7-.5-2.5 1.4-4.7 3-6.1 5.1-.5.8-1 1.6-1.2 2.6-.4-.3-1.2-1.1-1.4-2Z"
      fill="#00758F"
    />
    <path
      d="M18.2 5.6c-1.8 2-4.1 3.6-6.5 5-.3.2-.5.5-.4.9.3.8 1 1 1.4 1l.3-.1c1.1-1 2.3-2.3 3.3-3.4.8-.9 1.4-1.7 1.9-2.8 0 0 .4-.3.7-.2l.1.1c0 0-1 .5-1.7 1.5Z"
      fill="#F29111"
    />
  </svg>
);

export const PrismaIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(45, 50, 79, 0.5))" }}>
    <path d="M11.8 2.4 2.6 17a1.4 1.4 0 0 0 .2 1.7l7.5 3.2c.7.3 1.6.1 2-.5L21.4 6c.6-.9.2-2.1-.9-2.4L13.5 2.2a1.4 1.4 0 0 0-1.7.2Z" fill="#2D324F" />
    <path d="m13.6 20.5-10-4.3 9.5-15.4.5.1 8.9 3-.1 3.5-8.8 13.1Z" fill="url(#prisma-grad)" />
    <defs>
      <linearGradient id="prisma-grad" x1="3.6" y1="16.2" x2="21.7" y2="11.4" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E6E8F0" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
    </defs>
  </svg>
);

export const GitIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(240, 80, 51, 0.5))" }}>
    <path d="M22.4 11.3 12.7 1.6a1.2 1.2 0 0 0-1.7 0L9 3.6l2.1 2.1a1.6 1.6 0 0 1 2 2l2 2a1.6 1.6 0 1 1-1.1.3l-1.9-1.9V15a1.6 1.6 0 1 1-1.2 0v-6.9a1.6 1.6 0 0 1-.9-2L7 4l-5.4 5.4a1.2 1.2 0 0 0 0 1.7l9.7 9.7c.5.5 1.2.5 1.7 0l9.4-9.5c.5-.4.5-1.1 0-1.7Z" fill="#F05032" />
  </svg>
);

export const NpmIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(203, 56, 55, 0.45))" }}>
    <rect x="2" y="7.5" width="20" height="10" fill="#CB3837" />
    <path d="M5.3 18.5V10h2.1v6.2h2V10h2.1v8.5h-6.2Zm6.3 0V10h2.1v6.2h2V10h2.1v8.5h-6.2Z" fill="#fff" />
  </svg>
);

export const PostmanIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(255, 108, 55, 0.55))" }}>
    <circle cx="12" cy="12" r="9" fill="#FF6C37" />
    <circle cx="12" cy="12" r="4.2" fill="#FFC107" />
    <path d="M15.8 8.2c-.6-.4-1.3-.5-2-.3-.3 0-.5.1-.8.2.4-.1.7 0 1 .3.2.2.2.5.3.8.1-.2.1-.5 0-.7.2.1.4.1.5-.2-.5-.2-.8-.3-1-.3Z" fill="#fff" />
  </svg>
);

export const WordpressIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(33, 117, 155, 0.55))" }}>
    <circle cx="12" cy="12" r="10.5" fill="#21759B" />
    <path d="M12 3a9 9 0 0 0-3.7 17.2c.4 0 .5-.2.5-.4l.3-1.4c.1-.3 0-.5-.1-.6-1.2-.5-2-2.2-2-3.8 0-2.3 1.7-3.9 4-3.9 1.2 0 2.3.5 3 1.3.2.3.4.4.6.4.3 0 .5-.1.8-.3.2-.2.5-.5.8-.5-2-1.9-5.3-2-5.3.8 0 .8.3 1.5.8 2.1.3.4.6.8.6 1.3 0 .3-.1.6-.3 1-.4.7-.6 1.6-.1 3.2 0 0 .5 1.5.6 2 0 .1.2.2.3.2.1 0 .2-.1.2-.2.2-.6.9-3.1 1.2-4.2l.1.2c.3.8.4 1.5.5 2 .7 2.3.3 4.2 0 4.7A9 9 0 1 0 12 3Zm-5.3 8.4c-.1.3-.2.6-.3 1 0 .2-.2.4-.3.4-.2 0-.3-.1-.3-.4-.1-.3-.2-.6-.3-1 0-.2-.1-.4-.2-.4-.1 0-.2.1-.3.4 0 .3-.1.7-.3 1.2-.2.5-.4 1-.6 1.5-.1.2-.2.3-.3.3-.1 0-.3 0-.3-.3A8.9 8.9 0 0 1 3.7 12c.3.1.5 0 .7-.4.3-.7.7-1.4 1.2-2.1.3-.3.5-.5.7-.5.2 0 .2.3.2.6.1.5.2 1.1.2 1.8Zm14-1.1A8.9 8.9 0 0 1 12 20.9v-.1c.3.1.6.2.9.2.3 0 .6-.1.9-.2.2-.1.3-.1.4-.2l.1.2c0 .1.1.1.1.1A9 9 0 0 0 20.7 10.3Z" fill="#fff" />
  </svg>
);

export const BootstrapIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(129, 18, 184, 0.55))" }}>
    <rect x="2" y="3" width="20" height="18" rx="3" fill="#7952B3" />
    <path d="M8 17.3h3.6c1.8 0 2.9-.9 2.9-2.3 0-1-.6-1.8-1.7-1.9 1.1-.2 1.8-.9 1.8-2 0-1.5-1.1-2.4-3-2.4H8v8.6Zm1.7-3.6v-2.7h1.9c1 0 1.6.5 1.6 1.4s-.6 1.3-1.6 1.3H9.7Zm0 1.3v3H11.8c1.1 0 1.8-.5 1.8-1.5s-.7-1.5-1.8-1.5H9.7Z" fill="#fff" />
  </svg>
);

export const PhpIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(119, 123, 180, 0.55))" }}>
    <rect x="2" y="8" width="20" height="8" rx="1.5" fill="#777BB4" />
    <path d="M6.2 13.8H5L5.5 11l.7.1c.3 0 .5 0 .7.2.2.2.2.5.2.8s-.2.8-.5.8 0 0-.4-.1-.4-.1Zm11.6 0H16.7l-.1.6c-.1.3-.2.5-.4.5h-.3l.4-2.3.8.2c.5.1.7.3.7.7 0 .5-.3.5-.3.6Zm-7.2-.6-.5 1.2-.4-.1 1-2.5h.7l.7 2 .4.1-.6-1.3H10.6Z" fill="#fff" />
  </svg>
);

export const CloudinaryIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(52, 99, 235, 0.55))" }}>
    <path d="M19.5 10.2c-1.4 0-2.6-1.1-2.6-2.5 0-.9.4-1.7 1.1-2.2-1-1-2.5-1.6-4.2-1.6-2.4 0-4.4 1.6-4.9 3.8-.2 0-.4.1-.6.1-2 0-3.6 1.6-3.6 3.6 0 .5.1 1 .3 1.5C3.5 13.4 2.5 14.7 2.5 16.2 2.5 18 4 19.5 5.8 19.5h13.7c1.9 0 3.5-1.5 3.5-3.4 0-1.9-1.5-3.4-3.5-3.4h-.3Z" fill="#3463EB" />
    <ellipse cx="12" cy="8.4" rx="3.6" ry="1.1" fill="url(#cl-grad)" />
    <defs>
      <linearGradient id="cl-grad" x1="8.4" y1="8.4" x2="15.6" y2="8.4" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF512F" />
        <stop offset="100%" stopColor="#F09819" />
      </linearGradient>
    </defs>
  </svg>
);

export const CpanelIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(255, 102, 0, 0.55))" }}>
    <rect x="2" y="5" width="20" height="14" rx="2.5" fill="#FF6600" />
    <circle cx="7" cy="12" r="1.8" fill="#fff" />
    <circle cx="10.5" cy="12" r="1.8" fill="#fff" opacity=".9" />
    <circle cx="14" cy="12" r="1.8" fill="#fff" opacity=".8" />
    <rect x="17" y="10.3" width="3" height="3.4" rx=".6" fill="#fff" opacity=".75" />
  </svg>
);

export const VsCodeIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(0, 122, 204, 0.55))" }}>
    <path d="M4 3.6 16.7 2l3.9 3.1v13.8L16.7 22 4 20.4l-1.8-2.3V6L4 3.6Z" fill="#007ACC" />
    <path d="M17.2 3.1v17.8l3.4-3V6l-3.4-2.9Zm-9.9 15L15 12 7.3 5.9l-.3.4v11.4l.3.4Zm-3.5.6 1.2-1.2V6.5L3.8 5.3v13.4Z" fill="#fff" opacity=".95" />
  </svg>
);

export const ReduxIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(118, 74, 188, 0.55))" }}>
    <path
      d="M16.6 7.9c.7.1 1.3.4 1.9.9.6.4 1 1 1.1 1.7l.1.9v.4h-3.8v-.1c0-.7.1-1.4.3-2 .3-.5.5-.9.4-1.8ZM3.4 10.4h3.8v.1c0 .7-.2 1.5-.4 2-.2.5-.6.9-.4 1.8-.7-.1-1.4-.4-1.9-.9-.6-.4-1-1-1.1-1.7l-.1-.9v-.4ZM12 2.5c2 0 3.8.7 5.3 2a6.9 6.9 0 0 1 2.1 5.1c-.1 1-.3 1.9-.6 2.6-.3.7-.7 1.2-1.1 1.6-.3.4-.6.7-.7.9v.1c.5.7.8 1.5.8 2.4 0 1.5-.8 2.9-2.4 3.9-1.6 1-3.6 1.4-6.1 1.4-2.1 0-3.9-.6-5.4-1.9A6.9 6.9 0 0 1 4.6 15c.1-1 .3-1.9.6-2.5.3-.7.7-1.3 1.2-1.7l.5-.5v-.1c-.5-.6-.9-1.4-.9-2.3 0-1.3.7-2.5 2-3.4 1.3-1 3-1.5 5-1.5Z"
      fill="#764ABC"
    />
    <circle cx="12" cy="12" r="3.2" fill="#fff" opacity=".95" />
  </svg>
);

export const ReactRouterIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(244, 66, 81, 0.55))" }}>
    <circle cx="12" cy="12" r="10" fill="#F44251" />
    <path d="M9.3 12.5 11 14.3c.1.1.3.1.4 0L14.8 11c.1 0 .2-.1.2-.2v-.8c0-.2-.2-.3-.4-.2l-4.3 2.6c-.3.2-.3.6 0 .8.1.1.1.2.1.2Z" fill="#fff" />
    <circle cx="8.5" cy="8.5" r="1.6" fill="#fff" opacity=".95" />
    <circle cx="15.5" cy="15.5" r="1.6" fill="#fff" opacity=".95" />
  </svg>
);

export const RestApiIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(10, 102, 194, 0.55))" }}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="#0A66C2" opacity=".15" stroke="#0A66C2" strokeOpacity=".7" strokeWidth="1" />
    <path d="M7 9.5h10M7 12h7M7 14.5h10" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const MailIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(234, 67, 53, 0.5))" }}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" fill="#EA4335" opacity=".18" stroke="#EA4335" strokeOpacity=".85" strokeWidth="1" />
    <path d="m5 7 7 5 7-5" stroke="#EA4335" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UploadIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(10, 102, 194, 0.55))" }}>
    <rect x="3" y="4" width="18" height="16" rx="3" fill="#0A66C2" opacity=".14" stroke="#0A66C2" strokeOpacity=".85" strokeWidth="1" />
    <path d="M12 16V8m0 0-3 3m3-3 3 3M7 19h10" stroke="#0A66C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GlobeIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(10, 102, 194, 0.55))" }}>
    <circle cx="12" cy="12" r="9" fill="#0A66C2" opacity=".14" stroke="#0A66C2" strokeOpacity=".85" strokeWidth="1.4" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="#0A66C2" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const ServerIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(10, 102, 194, 0.55))" }}>
    <rect x="3" y="4" width="18" height="7" rx="2" fill="#0A66C2" opacity=".14" stroke="#0A66C2" strokeOpacity=".85" strokeWidth="1" />
    <rect x="3" y="13" width="18" height="7" rx="2" fill="#0A66C2" opacity=".14" stroke="#0A66C2" strokeOpacity=".85" strokeWidth="1" />
    <circle cx="6.5" cy="7.5" r="1" fill="#0A66C2" />
    <circle cx="6.5" cy="16.5" r="1" fill="#0A66C2" />
    <rect x="9" y="6.5" width="9" height="1" rx=".5" fill="#0A66C2" opacity=".55" />
    <rect x="9" y="15.5" width="9" height="1" rx=".5" fill="#0A66C2" opacity=".55" />
  </svg>
);

export const PuzzleIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(10, 102, 194, 0.55))" }}>
    <path d="M10 3.5h4V5a2 2 0 1 0 3 1 2 2 0 0 1 2-1h2.5V7a2.5 2.5 0 0 1 0 5V14H20a2 2 0 1 0-1 3 2 2 0 0 1 1 2v2.5H15.5A5.5 5.5 0 0 1 10 18.5 5.5 5.5 0 0 1 4.5 13V10A5.5 5.5 0 0 1 10 3.5Z" fill="#0A66C2" opacity=".16" stroke="#0A66C2" strokeOpacity=".9" strokeWidth="1" />
  </svg>
);

export const StackIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(10, 102, 194, 0.55))" }}>
    <path d="M12 3 21 8l-9 5-9-5 9-5Z" fill="#0A66C2" opacity=".18" stroke="#0A66C2" strokeOpacity=".9" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" stroke="#0A66C2" strokeWidth="1.3" strokeOpacity=".7" strokeLinejoin="round" />
  </svg>
);

/* Generic fallback tech icon */
export const CodeIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 4px rgba(10, 102, 194, 0.55))" }}>
    <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 6l-4 12" stroke="#0A66C2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Master Map: skill name substring -> Icon + override text color */
export type TechMeta = {
  Icon: FC<IconProps>;
  /* Optional color override applied to the tile's text/accent using currentColor icons */
  keyword?: string;
};

const rules: Array<[RegExp, FC<IconProps>]> = [
  [/next\.?\s*js/i, NextjsIcon],
  [/github/i, (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .3c-6.6 0-12 5.4-12 12 0 5.3 3.5 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4C17.2 4 18.2 4.3 18.2 4.3c.7 1.7.3 2.9.2 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4 1 1.2 1 2.4v3.6c0 .3.2.7.8.6C20.5 22.1 24 17.6 24 12.3c0-6.6-5.4-12-12-12Z"/>
    </svg>
  )],
  [/git/i, GitIcon],
  [/redux/i, ReduxIcon],
  [/router/i, ReactRouterIcon],
  [/react/i, ReactIcon],
  [/tailwind/i, TailwindIcon],
  [/bootstrap/i, BootstrapIcon],
  [/elementor/i, PuzzleIcon],
  [/wordpress/i, WordpressIcon],
  [/forminator|smush|plugin\s*management/i, PuzzleIcon],
  [/javascript|es6|\bjs\b/i, JsIcon],
  [/html/i, HtmlIcon],
  [/css/i, CssIcon],
  [/node|express/i, NodeIcon],
  [/mongo|mongoose/i, MongodbIcon],
  [/mysql/i, MysqlIcon],
  [/prisma/i, PrismaIcon],
  [/rest\s*api|jwt/i, RestApiIcon],
  [/multer/i, UploadIcon],
  [/cloudinary/i, CloudinaryIcon],
  [/smtp|protocol/i, MailIcon],
  [/vs\s*code|vscode/i, VsCodeIcon],
  [/npm/i, NpmIcon],
  [/postman/i, PostmanIcon],
  [/php/i, PhpIcon],
  [/cpanel|hpanel/i, CpanelIcon],
  [/dns|domain/i, GlobeIcon],
  [/server/i, ServerIcon],
  [/hosting/i, StackIcon],
  [/static|dynamic|deploy/i, CodeIcon],
];

export function getTechIcon(name: string): {
  Icon: FC<IconProps>;
  matched: boolean;
} {
  for (const [rx, Icon] of rules) {
    if (rx.test(name)) return { Icon, matched: true };
  }
  return { Icon: CodeIcon, matched: false };
}
