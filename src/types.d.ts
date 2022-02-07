interface ISimParams {
  rounds?: number
  switch?: boolean
}

interface IAction {
  type: setParams
  payload: ISimParams
}

type IDispatch = (action: IAction) => void

interface ItoggleDialogViewer {
  toggleDialogViewer: (arg1: string, arg2: boolean) => void
  handleCancel: (
    event: SyntheticEvent<unknown>,
    reason?: string | undefined
  ) => void
}
