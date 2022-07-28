export function getCurrentPageSlug(currentPage: string): string {
  return currentPage.slice(1).split('/')[0];
}
