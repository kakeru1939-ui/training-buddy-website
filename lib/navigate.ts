/**
 * window.location.replace のラッパー。
 * テスト時にモジュールモックで差し替えられるよう関数として切り出す。
 */
export function navigateTo(url: string): void {
  window.location.replace(url)
}
