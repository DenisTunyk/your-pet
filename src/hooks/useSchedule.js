export const useSchedule = workDays => {
  const minMN =
    workDays && workDays.length !== 0
      ? workDays[0].isOpen
        ? workDays[0].from + '-'
        : 'closed'
      : 'day / night';

  const maxMN =
    workDays && workDays.length !== 0
      ? workDays[0].isOpen
        ? workDays[0].to
        : ''
      : '';

  const minTU =
    workDays && workDays.length !== 0
      ? workDays[1].isOpen
        ? workDays[1].from + '-'
        : 'closed'
      : 'day / night';
  const maxTU =
    workDays && workDays.length !== 0
      ? workDays[1].isOpen
        ? workDays[1].to
        : ''
      : '';

  const minWE =
    workDays && workDays.length !== 0
      ? workDays[2].isOpen
        ? workDays[2].from + '-'
        : 'closed'
      : 'day / night';
  const maxWE =
    workDays && workDays.length !== 0
      ? workDays[2].isOpen
        ? workDays[2].to
        : ''
      : '';

  const minTH =
    workDays && workDays.length !== 0
      ? workDays[3].isOpen
        ? workDays[3].from + '-'
        : 'closed'
      : 'day / night';
  const maxTH =
    workDays && workDays.length !== 0
      ? workDays[3].isOpen
        ? workDays[3].to
        : ''
      : '';

  const minFR =
    workDays && workDays.length !== 0
      ? workDays[4].isOpen
        ? workDays[4].from + '-'
        : 'closed'
      : 'day / night';
  const maxFR =
    workDays && workDays.length !== 0
      ? workDays[4].isOpen
        ? workDays[4].to
        : ''
      : '';

  const minSA =
    workDays && workDays.length !== 0
      ? workDays[5].isOpen
        ? workDays[5].from + '-'
        : 'closed'
      : 'day / night';
  const maxSA =
    workDays && workDays.length !== 0
      ? workDays[5].isOpen
        ? workDays[5].to
        : ''
      : '';

  const minSU =
    workDays && workDays.length !== 0
      ? workDays[6].isOpen
        ? workDays[6].from + '-'
        : 'closed'
      : 'day / night';
  const maxSU =
    workDays && workDays.length !== 0
      ? workDays[6].isOpen
        ? workDays[6].to
        : ''
      : '';

  const weekSchedule = [
    { start: minMN, end: maxMN },
    { start: minTU, end: maxTU },
    { start: minWE, end: maxWE },
    { start: minTH, end: maxTH },
    { start: minFR, end: maxFR },
    { start: minSA, end: maxSA },
    { start: minSU, end: maxSU },
  ];

  let workTime;

  switch (new Date().getDay()) {
    case 1:
      workTime = minMN + maxMN;
      break;
    case 2:
      workTime = minTU + maxTU;
      break;
    case 3:
      workTime = minWE + maxWE;
      break;
    case 4:
      workTime = minTH + maxTH;
      break;
    case 5:
      workTime = minFR + maxFR;
      break;
    case 6:
      workTime = minSA + maxSA;
      break;
    case 0:
      workTime = minSU + maxSU;
      break;
    default:
  }
  return [workTime, weekSchedule];
};
