import { Navigation } from "@/models";
import { routerPaths } from "@/constants";

export const navigations: Navigation[] = [
  {
    to: routerPaths.formPage,
    name: "폼 예제"
  },
  {
    to: routerPaths.viewModelPage,
    name: "뷰 모델 패턴화 예제"
  }
];