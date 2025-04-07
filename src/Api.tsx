export function getModifier(attributeNum: number): number {
  return Math.floor((attributeNum - 10) / 3);
}

export function setUserTimeout(mostRecentTimeoutID: number): number{
    const num = setTimeout(...)
    return num
}