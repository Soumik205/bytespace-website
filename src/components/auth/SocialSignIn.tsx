import { FacebookIcon, GoogleIcon } from "@/components/icons/Icons";

const providers = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Google", icon: GoogleIcon },
];

export function SocialSignIn({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* The design draws this divider 7px left of the card's center line. */}
      <div className="flex items-center gap-[11px] text-lg text-subtle sm:w-[439px]">
        <span className="h-px flex-1 bg-divider" />
        or
        <span className="h-px flex-1 bg-divider" />
      </div>
      <div className="mt-10 flex justify-center gap-4">
        {providers.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            aria-label={`Sign in with ${name}`}
            className="grid size-[72px] place-items-center rounded-card border border-divider text-black transition-colors hover:bg-surface"
          >
            <Icon className="size-10" />
          </button>
        ))}
      </div>
    </div>
  );
}
