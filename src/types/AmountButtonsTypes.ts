interface IChangeAmountFunction {
  (): void;
}

export interface IAmountButtonsProps {
  amount: number;
  increase: IChangeAmountFunction;
  decrease: IChangeAmountFunction;
}
