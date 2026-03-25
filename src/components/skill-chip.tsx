interface SkillChipProps {
  label: string;
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <li className="glass-pill rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:text-foreground dark:bg-white/[0.04]">
      {label}
    </li>
  );
}
