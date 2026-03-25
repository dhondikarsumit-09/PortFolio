interface SkillChipProps {
  label: string;
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <li className="glass-pill rounded-full px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-cyan-300/50 hover:text-foreground">
      {label}
    </li>
  );
}
