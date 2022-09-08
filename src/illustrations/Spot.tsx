import { BoxProps } from "@specimen/foundation";
import { Base, BaseProps } from "./Base";
import { AnimatedBase, AnimatedBaseProps } from "./LottiePlayer";

export type SpotProps = Pick<BaseProps, "alt"> & {
  enableAspectRatio?: boolean;
};

const moods = {
  positive: {
    static: "illustrations/heart/spot/moods-positive.svg",
    animated: "illustrations/heart/spot/moods-positive.lottie",
  },
  cautionary: {
    static: "illustrations/heart/spot/moods-cautionary.svg",
    animated: "illustrations/heart/spot/moods-cautionary.lottie",
  },
  informative: {
    static: "illustrations/heart/spot/moods-informative.svg",
    animated: "illustrations/heart/spot/moods-informative.lottie",
  },
  negative: {
    static: "illustrations/heart/spot/moods-negative.svg",
    animated: "illustrations/heart/spot/moods-negative.lottie",
  },
  assertive: {
    static: "illustrations/heart/spot/moods-assertive.svg",
    animated: "illustrations/heart/spot/moods-assertive.lottie",
  },
};

export interface AnimatedSpotProps
  extends SpotProps,
    Omit<AnimatedBaseProps, "name" | "fallback"> {
  id: keyof typeof moods;
  isAnimated?: boolean;
}

export const AnimatedSpot = ({
  id,
  isAnimated,
  enableAspectRatio,
  ...props
}: AnimatedSpotProps) => {
  if (isAnimated) {
    return (
      <AnimatedBase
        aspectRatio={enableAspectRatio ? "square" : undefined}
        name={moods[id].animated}
        fallback={moods[id].static}
        {...props}
      />
    );
  }

  return (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      name={moods[id].static}
      {...props}
    />
  );
};

const staticSpots = {
  /**
   * Engagement
   */
  benefitsSurvey:
    "illustrations/heart/spot/template-library-benefits-survey.svg",
  customSurvey: "illustrations/heart/spot/template-library-custom-survey.svg",
  customUnattributedSurvey:
    "illustrations/heart/spot/template-library-custom-unattributed-survey.svg",
  engagementSurvey:
    "illustrations/heart/spot/template-library-engagement-survey.svg",

  inclusionSurvey:
    "illustrations/heart/spot/template-library-inclusion-survey.svg",
  quickEngagementSurvey:
    "illustrations/heart/spot/template-library-quick-engagement-survey.svg",
  valuesSurvey1:
    "illustrations/heart/spot/template-library-values-survey-1.svg",
  valuesSurvey2:
    "illustrations/heart/spot/template-library-values-survey-2.svg",
  wellBeingSurvey1:
    "illustrations/heart/spot/template-library-wellbeing-survey-1.svg",
  wellBeingSurvey2:
    "illustrations/heart/spot/template-library-wellbeing-survey-2.svg",
  wellBeingSurvey3:
    "illustrations/heart/spot/template-library-wellbeing-survey-3.svg",
  changeReadiness:
    "illustrations/heart/spot/template-library-change-readiness.svg",
  changeSuccess: "illustrations/heart/spot/template-library-change-success.svg",
  performanceDiagnostics:
    "illustrations/heart/spot/template-library-performance-diagnostics.svg",
  leadingThroughCrisis:
    "illustrations/heart/spot/template-library-leading-through-crisis.svg",
  emergencyResponse:
    "illustrations/heart/spot/template-library-emergency-response.svg",
  /**
   * Experience
   */
  candidateSurvey:
    "illustrations/heart/spot/template-library-candidate-survey.svg",
  customOnboardSurvey:
    "illustrations/heart/spot/template-library-custom-onboard-survey.svg",
  exitSurvey: "illustrations/heart/spot/template-library-exit-survey.svg",
  internSurvey: "illustrations/heart/spot/template-library-intern-survey.svg",
  phasedWeek1OnboardSurvey:
    "illustrations/heart/spot/template-library-phased-week-1-onboard-survey.svg",
  phasedWeek5OnboardSurvey:
    "illustrations/heart/spot/template-library-phased-week-5-onboard-survey.svg",
  singlePointOnboardSurvey:
    "illustrations/heart/spot/template-library-single-point-onboard-survey.svg",
  generalOnboardSurvey:
    "illustrations/heart/spot/template-library-general-onboard-survey.svg",
  remoteOnboardSurvey:
    "illustrations/heart/spot/template-library-remote-onboard-survey.svg",
  healthAndSafety:
    "illustrations/heart/spot/template-library-health-and-safety.svg",
  endOfProbation:
    "illustrations/heart/spot/template-library-end-of-probation.svg",
  newWaysOfWorking:
    "illustrations/heart/spot/template-library-new-ways-of-working.svg",
  reOnboarding: "illustrations/heart/spot/template-library-re-onboarding.svg",
  /**
   * Performance
   */
  individual360: "illustrations/heart/spot/template-library-individual-360.svg",
  leadership360: "illustrations/heart/spot/template-library-leadership-360.svg",
  manager360: "illustrations/heart/spot/template-library-manager-360.svg",
  individual180: "illustrations/heart/spot/template-library-individual-180.svg",
  leadership180: "illustrations/heart/spot/template-library-leadership-180.svg",
  manager180: "illustrations/heart/spot/template-library-manager-180.svg",
  teamEffectiveness1:
    "illustrations/heart/spot/template-library-team-effectiveness-1.svg",
  /**
   * Offices
   */
  teamEffectiveness2:
    "illustrations/heart/spot/template-library-team-effectiveness-2.svg",
  officesLondon: "illustrations/heart/spot/offices-london.svg",
  officesMelbourne: "illustrations/heart/spot/offices-melbourne.svg",
  officesNewYork: "illustrations/heart/spot/offices-new-york.svg",
  officesSanFrancisco: "illustrations/heart/spot/offices-san-francisco.svg",
  /**
   * Values
   */
  amplifyOthers: "illustrations/heart/spot/values-amplify-others.svg",
  courageToBeVulnerable:
    "illustrations/heart/spot/values-have-the-courage-to-be-vulnerable.svg",
  learnFasterThroughFeedback:
    "illustrations/heart/spot/values-learn-faster-through-feedback.svg",
  trustOthersToMakeDecisions:
    "illustrations/heart/spot/values-trust-others-to-make-decisions.svg",
  /**
   * COVID-19
   */
  wellbeingSurvey:
    "illustrations/heart/spot/template-library-wellbeing-survey.svg",
  response: "illustrations/heart/spot/template-library-response.svg",
  remoteWorkQSet:
    "illustrations/heart/spot/template-library-remote-work-q-set.svg",
  returnToWorkplace:
    "illustrations/heart/spot/template-library-return-to-workplace.svg",
  pulseSurvey: "illustrations/heart/spot/template-library-pulse-survey.svg",
  /**
   * New Account
   */
  accountBasics: "illustrations/heart/spot/new-account-account-basics.svg",
  companyDetails: "illustrations/heart/spot/new-account-company-details.svg",
  employeeData: "illustrations/heart/spot/new-account-employee-data.svg",
  gdpr: "illustrations/heart/spot/new-account-gdpr.svg",
  timezone: "illustrations/heart/spot/new-account-timezone.svg",
  addUser: "illustrations/heart/spot/new-account-add-user.svg",
  /**
   * Skills Coach (previously referred to as Manager Learning)
   */
  strategy: "illustrations/heart/spot/skills-coach-strategy.svg",
  resilience: "illustrations/heart/spot/skills-coach-resilience.svg",
  essentialResillience:
    "illustrations/heart/spot/skills-coach-essential-resillience.svg",
  remoteManager: "illustrations/heart/spot/skills-coach-remote-manager.svg",
  productivity: "illustrations/heart/spot/skills-coach-productivity.svg",
  essentialProductivity:
    "illustrations/heart/spot/skills-coach-essential-productivity.svg",
  influentialCommunication:
    "illustrations/heart/spot/skills-coach-influential-communication.svg",
  leadingChange: "illustrations/heart/spot/skills-coach-leading-change.svg",
  managerLearning: "illustrations/heart/spot/skills-coach-manager-learning.svg",
  feedback: "illustrations/heart/spot/skills-coach-feedback.svg",
  coaching: "illustrations/heart/spot/skills-coach-coaching.svg",
  ["1on1"]: "illustrations/heart/spot/skills-coach-1-on-1.svg",
  /**
   * Miscellaneous
   */
  actionPlans: "illustrations/heart/spot/miscellaneous-action-plans.svg",
  bCorp: "illustrations/heart/spot/miscellaneous-b-corp.svg",
  behavior: "illustrations/heart/spot/miscellaneous-behavior.svg",
  changeAgents: "illustrations/heart/spot/miscellaneous-change-agents.svg",
  communications: "illustrations/heart/spot/miscellaneous-communications.svg",
  community: "illustrations/heart/spot/miscellaneous-community.svg",
  company: "illustrations/heart/spot/miscellaneous-company.svg",
  conversations: "illustrations/heart/spot/miscellaneous-conversations.svg",
  dataVisualization:
    "illustrations/heart/spot/miscellaneous-data-visualization.svg",
  goals: "illustrations/heart/spot/miscellaneous-goals.svg",
  insights: "illustrations/heart/spot/miscellaneous-insights.svg",
  learn: "illustrations/heart/spot/miscellaneous-learn.svg",
  microphone: "illustrations/heart/spot/miscellaneous-microphone.svg",
  paperPen: "illustrations/heart/spot/miscellaneous-paper-pen.svg",
  powerfulInsights:
    "illustrations/heart/spot/miscellaneous-powerful-insights.svg",
  privacy: "illustrations/heart/spot/miscellaneous-privacy.svg",
  process: "illustrations/heart/spot/miscellaneous-process.svg",
  resources: "illustrations/heart/spot/miscellaneous-resources.svg",
  scienceBackedTools:
    "illustrations/heart/spot/miscellaneous-science-backed-tools.svg",
  skillsDevelopment:
    "illustrations/heart/spot/miscellaneous-skills-development.svg",
  viewReports: "illustrations/heart/spot/miscellaneous-view-reports.svg",
  readArticle: "illustrations/heart/spot/miscellaneous-read-article.svg",
  fastAction: "illustrations/heart/spot/miscellaneous-fast-action.svg",
  baselineSurvey: "illustrations/heart/spot/miscellaneous-baseline-survey.svg",
  spreadsheetTemplate:
    "illustrations/heart/spot/miscellaneous-spreadsheet-template.svg",
  addImage: "illustrations/heart/spot/miscellaneous-add-image.svg",
  meetingVoices: "illustrations/heart/spot/miscellaneous-meeting-voices.svg",
  workshop: "illustrations/heart/spot/miscellaneous-workshop.svg",
  video: "illustrations/heart/spot/miscellaneous-video.svg",
  reportSharing: "illustrations/heart/spot/miscellaneous-report-sharing.svg",
  blankSurvey: "illustrations/heart/spot/miscellaneous-blank-survey.svg",
  takeAim: "illustrations/heart/spot/miscellaneous-take-aim.svg",
  action: "illustrations/heart/spot/miscellaneous-action.svg",
  training1: "illustrations/heart/spot/miscellaneous-training-1.svg",
  training2: "illustrations/heart/spot/miscellaneous-training-2.svg",
  training3: "illustrations/heart/spot/miscellaneous-training-3.svg",
  shareReport: "illustrations/heart/spot/miscellaneous-share-report.svg",
  team1: "illustrations/heart/spot/miscellaneous-team-1.svg",
  team2: "illustrations/heart/spot/miscellaneous-team-2.svg",
  templates: "illustrations/heart/spot/miscellaneous-templates.svg",
  executiveReportSharing:
    "illustrations/heart/spot/miscellaneous-executive-report-sharing.svg",
  managerReportSharing:
    "illustrations/heart/spot/miscellaneous-manager-report-sharing.svg",
  leaderReportSharing:
    "illustrations/heart/spot/miscellaneous-leader-report-sharing.svg",
  alarm: "illustrations/heart/spot/miscellaneous-alarm.svg",
  fire: "illustrations/heart/spot/miscellaneous-fire.svg",
  fireworks: "illustrations/heart/spot/miscellaneous-fireworks.svg",
  fullImport: "illustrations/heart/spot/miscellaneous-full-import.svg",
  hrisImport: "illustrations/heart/spot/miscellaneous-hris-import.svg",
  partialImport: "illustrations/heart/spot/miscellaneous-partial-import.svg",
  starburst: "illustrations/heart/spot/miscellaneous-starburst.svg",
  stop: "illustrations/heart/spot/miscellaneous-stop.svg",
  trafficCone: "illustrations/heart/spot/miscellaneous-traffic-cone.svg",
  trophy: "illustrations/heart/spot/miscellaneous-trophy.svg",
  underConstruction:
    "illustrations/heart/spot/miscellaneous-under-construction.svg",
  valueAdd: "illustrations/heart/spot/miscellaneous-value-add.svg",
  recommendation: "illustrations/heart/spot/miscellaneous-recommendation.svg",
  objective: "illustrations/heart/spot/miscellaneous-objective.svg",
};

interface StaticSpotProps extends SpotProps, Omit<BoxProps, "alt"> {
  id: keyof typeof staticSpots;
}

const Spot = ({ id, enableAspectRatio, ...props }: StaticSpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name={staticSpots[id]}
  />
);

export default Spot;
