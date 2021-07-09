import theme from "./theme";

declare module "react-fela" {
  export function useFela<T = typeof theme, P = {}>(
    props?: P
  ): FelaHookProps<T, P>;
}
