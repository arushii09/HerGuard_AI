// src/utils/dummyAI.ts

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface RiskContext {
  time: number;              // hour (0–23)
  isMoving: boolean;
  interactionGapMin: number; // minutes since last interaction
  healthFlags?: {
    fatigue?: boolean;
    anxiety?: boolean;
    medicalCondition?: boolean;
  };
}

export interface RiskResult {
  risk: RiskLevel;
  reason: string;
  shouldCheckIn: boolean;
}

/**
 * Simulated Intent-Aware Risk Detection
 * (Demo-friendly, explainable logic)
 */
export function evaluateRisk(context: RiskContext): RiskResult {
  let score = 0;
  let reasons: string[] = [];

  // Late night context
  if (context.time >= 22 || context.time <= 5) {
    score += 2;
    reasons.push('Late night activity detected');
  }

  // Long inactivity
  if (context.interactionGapMin > 30) {
    score += 2;
    reasons.push('No interaction for long time');
  }

  // Movement anomaly
  if (!context.isMoving && context.interactionGapMin > 15) {
    score += 1;
    reasons.push('Unexpected inactivity');
  }

  // Health sensitivity
  if (context.healthFlags?.fatigue) {
    score += 1;
    reasons.push('Fatigue reported');
  }

  if (context.healthFlags?.anxiety) {
    score += 2;
    reasons.push('Anxiety sensitivity enabled');
  }

  if (context.healthFlags?.medicalCondition) {
    score += 2;
    reasons.push('Medical condition sensitivity enabled');
  }

  // Decide risk level
  let risk: RiskLevel = 'LOW';
  if (score >= 6) risk = 'HIGH';
  else if (score >= 3) risk = 'MEDIUM';

  return {
    risk,
    shouldCheckIn: risk !== 'LOW',
    reason: reasons.join(', ') || 'Normal behavior',
  };
}

/**
 * Fake background monitoring tick
 * (Call this every X minutes in demo)
 */
export function simulateBackgroundCheck(): RiskContext {
  const hour = new Date().getHours();

  return {
    time: hour,
    isMoving: Math.random() > 0.4,
    interactionGapMin: Math.floor(Math.random() * 60),
    healthFlags: {
      fatigue: Math.random() > 0.7,
      anxiety: Math.random() > 0.8,
      medicalCondition: false,
    },
  };
}

/**
 * Dummy daily safety log (for Records screen)
 */
export function generateDailyRecord() {
  const risks: RiskLevel[] = ['LOW', 'MEDIUM', 'HIGH'];
  const actions = ['Monitoring', 'Check-In', 'Alert Sent'];

  return {
    date: new Date().toDateString(),
    risk: risks[Math.floor(Math.random() * risks.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    contact: 'Trusted Guardian',
  };
}
