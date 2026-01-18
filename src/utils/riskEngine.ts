export function calculateRisk({
  timeLate,
  noResponseMinutes,
  healthFlag,
}: {
  timeLate: boolean;
  noResponseMinutes: number;
  healthFlag: boolean;
}) {
  let risk = 0;
  if (timeLate) risk += 2;
  if (noResponseMinutes > 5) risk += 3;
  if (healthFlag) risk += 2;

  if (risk >= 5) return 'HIGH';
  if (risk >= 3) return 'MEDIUM';
  return 'LOW';
}
